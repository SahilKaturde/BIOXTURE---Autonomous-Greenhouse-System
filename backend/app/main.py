from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.plants import router as plants_router


from app.config import settings

app = FastAPI(title="BIOXTURE API")

allowed_origins = [
    origin.strip().rstrip("/")
    for origin in settings.frontend_urls.split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(plants_router)

@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "BIOXTURE API",
    }