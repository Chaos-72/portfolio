from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import models, database

router = APIRouter()

def send_email_notification(message: models.MessageCreate):
    sender_email = os.getenv("EMAIL_USER")
    sender_password = os.getenv("EMAIL_PASSWORD")
    receiver_email = sender_email # Send to self

    if not sender_email or not sender_password:
        print("Email credentials not found. Skipping email notification.")
        return

    subject = f"New Portfolio Message from {message.name}"
    body = f"""
    You have received a new message from your portfolio website:

    Name: {message.name}
    Email: {message.email}
    
    Message:
    {message.message}
    """

    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject
    msg['Reply-To'] = message.email  # <--- This allows you to hit Reply and email the user directly
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, sender_password)
            server.send_message(msg)
        print("Email notification sent successfully.")
    except Exception as e:
        print(f"Failed to send email: {e}")

@router.post("/contact", response_model=models.MessageResponse)
def create_message(message: models.MessageCreate, background_tasks: BackgroundTasks, db: Session = Depends(database.get_db)):
    # 1. Save to Database
    db_message = models.ContactMessage(**message.dict())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)

    # 2. Send Email (in background to not block response)
    background_tasks.add_task(send_email_notification, message)

    return db_message
