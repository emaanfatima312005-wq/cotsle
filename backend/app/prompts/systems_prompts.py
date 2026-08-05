from app.schemas.systems_ai import (
    CourseRecommendationRequest,
    RoadmapRequest,
    ChatRequest
)


def build_course_recommendation_prompt(request: CourseRecommendationRequest):

    return f"""
You are an expert education and career advisor.

A student has provided the following information:

Interest Area:
{request.interest}

Current Skill Level:
{request.current_level}

Career Goal:
{request.career_goal}

Recommend suitable courses.

Include:

1. Recommended courses
2. Why each course fits the student
3. Skills they will gain
4. Suggested learning order
5. Career opportunities after completion

Keep the advice practical and personalized.
"""


def build_learning_roadmap_prompt(request: RoadmapRequest):

    return f"""
You are an expert learning and career roadmap advisor.

Create a personalized learning roadmap for a student.

Career Goal:
{request.career_goal}

Current Skill Level:
{request.current_level}

Available Learning Duration:
{request.duration}

Generate a roadmap including:

1. Beginner stage
2. Intermediate stage
3. Advanced stage
4. Technologies and skills to learn
5. Recommended projects for practice
6. Career preparation steps

Make the roadmap practical, structured, and achievable.
"""


def build_chat_assistant_prompt(request: ChatRequest):

    return f"""
You are an AI assistant for COTSLE Systems.

Answer student questions about:

- Courses
- Admissions
- Training programs
- Learning paths
- Technologies
- Institute information

User Question:

{request.question}

Rules:

1. Give clear and helpful answers.
2. Do not invent information.
3. If information is unavailable, politely say you do not have that information.
4. Keep answers professional and easy to understand.
"""