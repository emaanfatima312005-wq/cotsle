from fastapi import APIRouter

from app.schemas.systems_ai import (
    PromptRequest,
    CourseRecommendationRequest,
    ChatRequest,
    RoadmapRequest

)

from app.services.ai_service import generate_response


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

    prompt = f"""
    You are a professional course advisor for COTSLE Institute.

    Available courses:
    - Artificial Intelligence
    - Web Development
    - Data Science
    - Cyber Security
    - Cloud Computing

    Student information:

    Interest:
    {request.interest}

    Current Level:
    {request.current_level}

    Career Goal:
    {request.career_goal}

    Recommend the best course for this student.
    Explain why and provide a learning path.
    """

    recommendation = generate_response(prompt)

    return {
        "recommendation": recommendation
    }
@router.post("/chat")
def chat_assistant(request: ChatRequest):

    prompt = f"""
    You are COTSLE AI Assistant.

    You help students with:
    - Courses
    - Admissions
    - Institute information
    - Learning guidance

    Answer professionally and clearly.

    If the question is unrelated to COTSLE,
    politely say you can only answer COTSLE-related questions.

    Student question:

    {request.question}
    """

    answer = generate_response(prompt)

    return {
        "answer": answer
    }
@router.post("/roadmap")
def learning_roadmap(request: RoadmapRequest):

    prompt = f"""
    You are a career roadmap generator for COTSLE Institute.

    Create a detailed learning roadmap.

    Student goal:
    {request.career_goal}

    Current level:
    {request.current_level}

    Available time:
    {request.duration}

    Include:
    - Learning phases
    - Important skills
    - Recommended projects
    - Career preparation advice

    Make it beginner friendly.
    """

    roadmap = generate_response(prompt)

    return {
        "roadmap": roadmap
    }