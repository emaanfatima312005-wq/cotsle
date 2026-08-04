from pydantic import BaseModel


class PromptRequest(BaseModel):
    prompt: str


class CourseRecommendationRequest(BaseModel):
    interest: str
    current_level: str
    career_goal: str


class ChatRequest(BaseModel):
    question: str


class RoadmapRequest(BaseModel):
    career_goal: str
    current_level: str
    duration: str