from groq import Groq

from app.core.config import GROQ_API_KEY


client = Groq(
    api_key=GROQ_API_KEY
)


MODELS = [
    "llama-3.3-70b-versatile",
    "llama-3.1-8b-instant",
    "openai/gpt-oss-120b"
]


def generate_response(prompt: str):

    for model in MODELS:

        try:
            response = client.chat.completions.create(
                model=model,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            )

            return response.choices[0].message.content

        except Exception as e:
            print(f"{model} failed:", e)


    return "AI service is currently unavailable."