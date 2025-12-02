import os
# from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_openai import ChatOpenAI
from langchain_community.vectorstores import FAISS
# from langchain.text_splitter import CharacterTextSplitter
from langchain_text_splitters import CharacterTextSplitter
from langchain_classic.chains import RetrievalQA
from langchain_community.document_loaders import TextLoader
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# Global variables to hold the chains
qa_chain_gemini = None
qa_chain_mistral = None

def initialize_rag():
    global qa_chain_gemini, qa_chain_mistral
    if not GOOGLE_API_KEY:
        print("Warning: GOOGLE_API_KEY not found in environment variables.")
        return

    try:
        # 1. Load Data
        current_dir = Path(__file__).resolve().parent
        data_path = current_dir / "data" / "portfolio_content.txt"

        if not data_path.exists():
            raise FileNotFoundError(f"RAG data file not found: {data_path}")

        loader = TextLoader(str(data_path))
        documents = loader.load()

        # 2. Split Text
        text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
        texts = text_splitter.split_documents(documents)

        # 3. Create Embeddings & Vector Store
        embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        db = FAISS.from_documents(texts, embeddings)
        retriever = db.as_retriever()

        # 4. Create LLMs
        # Primary: Gemini
        # ORIGINAL CODE (backup - uncomment to revert):
        # llm_gemini = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key=GOOGLE_API_KEY, temperature=0.7)
        
        # NEW CODE (Fast fallback - no retries on quota errors):
        llm_gemini = ChatGoogleGenerativeAI(
            model="gemini-2.0-flash", 
            google_api_key=GOOGLE_API_KEY, 
            temperature=0.7,
            max_retries=0  # Don't retry - fail fast and switch to Mistral immediately
        )
        
        # Fallback 1: Mistral (OpenRouter)    
        llm_mistral = ChatOpenAI(
            api_key=os.getenv("OPENROUTER_API_KEY"),
            base_url="https://openrouter.ai/api/v1",
            model="mistralai/mistral-small-3.1-24b-instruct:free"
        )

        # Fallback 2: NVIDIA NIM (Llama 3)
        from langchain_nvidia_ai_endpoints import ChatNVIDIA
        llm_nvidia = ChatNVIDIA(
            model="mistralai/mistral-large-3-675b-instruct-2512",
            api_key=os.getenv("NVIDIA_API_KEY"), 
            temperature=0.7
        )

        # Fallback 3: Groq (Llama 3)
        from langchain_groq import ChatGroq
        llm_groq = ChatGroq(
            model="llama-3.3-70b-versatile",
            api_key=os.getenv("GROQ_API_KEY"),
            temperature=0.7
        )

        # 5. Create Chains
        qa_chain_gemini = RetrievalQA.from_chain_type(
            llm=llm_gemini, chain_type="stuff", retriever=retriever, return_source_documents=False
        )   
        qa_chain_mistral = RetrievalQA.from_chain_type(
            llm=llm_mistral, chain_type="stuff", retriever=retriever, return_source_documents=False
        )
        # We can reuse the retriever for all chains
        global qa_chain_nvidia, qa_chain_groq
        qa_chain_nvidia = RetrievalQA.from_chain_type(
            llm=llm_nvidia, chain_type="stuff", retriever=retriever, return_source_documents=False
        )
        qa_chain_groq = RetrievalQA.from_chain_type(
            llm=llm_groq, chain_type="stuff", retriever=retriever, return_source_documents=False
        )

        print("RAG System Initialized Successfully (Quadruple Chains).")
    except Exception as e:
        print(f"Error initializing RAG: {e}")

# Global variables for new chains
qa_chain_nvidia = None
qa_chain_groq = None

def get_answer(query: str) -> str:
    global qa_chain_gemini, qa_chain_mistral, qa_chain_nvidia, qa_chain_groq
    if not qa_chain_gemini:
        print("Initializing RAG system lazily...")
        initialize_rag()

    if not qa_chain_gemini:
        return "I'm sorry, my brain (AI backend) isn't fully connected yet. Please check the API key configuration."
    
    # Prompt engineering
    system_instruction = "You are an AI assistant for Ravi's portfolio. Answer the following question based on the context provided about Ravi. Be professional, concise, and helpful. If the answer is not in the context, say you don't know but suggest contacting Ravi directly."
    full_query = f"{system_instruction}\n\nQuestion: {query}"

    # Helper function to try a chain
    def try_chain(chain, name):
        if not chain:
            raise ValueError(f"{name} chain not initialized")
        print(f"Trying {name}...")
        return chain.invoke({"query": full_query})['result']

    # 1. Try Gemini
    try:
        return try_chain(qa_chain_gemini, "Gemini")
    except Exception as e:
        print(f"Gemini failed: {e}")
        
        # 2. Try Mistral
        try:
            return try_chain(qa_chain_mistral, "Mistral")
        except Exception as e2:
            print(f"Mistral failed: {e2}")
            
            # 3. Try NVIDIA
            try:
                return try_chain(qa_chain_nvidia, "NVIDIA")
            except Exception as e3:
                print(f"NVIDIA failed: {e3}")
                
                # 4. Try Groq
                try:
                    return try_chain(qa_chain_groq, "Groq")
                except Exception as e4:
                    return f"All AI models failed. Please try again later. (Error: {e4})"

# Initialize on import (or call explicitly in main.py startup event)
# initialize_rag() 
