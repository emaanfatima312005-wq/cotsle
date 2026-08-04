from fastapi import APIRouter
from app.schemas.consulting_ai import StrategyRequest
from app.services.ai_service import generate_response
from app.prompts.consulting_prompts import build_strategy_prompt
from app.schemas.consulting_ai import ReadinessRequest
from app.prompts.consulting_prompts import build_readiness_prompt
from app.schemas.consulting_ai import UseCaseRequest
from app.prompts.consulting_prompts import build_use_case_prompt

router = APIRouter(
    prefix="/consulting/ai",
    tags=["Consulting AI"]
)

@router.post("/strategy")
def ai_strategy(request: StrategyRequest):

    prompt = build_strategy_prompt(request)

    answer = generate_response(prompt)

    return {
        "strategy": answer
    }

@router.post("/readiness")
def ai_readiness(request: ReadinessRequest):

    prompt = build_readiness_prompt(request)

    answer = generate_response(prompt)

    return {
        "readiness": answer
    }

@router.post("/use-cases")
def ai_use_cases(request: UseCaseRequest):

    prompt = build_use_case_prompt(request)

    answer = generate_response(prompt)

    return {
        "use_cases": answer
    }