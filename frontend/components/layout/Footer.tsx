import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export const Footer = () => {
  // return (
  //   <footer className="bg-gray-900 py-12 text-gray-200">
  //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
  //         <div>
  //           <h3 className="text-xl font-bold mb-4">I8U8</h3>
  //           <p className="text-gray-400 mb-6">
  //             Предоставляем инновационные ИТ-решения для предприятий по всему
  //             миру
  //           </p>
  //           {/* <div className="flex gap-4">
  //             <a
  //               href="#"
  //               className="text-gray-400 hover:text-white transition-colors"
  //             >
  //               <LuLinkedin className="h-5 w-5" />
  //             </a>
  //             <a
  //               href="#"
  //               className="text-gray-400 hover:text-white transition-colors"
  //             >
  //               <LuTwitter className="h-5 w-5" />
  //             </a>
  //             <a
  //               href="#"
  //               className="text-gray-400 hover:text-white transition-colors"
  //             >
  //               <LuFacebook className="h-5 w-5" />
  //             </a>
  //           </div> */}
  //         </div>

  //         <div>
  //           <h3 className="text-lg font-semibold mb-4">Услуги</h3>
  //           <ul className="space-y-3">
  //             <li>
  //               <a
  //                 href="#services"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Разработка ПО
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#services"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Мобильная разработка
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#services"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Независимое тестирование
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#services"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Разработка дизайна
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#services"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Интеграционные решения
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#services"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Автоматизация процессов
  //               </a>
  //             </li>
  //           </ul>
  //         </div>

  //         <div>
  //           <h3 className="text-lg font-semibold mb-4">Компания</h3>
  //           <ul className="space-y-3">
  //             <li>
  //               <a
  //                 href="#aboutus"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 О нас
  //               </a>
  //             </li>
  //             {/* <li>
  //               <a
  //                 href="#"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Наш подход
  //               </a>
  //             </li> */}
  //             <li>
  //               <a
  //                 href="#expertise"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Примеры
  //               </a>
  //             </li>
  //             {/* <li>
  //               <a
  //                 href="#"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Карьера
  //               </a>
  //             </li> */}
  //             <li>
  //               <a
  //                 href="#contacts"
  //                 className="text-gray-400 hover:text-white transition-colors"
  //               >
  //                 Контакты
  //               </a>
  //             </li>
  //           </ul>
  //         </div>

  //         <div>
  //           <h3 className="text-lg font-semibold mb-4">Контакты</h3>
  //           <ul className="space-y-3">
  //             <li className="flex items-start">
  //               <LuMapPin className="h-5 w-5 text-indigo-400 mr-2 mt-1" />
  //               <span className="text-gray-400">
  //                 ул. Мишина, д. 23, оф. 4П,
  //                 <br />
  //                 г. Москва
  //               </span>
  //             </li>
  //             <li className="flex items-center">
  //               <LuPhone className="h-5 w-5 text-indigo-400 mr-2" />
  //               <span className="text-gray-400">+7 (989) 116 19-77</span>
  //             </li>
  //             <li className="flex items-center">
  //               <LuMail className="h-5 w-5 text-indigo-400 mr-2" />
  //               <span className="text-gray-400">I8U8_studio@mail.ru</span>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>

  //       <div className="border-t border-gray-800 pt-8">
  //         <div className="flex flex-col md:flex-row justify-between items-center">
  //           <p className="text-gray-400 text-sm">
  //             © 2025 I8U8. Все права защищены.
  //           </p>
  //           {/* <div className="flex gap-6 mt-4 md:mt-0">
  //             <a href="#" className="text-gray-400 hover:text-white text-sm">
  //               Политика конфиденциальности
  //             </a>
  //             <a href="#" className="text-gray-400 hover:text-white text-sm">
  //               Условия предоставления услуг
  //             </a>
  //             <a href="#" className="text-gray-400 hover:text-white text-sm">
  //               Политика использования файлов cookie
  //             </a>
  //           </div> */}
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
};
