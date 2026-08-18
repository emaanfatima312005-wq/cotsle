from pydantic import BaseModel


class StrategyRequest(BaseModel):
    prompt:str


class ReadinessRequest(BaseModel):
    prompt:str


class UseCaseRequest(BaseModel):
    prompt:str


class TransformationRoadmapRequest(BaseModel):
    prompt:str


class PromptRequest(BaseModel):
    prompt:str