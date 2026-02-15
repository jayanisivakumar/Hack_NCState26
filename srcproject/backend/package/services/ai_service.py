import requests
import os
import re

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

import re

def extract_manual_flashcards(content: str):
    pattern = r"\|\|(.*?)\|\|:\((.*?)\)"
    matches = re.findall(pattern, content)

    flashcards = []

    for term, definition in matches:
        flashcards.append({
            "term": term.strip(),
            "definition": definition.strip(),
            "user_generated": True
        })

    # manually written patterned format
    cleaned_content = re.sub(pattern, "", content)

    return flashcards, cleaned_content

def generate_ai_flashcards(note_content: str):

    prompt = f"""
    From the following notes, generate up to 20 important key term flashcards.

    Each flashcard must contain:
    - "term"
    - "definition"

    Return ONLY valid JSON:
    [
        {{
            "term": "...",
            "definition": "..."
        }}
    ]

    Notes:
    {note_content}
    """

    assistant_id = create_assistant()
    thread_id = create_thread(assistant_id)
    response_text = send_message(thread_id, prompt)

    import json, re
    cleaned = re.sub(r"```json|```", "", response_text).strip()

    ai_cards = json.loads(cleaned)

    # mark them as AI generated
    for card in ai_cards:
        card["user_generated"] = False

    return ai_cards

def generate_flashcards(note_content: str):

    # extract manual cards first
    manual_cards, cleaned_content = extract_manual_flashcards(note_content)

    # generate AI cards from remaining missed content
    ai_cards = generate_ai_flashcards(cleaned_content)

    # combine manual + ai generated content
    all_cards = manual_cards + ai_cards

    return all_cards

