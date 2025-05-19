interface PersonDescriptionI {
  name: string;
  position: string;
  photo: string;
  cv: string;
  about: string;
  showDetails: boolean;
  contact: {
    email: string;
    phone: string;
    telegram: string; // Просто указываешь свой тег, типо nrk, заметь!!! не @nrk, а просто nrk
    location: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  experience: PersonExperienceI[];
  education: PersonEducationI[];
  skills: string[];
  certifications: PersonCertificationsI[];
  projects: PersonProjectsI[];
}

interface PersonExperienceI {
  position: string;
  company: string;
  period: string;
  description: string;
}

interface PersonEducationI {
  degree: string; // Степень, специальность
  institution: string; // Название универа\шараги
  year: string; // год
}

interface PersonCertificationsI {
  name: string;
  issuer: string; // Кто выдал
  year: string;
}

interface PersonProjectsI {
  name: string;
  description: string;
  technologies: string[];
}
