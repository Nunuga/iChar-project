from django.db import transaction
from rest_framework import serializers

from .models import (
    Resume,
    ResumePhoto,
    ResumeCv,
    ResumeExperience,
    ResumeEducation,
    ResumeCertifications,
    ResumeProjects,
)


class ResumePhotoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = ResumePhoto
        fields = "__all__"
        extra_kwargs = {
            "resume": {"required": False},
        }


class ResumeCvSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = ResumeCv
        fields = "__all__"
        extra_kwargs = {
            "resume": {"required": False},
        }


class ResumeExperienceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = ResumeExperience
        fields = "__all__"
        extra_kwargs = {
            "resume": {"required": False},
        }


class ResumeEducationSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = ResumeEducation
        fields = "__all__"
        extra_kwargs = {
            "resume": {"required": False},
        }


class ResumeCertificationsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = ResumeCertifications
        fields = "__all__"
        extra_kwargs = {
            "resume": {"required": False},
        }


class ResumeProjectsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = ResumeProjects
        fields = "__all__"
        extra_kwargs = {
            "resume": {"required": False},
        }


class ResumeSerializerListRead(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = "__all__"


class ResumeSerializerItemRead(serializers.ModelSerializer):
    photo = ResumePhotoSerializer()
    cv = ResumeCvSerializer()
    experience = ResumeExperienceSerializer(many=True)
    education = ResumeEducationSerializer(many=True)
    certifications = ResumeCertificationsSerializer(many=True)
    projects = ResumeProjectsSerializer(many=True)

    class Meta:
        model = Resume
        fields = "__all__"


class ResumeSerializerItemWrite(serializers.ModelSerializer):
    experience = ResumeExperienceSerializer(many=True)
    education = ResumeEducationSerializer(many=True)
    certifications = ResumeCertificationsSerializer(many=True)
    projects = ResumeProjectsSerializer(many=True)

    @transaction.atomic
    def create(self, validated_data):
        validated_data.pop("experience")
        validated_data.pop("education")
        validated_data.pop("certifications")
        validated_data.pop("projects")

        resume = Resume(**validated_data)
        resume.save()

        return resume

    @transaction.atomic
    def update(self, instance: Resume, validated_data):
        experience_data = validated_data.pop("experience")
        education_data = validated_data.pop("education")
        certifications_data = validated_data.pop("certifications")
        projects_data = validated_data.pop("projects")

        # --- Experience ---
        incoming_exp_ids = {exp.get("id") for exp in experience_data if exp.get("id")}
        existing_exp_objs = ResumeExperience.objects.filter(resume=instance)
        existing_exp_ids = {exp.pk for exp in existing_exp_objs}
        ids_to_delete_exp = existing_exp_ids - incoming_exp_ids
        ResumeExperience.objects.filter(pk__in=ids_to_delete_exp).delete()
        for experience in experience_data:
            id = experience.get("id")
            if id:
                experience_obj = ResumeExperience.objects.get(pk=id, resume=instance)
                for field_name, value in experience.items():
                    setattr(experience_obj, field_name, value)
                experience_obj.save()
            else:
                ResumeExperience.objects.create(resume=instance, **experience)

        # --- Education ---
        incoming_edu_ids = {edu.get("id") for edu in education_data if edu.get("id")}
        existing_edu_objs = ResumeEducation.objects.filter(resume=instance)
        existing_edu_ids = {edu.pk for edu in existing_edu_objs}
        ids_to_delete_edu = existing_edu_ids - incoming_edu_ids
        ResumeEducation.objects.filter(pk__in=ids_to_delete_edu).delete()
        for education in education_data:
            id = education.get("id")
            if id:
                education_obj = ResumeEducation.objects.get(pk=id, resume=instance)
                for field_name, value in education.items():
                    setattr(education_obj, field_name, value)
                education_obj.save()
            else:
                ResumeEducation.objects.create(resume=instance, **education)

        # --- Certifications ---
        incoming_cert_ids = {
            cert.get("id") for cert in certifications_data if cert.get("id")
        }
        existing_cert_objs = ResumeCertifications.objects.filter(resume=instance)
        existing_cert_ids = {cert.pk for cert in existing_cert_objs}
        ids_to_delete_cert = existing_cert_ids - incoming_cert_ids
        ResumeCertifications.objects.filter(pk__in=ids_to_delete_cert).delete()
        for certification in certifications_data:
            id = certification.get("id")
            if id:
                certification_obj = ResumeCertifications.objects.get(
                    pk=id, resume=instance
                )
                for field_name, value in certification.items():
                    setattr(certification_obj, field_name, value)
                certification_obj.save()
            else:
                ResumeCertifications.objects.create(resume=instance, **certification)

        # --- Projects ---
        incoming_proj_ids = {proj.get("id") for proj in projects_data if proj.get("id")}
        existing_proj_objs = ResumeProjects.objects.filter(resume=instance)
        existing_proj_ids = {proj.pk for proj in existing_proj_objs}
        ids_to_delete_proj = existing_proj_ids - incoming_proj_ids
        ResumeProjects.objects.filter(pk__in=ids_to_delete_proj).delete()
        for project in projects_data:
            id = project.get("id")
            if id:
                project_obj = ResumeProjects.objects.get(pk=id, resume=instance)
                for field_name, value in project.items():
                    setattr(project_obj, field_name, value)
                project_obj.save()
            else:
                ResumeProjects.objects.create(resume=instance, **project)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        return instance

    class Meta:
        model = Resume
        fields = "__all__"
