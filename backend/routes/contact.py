from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from backend import models, database

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
    except Exception as e:
        print(f"Failed to send email: {e}")
    return db_message
