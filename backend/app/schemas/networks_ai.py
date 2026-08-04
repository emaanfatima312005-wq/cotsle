from pydantic import BaseModel


class SoftwareAdvisorRequest(BaseModel):
    industry: str
    company_size: str
    business_problem: str

class ProjectEstimatorRequest(BaseModel):
    project_type: str
    features: str
    expected_users: str
    timeline: str

class TechStackAdvisorRequest(BaseModel):
    project_type: str
    budget: str
    scalability: str
    platform: str

class PromptRequest(BaseModel):
    prompt: str