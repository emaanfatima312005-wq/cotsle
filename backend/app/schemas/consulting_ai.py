from pydantic import BaseModel


class StrategyRequest(BaseModel):
    industry: str
    company_size: str
    current_challenge: str
    business_goal: str


class ReadinessRequest(BaseModel):
    company_size: str
    current_technology: str
    ai_experience: str
    available_data: str


class UseCaseRequest(BaseModel):
    industry: str
    business_problem: str

class ReadinessRequest(BaseModel):
    company_size: str
    current_technology: str
    ai_experience: str
    available_data: str


class PromptRequest(BaseModel):
    prompt: str