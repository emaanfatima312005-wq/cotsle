from app.schemas.ai import CourseRecommendationRequest
from app.services.ai_service import generate_response


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
    Explain your reasoning and provide a learning path.
    """

    recommendation = generate_response(prompt)

    return {
        "recommendation": recommendation
    }