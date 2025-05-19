export const HeroBlock = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      </div>

      <div className="container mx-auto pt-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="bg-indigo-600 bg-opacity-20 backdrop-blur-sm rounded-xl p-2 px-4 text-indigo-300 text-sm font-medium">
              Поставщик ИТ-решений нового поколения
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Преобразование бизнеса
            </span>
            <br />
            Благодаря инновационным технологиям
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Раскройте весь потенциал вашей компании с помощью наших передовых
            программных решений и консультационных услуг
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacts"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Связаться
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-gray-900 rounded-lg font-medium transition-all duration-300"
            >
              Наши сервисы
            </a>
          </div>

          {/* Trusted by logos */}
          {/* <div className="mt-20"> */}
            {/* <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider font-medium"> */}
              {/* Наши клиенты */}
            {/* </p> */}
            {/* <div className="flex flex-wrap justify-center gap-8 opacity-70"> */}
              {/* Placeholder logos */}
              {/* <div className="h-8 w-32 bg-gray-500 rounded text-white p-1"> */}
                {/* КГБ */}
              {/* </div> */}
              {/* <div className="h-8 w-32 bg-gray-500 rounded text-white p-1">
                ФСБ
              </div> */}
              {/* <div className="h-8 w-32 bg-gray-500 rounded text-white p-1">
                ДКП
              </div> */}
              {/* <div className="h-8 w-32 bg-gray-500 rounded text-white p-1">
                ПМС
              </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
