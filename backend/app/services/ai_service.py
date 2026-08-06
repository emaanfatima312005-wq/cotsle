from groq import Groq

from app.core.config import GROQ_API_KEY


client = Groq(
    api_key=GROQ_API_KEY
)


MODELS = [
    "openai/gpt-oss-120b",
    "llama-3.3-70b-versatile",
    "llama-3.1-8b-instant"
]


def generate_response(prompt: str):

    for model in MODELS:

        try:
            response = client.chat.completions.create(
                model=model,
                temperature=0.2,
                max_tokens=2000,
                messages=[
    {
        "role": "system",
        "content": "You are a professional COTSLE AI assistant. Always follow the requested output format exactly."
    },
    {
        "role": "user",
        "content": prompt
    }
]
            )
            print(f"✅ Using model: {model}")
            return response.choices[0].message.content

        except Exception as e:
            print(f"❌ {model} failed: {e}")


    return "AI service is currently unavailable."