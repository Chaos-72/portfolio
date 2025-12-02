from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.database import engine, Base
from backend.routes import contact, chat
from backend.rag import initialize_rag
import os

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Ravi Portfolio API")

# Startup event removed for lazy loading

# CORS Configuration

# ORIGINAL CODE (backup - uncomment to revert):
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173", "http://localhost:3000"], # Vite default port
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# NEW CODE (for deployment - supports both local and production):
allowed_origins = [
    "http://localhost:5173",  # Vite dev server
    "http://localhost:3000",  # Alternative local port
]

# Add production frontend URL if specified
frontend_url = os.getenv("FRONTEND_URL")
if frontend_url:
    allowed_origins.append(frontend_url)
    # Also add without trailing slash if present
    if frontend_url.endswith("/"):
        allowed_origins.append(frontend_url.rstrip("/"))
    else:
        allowed_origins.append(frontend_url + "/")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_origin_regex=r"https://.*\.vercel\.app",  # Allow all Vercel domains (production & previews)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(contact.router, prefix="/api", tags=["contact"])
app.include_router(chat.router, prefix="/api", tags=["chat"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Ravi's Portfolio API"}
