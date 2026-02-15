# lambda_function.py
from mangum import Mangum
from main import app  # your FastAPI app

handler = Mangum(app)
