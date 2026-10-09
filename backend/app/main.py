
from fastapi import FastAPI

app = FastAPI(title="BIOXTURE API")


@app.get("/")
def home():
    return {"message": "Hello BIOXTURE!"}
