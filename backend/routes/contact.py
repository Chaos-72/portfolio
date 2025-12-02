from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks, Request
from sqlalchemy.orm import Session
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from backend import models, database
from email_validator import validate_email, EmailNotValidError
import time
from collections import defaultdict

router = APIRouter()

# Simple in-memory rate limiter
class RateLimiter:
    def __init__(self, requests_limit: int = 3, time_window: int = 60):
        self.requests_limit = requests_limit
        self.time_window = time_window
        self.requests = defaultdict(list)

    def is_rate_limited(self, ip: str) -> bool:
        now = time.time()
        # Clean old requests
        self.requests[ip] = [req_time for req_time in self.requests[ip] if now - req_time < self.time_window]
        
        if len(self.requests[ip]) >= self.requests_limit:
            return True
        
        self.requests[ip].append(now)
        return False

rate_limiter = RateLimiter()

# ORIGINAL CODE (backup - uncomment to revert):
# def send_email_notification(message: models.MessageCreate):
#     sender_email = os.getenv("EMAIL_USER")
#     sender_password = os.getenv("EMAIL_PASSWORD")
#     receiver_email = sender_email # Send to self
# 
#     if not sender_email or not sender_password:
#         print("Email credentials not found. Skipping email notification.")
#         return
# 
#     subject = f"New Portfolio Message from {message.name}"
#     body = f"""
#     You have received a new message from your portfolio website:
# 
#     Name: {message.name}
#     Email: {message.email}
#     
#     Message:
#     {message.message}
#     """
# 
#     msg = MIMEMultipart()
#     msg['From'] = sender_email
#     msg['To'] = receiver_email
#     msg['Subject'] = subject
#     msg['Reply-To'] = message.email  # <--- This allows you to hit Reply and email the user directly
#     msg.attach(MIMEText(body, 'plain'))
# 
#     try:
#         with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
#             server.login(sender_email, sender_password)
#             server.send_message(msg)
#     except Exception as e:
#         print(f"Failed to send email: {e}")

# ORIGINAL CODE - SMTP VERSION (backup - uncomment to revert):
# def send_email_notification(message: models.MessageCreate):
#     sender_email = os.getenv("EMAIL_USER")
#     sender_password = os.getenv("EMAIL_PASSWORD")
#     receiver_email = sender_email # Send to self
# 
#     if not sender_email or not sender_password:
#         print("Email credentials not found. Skipping email notification.")
#         return
# 
#     subject = f"New Portfolio Message from {message.name}"
#     
#     # Improved email body with clear sender info
#     body = f"""
#     You have received a new message from your portfolio website.
#     
#     --------------------------------------------------
#     SENDER DETAILS
#     --------------------------------------------------
#     Name:    {message.name}
#     Email:   {message.email}
#     --------------------------------------------------
#     
#     MESSAGE:
#     
#     {message.message}
#     
#     --------------------------------------------------
#     To reply, simply hit 'Reply' in your email client.
#     The reply will go directly to {message.email}.
#     """
# 
#     msg = MIMEMultipart()
#     msg['From'] = f"Portfolio Contact <{sender_email}>" # Clearer sender name
#     msg['To'] = receiver_email
#     msg['Subject'] = subject
#     msg['Reply-To'] = message.email  # Keeps the reply-to functionality
#     msg.attach(MIMEText(body, 'plain'))
# 
#     try:
#         with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
#             server.login(sender_email, sender_password)
#             server.send_message(msg)
#     except Exception as e:
#         print(f"Failed to send email: {e}")

# NEW CODE (Resend API - works on Railway):
def send_email_notification(message: models.MessageCreate):
    import resend
    
    resend_api_key = os.getenv("RESEND_API_KEY")
    receiver_email = os.getenv("RECEIVER_EMAIL", "bhagatravi4contact@gmail.com")  # Your email
    
    if not resend_api_key:
        print("Resend API key not found. Skipping email notification.")
        return
    
    resend.api_key = resend_api_key
    
    subject = f"New Portfolio Message from {message.name}"
    
    # Email body in HTML format for better formatting
    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4F46E5;">New Message from Portfolio</h2>
        
        <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1F2937; margin-top: 0;">Sender Details</h3>
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Email:</strong> <a href="mailto:{message.email}">{message.email}</a></p>
        </div>
        
        <div style="background-color: #FFFFFF; padding: 20px; border-left: 4px solid #4F46E5; margin: 20px 0;">
            <h3 style="color: #1F2937; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">{message.message}</p>
        </div>
        
        <p style="color: #6B7280; font-size: 14px; margin-top: 30px;">
            To reply, simply hit 'Reply' in your email client. The reply will go directly to {message.email}.
        </p>
    </body>
    </html>
    """
    
    try:
        resend.Emails.send({
            "from": "Portfolio Contact <onboarding@resend.dev>",  # Resend's default sender
            "to": receiver_email,
            "subject": subject,
            "html": html_body,
            "reply_to": message.email  # Keeps reply-to functionality
        })
        print(f"Email sent successfully via Resend to {receiver_email}")
    except Exception as e:
        print(f"Failed to send email via Resend: {e}")

# ORIGINAL CODE (backup - uncomment to revert):
# @router.post("/contact", response_model=models.MessageResponse)
# def create_message(message: models.MessageCreate, background_tasks: BackgroundTasks, db: Session = Depends(database.get_db)):
#     # 1. Save to Database
#     db_message = models.ContactMessage(**message.dict())
#     db.add(db_message)
#     db.commit()
#     db.refresh(db_message)
# 
#     # 2. Send Email (in background to not block response)
#     background_tasks.add_task(send_email_notification, message)
# 
#     return db_message

# NEW CODE (With Validation & Rate Limiting):
@router.post("/contact", response_model=models.MessageResponse)
def create_message(
    message: models.MessageCreate, 
    request: Request,
    background_tasks: BackgroundTasks, 
    db: Session = Depends(database.get_db)
):
    # 1. Rate Limiting Check
    client_ip = request.client.host if request.client else "unknown"
    if rate_limiter.is_rate_limited(client_ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")

    # 2. Email Validation (Format + DNS Check)
    try:
        # check_deliverability=True checks MX records
        validate_email(message.email, check_deliverability=True)
    except EmailNotValidError as e:
        raise HTTPException(status_code=400, detail=f"Invalid email address: {str(e)}")

    # 3. Save to Database
    db_message = models.ContactMessage(**message.dict())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)

    # 4. Send Email (in background)
    background_tasks.add_task(send_email_notification, message)

    return db_message
