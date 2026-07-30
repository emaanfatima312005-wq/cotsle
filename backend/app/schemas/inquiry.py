from pydantic import BaseModel, EmailStr


class InquiryCreate(BaseModel):
    division: str
    full_name: str
    email: EmailStr
    phone_number: str
    subject: str
    message: str