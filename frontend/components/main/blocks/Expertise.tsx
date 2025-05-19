import { LuChevronRight } from "react-icons/lu";

export const ExpertiseBlock = () => {
  const caseStudies = [
    {
      title: "Система заявок и отчетов",
      category: "Гостех",
      description:
        "Автоматизация процесса сбора и фильтрации данных по государственным проектам, а также генерация отчетных документов по предоставленным данным",
      image: "",
    },
    {
      title: "Система контроля исполнения поручений",
      category: "Гостех",
      description:
        "Автоматизация отслеживания выполнения поручений руководства с напоминаниями и отчетностью по этапам",
      image: "",
    },
    {
      title: "Платформа межведомственного взаимодействия",
      category: "Гостех",
      description:
        "Интеграция данных и сервисов различных государственных органов для ускорения обработки запросов и повышения прозрачности",
      image: "",
    },
    {
      title: "Мобильное аналитическое приложение",
      category: "Гостех",
      description:
        "Отображение метрик из собранных данных разных платформ в одном приложении",
      image: "",
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            {/* <div className="bg-indigo-600 bg-opacity-20 backdrop-blur-sm rounded-xl p-2 px-4 text-indigo-300 text-sm font-medium">
              Наш опыт
            </div> */}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Последние истории успеха
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ознакомьтесь с портфолио наших успешно реализованных проектов в
            различных отраслях промышленности и технологических сферах.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              {study.image ? (
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-indigo-600 bg-opacity-70 rounded-full text-xs font-medium mb-3">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <a
                  href="#contacts"
                  className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Подробнее
                  <LuChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacts"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-all duration-300"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};
