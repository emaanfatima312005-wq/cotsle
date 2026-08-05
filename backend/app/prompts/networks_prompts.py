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
You are a senior software architecture consultant.

The client has described their business below.

Analyze the information and recommend the best technologies.

Client Description:

{request.prompt}

Include:

1. Business Summary
2. Recommended Technology Stack
3. Why these technologies fit
4. Suggested Architecture
5. Scalability Recommendations
6. Final Advice

Write professionally using headings and bullet points.
"""