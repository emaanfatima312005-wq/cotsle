from app.schemas.consulting_ai import StrategyRequest


def build_strategy_prompt(request: StrategyRequest):

    return f"""
You are a senior AI strategy consultant.

Company Information

Industry:
{request.industry}

Company Size:
{request.company_size}

Current Challenge:
{request.current_challenge}

Business Goal:
{request.business_goal}

Prepare a professional AI consulting report including:

1. Business Summary
2. Recommended AI Solutions
3. Implementation Roadmap
4. Expected Business Benefits
5. Estimated Implementation Difficulty
6. Final Recommendations

Write the report professionally using headings and bullet points.
"""

from app.schemas.consulting_ai import ReadinessRequest


def build_readiness_prompt(request: ReadinessRequest):

    return f"""
You are an AI transformation consultant.

Assess how ready this company is to adopt Artificial Intelligence.

Company Size:
{request.company_size}

Current Technology:
{request.current_technology}

AI Experience:
{request.ai_experience}

Available Data:
{request.available_data}

Generate a professional report including:

1. Overall AI Readiness Score (Low, Medium, High)
2. Current Strengths
3. Current Weaknesses
4. Biggest Challenges
5. Recommendations before adopting AI
6. Suggested first AI projects

Write professionally using headings and bullet points.
"""

from app.schemas.consulting_ai import UseCaseRequest


def build_use_case_prompt(request: UseCaseRequest):

    return f"""
You are an AI business consultant.

The client has provided:

Industry:
{request.industry}

Business Problem:
{request.business_problem}

Suggest AI use cases that can solve this problem.

For each use case provide:

1. AI Solution Name
2. How it works
3. Expected business impact
4. Estimated implementation difficulty
5. Priority (High, Medium, Low)

Suggest at least 5 AI use cases.

Keep the response professional and practical.
"""