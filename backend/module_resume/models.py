from django.db import models


class Resume(models.Model):
    STATUSES = [
        ("draft", "draft"),
        ("published", "published"),
        ("hidden", "hidden"),
        ("archive", "archive"),
    ]

    status = models.TextField(max_length=100, choices=STATUSES, default="draft")
    first_name = models.TextField(null=True, blank=True)
    last_name = models.TextField(null=True, blank=True)
    position = models.TextField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    contact = models.JSONField(default=dict)
    skills = models.JSONField(default=list)
    created_by = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ResumePhoto(models.Model):
    resume = models.OneToOneField(
        Resume, on_delete=models.CASCADE, related_name="photo"
    )

    file_path = models.TextField()
    upload_at = models.DateTimeField(auto_now_add=True)


class ResumeCv(models.Model):
    resume = models.OneToOneField(Resume, on_delete=models.CASCADE, related_name="cv")

    file_path = models.TextField()
    upload_at = models.DateTimeField(auto_now_add=True)


class ResumeExperience(models.Model):
    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, related_name="experience"
    )

    position = models.TextField(null=True, blank=True)
    company = models.TextField(null=True, blank=True)
    period = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)


class ResumeEducation(models.Model):
    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, related_name="education"
    )

    degree = models.TextField(null=True, blank=True)
    institution = models.TextField(null=True, blank=True)
    year = models.TextField(null=True, blank=True)


class ResumeCertifications(models.Model):
    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, related_name="certifications"
    )

    name = models.TextField(null=True, blank=True)
    issuer = models.TextField(null=True, blank=True)
    year = models.TextField(null=True, blank=True)


class ResumeProjects(models.Model):
    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, related_name="projects"
    )

    name = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    technologies = models.JSONField(default=list)
