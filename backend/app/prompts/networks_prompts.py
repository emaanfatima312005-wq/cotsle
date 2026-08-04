from app.schemas.networks_ai import SoftwareAdvisorRequest


def build_software_advisor_prompt(request: SoftwareAdvisorRequest):

    return f"""
    You are an expert software solutions consultant.

    A company has provided the following details:

    Industry: {request.industry}
    Company Size: {request.company_size}
    Business Problem: {request.business_problem}

    Recommend:

    1. The best software solution.
    2. Why this solution fits.
    3. Suggested technologies.
    4. Key business benefits.
    5. Estimated implementation complexity (Low, Medium, High).

    Keep the response professional and easy to understand.
    """

from app.schemas.networks_ai import ProjectEstimatorRequest


def build_project_estimator_prompt(request: ProjectEstimatorRequest):

    return f"""
You are an experienced software project consultant.

Analyze the following software project:

Project Type:
{request.project_type}

Features:
{request.features}

Expected Users:
{request.expected_users}

Preferred Timeline:
{request.timeline}

Generate a professional project estimate including:

1. Project complexity (Low, Medium, High)
2. Recommended development team
3. Estimated timeline
4. Suggested technology stack
5. Possible risks
6. General recommendations

Do not estimate exact cost.

Keep the response professional, practical, and easy to understand.
"""

from app.schemas.networks_ai import TechStackAdvisorRequest


def build_tech_stack_prompt(request: TechStackAdvisorRequest):

    return f"""
You are a senior software architect.

Recommend the best technology stack for this project.

Project Type:
{request.project_type}

Budget:
{request.budget}

Scalability Requirement:
{request.scalability}

Platform:
{request.platform}

Provide:

1. Frontend framework
2. Backend framework
3. Database
4. Authentication method
5. Cloud/Hosting recommendation
6. Deployment strategy
7. Explain why each technology is recommended.

Keep the response practical and professional.
"""