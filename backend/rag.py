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

# Global variables to hold the chain
qa_chain = None

def initialize_rag():
    global qa_chain
    if not GOOGLE_API_KEY:
        print("Warning: GOOGLE_API_KEY not found in environment variables.")
        return

    try:
        # 1. Load Data
        # Use Path to get the absolute path relative to this file
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

        # 4. Create Retriever
        retriever = db.as_retriever()

        # 5. Create LLM & Chain
        llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key=GOOGLE_API_KEY, temperature=0.7)

        llm = ChatOpenAI(
            api_key=os.getenv("OPENROUTER_API_KEY"),
            base_url="https://openrouter.ai/api/v1",
            model="mistralai/mistral-small-3.1-24b-instruct:free"
        )
        
    
        qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            chain_type="stuff",
            retriever=retriever,
            return_source_documents=False
        )
        print("RAG System Initialized Successfully.")
    except Exception as e:
        print(f"Error initializing RAG: {e}")

def get_answer(query: str) -> str:
    if not qa_chain:
        return "I'm sorry, my brain (AI backend) isn't fully connected yet. Please check the API key configuration."
    
    try:
        # Prompt engineering to make it sound like Ravi's AI assistant
        system_instruction = "You are an AI assistant for Ravi's portfolio. Answer the following question based on the context provided about Ravi. Be professional, concise, and helpful. If the answer is not in the context, say you don't know but suggest contacting Ravi directly."
        full_query = f"{system_instruction}\n\nQuestion: {query}"
        
        result = qa_chain.invoke({"query": full_query})
        return result['result']
    except Exception as e:
        return f"Error generating answer: {e}"

# Initialize on import (or call explicitly in main.py startup event)
# initialize_rag() 
