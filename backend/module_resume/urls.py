from django.urls import path

from .views import ResumeList, ResumeItemRead, ResumeItemCreate, ResumeItemUpdate

urlpatterns = [
    path("resume-list/", ResumeList.as_view()),
    path("resume-item/create/", ResumeItemCreate.as_view()),
    path("resume-item/view/<int:pk>/", ResumeItemRead.as_view()),
    path("resume-item/update/<int:pk>/", ResumeItemUpdate.as_view()),
]
