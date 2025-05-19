import {
  LuCode,
  LuCpu,
  LuGitBranch,
  LuLayoutPanelLeft,
  LuSmartphone,
  LuTestTube,
} from "react-icons/lu";

export const ServicesBlock = () => {
  const services = [
    {
      title: "Разработка и сопровождение программного обеспечения",
      description:
        "Индивидуальные корпоративные решения, разработанные с учетом потребностей вашего бизнеса",
      icon: <LuCode className="text-indigo-500" />,
    },
    {
      title: "Разработка мобильных приложений",
      description:
        "Нативные и кроссплатформенные мобильные решения для iOS и Android",
      icon: <LuSmartphone className="text-indigo-500" />,
    },
    {
      title: "Независимое тестирование",
      description:
        "Комплексные услуги по тестированию для обеспечения безупречной работы",
      icon: <LuTestTube className="text-indigo-500" />,
    },
    {
      title: "Разработка дизайа пользовательского интерфейса",
      description:
        "Интуитивно понятный и привлекательный дизайн UI/UX, ориентированный на пользовательский опыт",
      icon: <LuLayoutPanelLeft className="text-indigo-500" />,
    },
    {
      title: "Интеграционные решения",
      description: "Бесшовная интеграция систем и сторонних платформ",
      icon: <LuGitBranch className="text-indigo-500" />,
    },
    {
      title: "Автоматизация процессов",
      description:
        "Оптимизация бизнес-операций с помощью интеллектуальной автоматизации",
      icon: <LuCpu className="text-indigo-500" />,
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-gradient-to-br from-gray-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            {/* <div className="bg-indigo-600 bg-opacity-20 backdrop-blur-sm rounded-xl p-2 px-4 text-indigo-300 text-sm font-medium">
              Услуги
            </div> */}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Комплексные ИТ-решения
          </h2>
          <div className="h-1 w-64 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-300">
            Инновационные решения для ваших бизнес-задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-indigo-500"
            >
              <div className="inline-block p-4 bg-gray-700 rounded-lg mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contacts"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            Запросить консультацию
          </a>
        </div>
      </div>
    </section>
  );
};
