interface ResumeI {
  id?: number;
  first_name: string;
  last_name: string;
  position: string;
  about: string;
  cv?: any;
  photo?: any;
  contact: {
    email: string;
    phone: string;
    telegram: string; // Просто указываешь свой тег, типо nrk, заметь!!! не @nrk, а просто nrk
    location: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  experience: ResumeExperienceI[];
  education: ResumeEducationI[];
  skills: string[];
  certifications: ResumeCertificationsI[];
  projects: ResumeProjectsI[];
  created_by?: any;
}

interface ResumeExperienceI {
  id?: number;
  position: string;
  company: string;
  period: string;
  description: string;
}

interface ResumeEducationI {
  id?: number;
  degree: string; // Степень, специальность
  institution: string; // Название универа/шараги
  year: string; // Год
}

interface ResumeCertificationsI {
  id?: number;
  name: string;
  issuer: string; // Кто выдал
  year: string;
}

interface ResumeProjectsI {
  id?: number;
  name: string;
  description: string;
  technologies: string[];
}
