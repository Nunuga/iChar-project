import { useState } from "react";
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";

export const ContactBlock = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = encodeURIComponent("IT solutions");
  const body = encodeURIComponent(
    `Имя: ${firstName}\nФамилия: ${lastName}\nEmail: ${email}\nСообщение:\n${message}`
  );

  const mailtoLink = `mailto:I8U8_studio@mail.ru?subject=${subject}&body=${body}`;

  return (
    <section id="contacts" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-6 inline-block">
              {/* <div className="bg-indigo-600 bg-opacity-20 backdrop-blur-sm rounded-xl p-2 px-4 text-indigo-300 text-sm font-medium">
                Контакты
              </div> */}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Свяжитесь с нашей командой
            </h2>
            <p className="text-gray-300 mb-8">
              Готовы преобразовать свой бизнес с помощью инновационных
              технологических решений? Наша команда экспертов готова помочь.
              Свяжитесь с нами, чтобы обсудить требования вашего проекта.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 bg-indigo-600 bg-opacity-20 p-3 rounded-lg">
                  <LuMail className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email</h3>
                  <p className="text-gray-400">I8U8_studio@mail.ru</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-indigo-600 bg-opacity-20 p-3 rounded-lg">
                  <LuPhone className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Телефон</h3>
                  <p className="text-gray-400">+7 (989) 116-19-77</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-indigo-600 bg-opacity-20 p-3 rounded-lg">
                  <LuMapPin className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Адрес</h3>
                  <p className="text-gray-400">
                    ул. Мишина, д. 23, оф. 4П, г. Москва
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
              >
                <LuTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
              >
                <LuFacebook className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          <div>
            <div className="bg-gray-700 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 rounded-lg border border-gray-600 p-3 focus:outline-none focus:border-indigo-500"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Фамилия
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 rounded-lg border border-gray-600 p-3 focus:outline-none focus:border-indigo-500"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 rounded-lg border border-gray-600 p-3 focus:outline-none focus:border-indigo-500"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-800 rounded-lg border border-gray-600 p-3 focus:outline-none focus:border-indigo-500"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <a
                  href={mailtoLink}
                  className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg font-medium transition-colors"
                >
                  Отправить
                  <LuSend className="ml-2 h-5 w-5" />
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
