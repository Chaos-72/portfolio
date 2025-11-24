from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routes import contact, chat
from rag import initialize_rag

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Ravi Portfolio API")

@app.on_event("startup")
async def startup_event():
    initialize_rag()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"], # Vite default port
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
