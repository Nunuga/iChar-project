import { PortfolioBase } from "@/components/people";
import Head from "next/head";
import { Box} from "@chakra-ui/react";
import { ReactNode } from "react";

const KovtunPage = () => {
  const professional: PersonDescriptionI = {
    name: "Ковтун Кирилл",
    position: "Технический директор",
    photo: "/people/kovtun.jpg",
    cv: "",
    showDetails: true,
    about:
      "Эксперт в области цифровой трансформации с многолетним опытом работы. Специализируюсь на разработке и внедрении комплексных цифровых решений, направленных на систематизацию, автоматизацию и повышение эффективности процессов управления и межведомственного взаимодействия. Обладаю практическим опытом руководства проектами полного цикла — от анализа и формализации требований до внедрения и сопровождения цифровых инструментов. \n В своей работе стремлюсь не просто внедрять технологии, а формировать культуру устойчивых и эффективных изменений. Верю, что цифровая трансформация — это не только про процессы и системы, но и про людей, вовлечённость и мышление будущего. \nНаша цель — создавать решения, которые делают сервисы более доступными, прозрачными и удобными для каждого.",
    contact: {
      email: "kovtun.k.s.nun@gmail.com",
      telegram: "Kovtun_Kirill",
      phone: "+7 985 512 64 46",
      location: "Москва, Россия",
      linkedin: "",
      github: "",
      twitter: "",
    },
    experience: [
      {
        position: "CTO",
        company: "I8U8",
        period: "2025 - Сейчас",
        description:
          "• Управляю несколькими командами разработки из 15+ инженеров, отвечаю за планирование, найм, развитие сотрудников и выполнение проектов в срок. Работаю над улучшением процессов разработки, повышением стабильности и скорости релизов. Работаю в тесном сотрудничестве с разработчиками, продакт-менеджерами и стейкхолдерами для достижения бизнес-целей.",
      },
      {
        position: "CTO",
        company: "ФАУ Проектная Дирекция Минстроя РФ",
        period: "2023 - 2025",
        description:
          "•" 
      },
      {
        position: "Software Engineer",
        company: "ООО Рога и копыта",
        period: "2021 - 2023",
        description:
          "•" 
      },
      {
        position: "Software Engineer",
        company: "ООО ААА ЭЭЭ",
        period: "2020 - 2021",
        description:
          "•" 
      },
    ],
    education: [
      {
        degree: "Бакалавр",
        institution: "Университет суеты",
        year: "1945",
      },
    ],
    skills: [
      "Python",
      "PostgreSQL",
      "React",
      "Docker",
      "REST APIs",
    ],
    certifications: [],
    projects: [
      {
        name: "Веб сайт шашлычной",
        description:
          "Разработал",
        technologies: ["Flutter", "Django", "PostgreSQL", "Docker"],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>I8U8</title>
        <meta name={"robots"} content={"noindex, nofollow"} />
      </Head>
      <PortfolioBase professional={professional} />
    </>
  );
};



KovtunPage.getLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <main>
        <Box>{children}</Box>
      </main>
    </Box>
  );
};


export default KovtunPage;
