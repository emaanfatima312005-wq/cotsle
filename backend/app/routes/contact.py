from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.inquiry import InquiryCreate
from app.models.inquiry import Inquiry


router = APIRouter()


@router.post("/contact")
def create_contact(
    inquiry: InquiryCreate,
    db: Session = Depends(get_db)
):

    new_inquiry = Inquiry(
        division=inquiry.division,
        full_name=inquiry.full_name,
        email=inquiry.email,
        phone_number=inquiry.phone_number,
        subject=inquiry.subject,
        message=inquiry.message
    )

    db.add(new_inquiry)
    db.commit()
    db.refresh(new_inquiry)

    return {
        "message": "Inquiry submitted successfully",
        "id": new_inquiry.id
    }