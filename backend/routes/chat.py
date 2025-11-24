from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.rag import get_answer

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    answer = get_answer(request.message)
    return {"response": answer}
