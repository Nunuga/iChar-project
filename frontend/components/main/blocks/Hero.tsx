import Image from "next/image";
export const HeroBlock = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      </div>

      <div className="container mx-auto pt-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* <div className="mb-6 inline-block"> */}
            {/* <div className="bg-indigo-600 bg-opacity-20 backdrop-blur-sm rounded-xl p-2 px-4 text-indigo-300 text-sm font-medium">
              Поставщик ИТ-решений нового поколения
            </div> */}
          {/* </div> */}
                      <div className="h-100 w-100 rounded-lg flex items-center justify-center mr-3">
             
                <Image
                  src={"/v.png"}
                  alt={"I8U8 logo"}
                  width={510}
                  height={40}
                />
          
            </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {/* База кандидатов */}
            </span>
            <br />
            {/* Благодаря инновационным технологиям */}
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Раскройте весь потенциал вашей компании с помощью наших передовых
            программных решений и консультационных услуг
          </p> */}
          <div className="flex flex-row sm:flex-col gap-4 justify-center">
            <a
              href="#contacts"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Список резюме
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-gray-900 rounded-lg font-medium transition-all duration-300"
            >
              Добавить резюме
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
};
