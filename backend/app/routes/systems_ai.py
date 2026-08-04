from fastapi import APIRouter

from app.schemas.systems_ai import (
    PromptRequest,
    CourseRecommendationRequest,
    RoadmapRequest,
    ChatRequest,
)

from app.services.ai_service import generate_response

from app.prompts.systems_prompts import (
    build_course_recommendation_prompt,
    build_learning_roadmap_prompt,
    build_chat_assistant_prompt,
)


router = APIRouter(
    prefix="/systems/ai",
    tags=["Systems AI"]
)


@router.post("/test")
def test_ai(request: PromptRequest):

    answer = generate_response(request.prompt)

    return {
        "response": answer
    }


@router.post("/course-recommendation")
def course_recommendation(request: CourseRecommendationRequest):

    prompt = build_course_recommendation_prompt(request)

    answer = generate_response(prompt)

    return {
        "recommendation": answer
    }

@router.post("/chat")
def chat_assistant(request: ChatRequest):
    prompt = build_chat_assistant_prompt(request)

    answer = generate_response(prompt)

    return {
        "response": answer
    }

@router.post("/learning-roadmap")
def learning_roadmap(request: RoadmapRequest):
    prompt = build_learning_roadmap_prompt(request)

    answer = generate_response(prompt)

    return {
        "roadmap": answer
    }