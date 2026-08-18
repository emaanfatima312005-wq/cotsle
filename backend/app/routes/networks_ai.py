from fastapi import APIRouter

from app.schemas.networks_ai import (
    SoftwareAdvisorRequest,
    ProjectEstimatorRequest,
    TechStackAdvisorRequest,
    ChatRequest,
)

from app.services.ai_service import generate_response

from app.prompts.networks_prompts import (
    build_software_advisor_prompt,
    build_project_estimator_prompt,
    build_tech_stack_prompt,
    build_network_chat_prompt,
)


router = APIRouter(
    prefix="/networks/ai",
    tags=["Networks AI"]
)


@router.post("/software-advisor")
def software_advisor(request: SoftwareAdvisorRequest):

    prompt = build_software_advisor_prompt(request)

    answer = generate_response(prompt)

    return {
        "recommendation": answer
    }


@router.post("/project-estimator")
def project_estimator(request: ProjectEstimatorRequest):

    prompt = build_project_estimator_prompt(request)

    answer = generate_response(prompt)

    return {
        "estimate": answer
    }


@router.post("/tech-stack-advisor")
def tech_stack_advisor(request: TechStackAdvisorRequest):

    prompt = build_tech_stack_prompt(request)

    answer = generate_response(prompt)

    return {
        "technology_stack": answer
    }


@router.post("/chat")
def network_chat(request: ChatRequest):

    prompt = build_network_chat_prompt(request)

    answer = generate_response(prompt)

    return {
        "response": answer
    }