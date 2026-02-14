import requests
import os

API_KEY = os.getenv("BACKBOARD_API_KEY")
BASE_URL = "https://app.backboard.io/api"
HEADERS = {"X-API-Key": API_KEY}

# Create assistant once (you could cache this)
def create_assistant():
    response = requests.post(
        f"{BASE_URL}/assistants",
        json={
            "name": "Flashcard Generator",
            "system_prompt": "You generate flashcards in JSON format."
        },
        headers=HEADERS,
    )
    return response.json()["assistant_id"]


def create_thread(assistant_id):
    response = requests.post(
        f"{BASE_URL}/assistants/{assistant_id}/threads",
        json={},
        headers=HEADERS,
    )
    return response.json()["thread_id"]


def send_message(thread_id, content):
    response = requests.post(
        f"{BASE_URL}/threads/{thread_id}/messages",
        headers=HEADERS,
        data={
            "content": content,
            "stream": "false"
        },
    )
    return response.json().get("content")


def generate_flashcards(note_content: str):

    assistant_id = create_assistant()
    thread_id = create_thread(assistant_id)

    prompt = f"""
    Convert the following notes into exactly 15 key term flashcards.

    Each flashcard must contain:
    - "term": a concise key concept (1–4 words)
    - "definition": a clear, student-friendly explanation (1–3 sentences)

    Return ONLY valid JSON in this exact format:

    [
    {{
        "term": "...",
        "definition": "..."
    }}
    ]

    Notes:
    {note_content}
    """

    response_text = send_message(thread_id, prompt)

    import json, re
    cleaned = re.sub(r"```json|```", "", response_text).strip()

    return json.loads(cleaned)
