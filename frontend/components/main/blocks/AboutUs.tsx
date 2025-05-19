import {
  LuAward,
  LuBriefcase,
  LuChevronRight,
  LuCircleCheck,
  LuUsers,
} from "react-icons/lu";

export const AboutUsBlock = () => {
  return (
    <section id="aboutus" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-30 blur-xl"></div>
              <img
                src="/api/placeholder/600/500"
                alt="Team collaboration"
                className="relative rounded-xl w-full shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-indigo-600 rounded-lg p-6 shadow-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Лет опыта</div>
              </div>
            </div>
          </div> */}
          {/* <div className="lg:w-1/2"> */}
          <div>
            <div className="mb-6 inline-block">
              {/* <div className="bg-indigo-600 bg-opacity-20 backdrop-blur-sm rounded-xl p-2 px-4 text-indigo-300 text-sm font-medium">
                О нас
              </div> */}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Почему стоит выбрать нас?
            </h2>
            <p className="text-gray-300 mb-8">
              Имея более чем десятилетний опыт предоставления инновационных
              технологических решений, мы зарекомендовали себя как надежный
              партнер для компаний, стремящихся к цифровой трансформации. Наша
              команда экспертов привносит глубокие отраслевые знания и
              техническое совершенство в каждый проект.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 bg-indigo-600 bg-opacity-20 p-3 rounded-lg">
                  <LuAward className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Команда победителей
                  </h3>
                  <p className="text-gray-400">
                    Признанные эксперты отрасли с подтвержденным опытом успешной
                    работы
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-indigo-600 bg-opacity-20 p-3 rounded-lg">
                  <LuUsers className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Индивидуальные команды
                  </h3>
                  <p className="text-gray-400">
                    Состав команды подбирается с учетом специфики вашего проекта
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-indigo-600 bg-opacity-20 p-3 rounded-lg">
                  <LuCircleCheck className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Гарантия качества
                  </h3>
                  <p className="text-gray-400">
                    Строгие процессы тестирования и обеспечения качества
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-indigo-600 bg-opacity-20 p-3 rounded-lg">
                  <LuBriefcase className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Отраслевая экспертиза
                  </h3>
                  <p className="text-gray-400">
                    Специализированные знания в различных отраслях бизнеса
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contacts"
              className="flex w-fit items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-lg transition-all duration-300"
            >
              Узнать больше о нас
              <LuChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gray-700 bg-opacity-50 rounded-xl shadow-lg">
            <div className="text-4xl font-bold mb-2 text-indigo-400">100+</div>
            <div className="text-gray-300">Выполненные проекты</div>
          </div>
          <div className="text-center p-6 bg-gray-700 bg-opacity-50 rounded-xl shadow-lg">
            <div className="text-4xl font-bold mb-2 text-indigo-400">99%</div>
            <div className="text-gray-300">Удовлетворенность клиентов</div>
          </div>
          <div className="text-center p-6 bg-gray-700 bg-opacity-50 rounded-xl shadow-lg">
            <div className="text-4xl font-bold mb-2 text-indigo-400">40+</div>
            <div className="text-gray-300">Специалистов</div>
          </div>
          <div className="text-center p-6 bg-gray-700 bg-opacity-50 rounded-xl shadow-lg">
            <div className="text-4xl font-bold mb-2 text-indigo-400">5+</div>
            <div className="text-gray-300">Обслуживаемых стран</div>
          </div>
        </div>
      </div>
    </section>
  );
};
