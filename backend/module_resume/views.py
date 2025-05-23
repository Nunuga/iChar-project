from django.db import transaction
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from module_resume.models import Resume
from module_resume.serializers import (
    ResumeSerializerListRead,
    ResumeSerializerItemRead,
    ResumeSerializerItemWrite,
)


class ResumeList(APIView):
    def get(self, request):
        resumes = Resume.objects.all().order_by("-id")
        data = ResumeSerializerListRead(resumes, many=True).data

        return Response(data, status=status.HTTP_200_OK)


class ResumeItemRead(APIView):
    def get_object(self, pk: int):
        try:
            return Resume.objects.get(pk=pk)
        except Resume.DoesNotExist:
            raise Http404

    def get(self, request, pk: int):
        resume = self.get_object(pk=pk)
        data = ResumeSerializerItemRead(resume).data

        return Response(data, status=status.HTTP_200_OK)


class ResumeItemCreate(APIView):
    def post(self, request):
        serializer = ResumeSerializerItemWrite(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResumeItemUpdate(APIView):
    def get_object(self, pk: int):
        try:
            return Resume.objects.get(pk=pk)
        except Resume.DoesNotExist:
            raise Http404

    @transaction.atomic
    def put(self, request, pk: int):
        resume = self.get_object(pk=pk)
        serializer = ResumeSerializerItemWrite(resume, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk: int):
        resume = self.get_object(pk=pk)
        resume.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
