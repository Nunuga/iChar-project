import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const navItems = [
    // {
    //   name: "Услуги",
    //   hasDropdown: true,
    //   href: "services",
    //   dropdownItems: [
    //     "Разработка ПО",
    //     "Мобильная разработка",
    //     "Независимое тестирование",
    //     "Разработка дизайна",
    //     "Интеграционные решения",
    //     "Автоматизация процессов",
    //   ],
    // },
    // {
    //   name: "Примеры",
    //   hasDropdown: true,
    //   href: "expertise",
    //   dropdownItems: [
    //     "Система заявок и отчетов",
    //     "Система контроля исполнения поручений",
    //     "Платформа межведомственного взаимодействия",
    //     "Мобильное аналитическое приложение",
    //   ],
    // },
    // {
    //   name: "О нас",
    //   href: "aboutus",
    //   hasDropdown: false,
    // },
    // {
    //   name: "Карьера",
    //   hasDropdown: false,
    // },
    // {
    //   name: "Контакты",
    //   href: "contacts",
    //   hasDropdown: false,
    // },
  ];

  // return (
  //   <header
  //     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  //       isScrolled
  //         ? "bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-lg py-3"
  //         : "bg-transparent py-5"
  //     }`}
  //   >
  //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex items-center justify-between">
  //         {/* Logo */}
  //         <div className="flex items-center">
  //           <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
  //             <Link href={"/main"}>
  //               <Image
  //                 src={"/logoB.png"}
  //                 alt={"I8U8 logo"}
  //                 width={25}
  //                 height={40}
  //               />
  //             </Link>
  //           </div>
  //           <span className="text-xl font-bold text-white"></span>
  //         </div>

  //         {/* Desktop Navigation */}
  //         <nav
  //           className="hidden lg:flex items-center space-x-8"
  //           ref={dropdownRef}
  //         >
  //           {navItems.map((item, index) => (
  //             <div key={index} className="relative">
  //               {item.hasDropdown ? (
  //                 <button
  //                   className="text-gray-300 hover:text-white flex items-center font-medium"
  //                   onClick={() => toggleDropdown(index)}
  //                 >
  //                   {item.name}
  //                   <LuChevronDown
  //                     className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
  //                   />
  //                 </button>
  //               ) : (
  //                 <a
  //                   href={`#${item.href}`}
  //                   className="text-gray-300 hover:text-white flex items-center font-medium"
  //                 >
  //                   {item.name}
  //                 </a>
  //               )}

  //               {/* Dropdown Menu */}
  //               {item.hasDropdown && activeDropdown === index && (
  //                 <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 py-2 z-10">
  //                   {item.dropdownItems?.map((dropdownItem, idx) => (
  //                     <a
  //                       key={idx}
  //                       href={`#${item.href}`}
  //                       className="block px-4 py-2 text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
  //                     >
  //                       {dropdownItem}
  //                     </a>
  //                   ))}
  //                 </div>
  //               )}
  //             </div>
  //           ))}
  //         </nav>

  //         {/* Right side buttons */}
  //         <div className="hidden lg:flex items-center space-x-4">
  //           <a
  //             href="#contacts"
  //             className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition-colors"
  //           >
  //             Связаться
  //           </a>
  //         </div>

  //         {/* Mobile Menu Button */}
  //         <button
  //           className="lg:hidden text-gray-300 hover:text-white"
  //           onClick={() => setIsMenuOpen(!isMenuOpen)}
  //         >
  //           {isMenuOpen ? (
  //             <LuX className="h-6 w-6" />
  //           ) : (
  //             <LuMenu className="h-6 w-6" />
  //           )}
  //         </button>
  //       </div>
  //     </div>

  //     {/* Mobile Navigation */}
  //     {isMenuOpen && (
  //       <div className="lg:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm mt-3 pb-4 px-4">
  //         <nav className="flex flex-col space-y-3 pt-3" ref={dropdownRef}>
  //           {navItems.map((item, index) => (
  //             <div key={index}>
  //               {item.hasDropdown ? (
  //                 <button
  //                   className="text-gray-300 hover:text-white flex items-center justify-between w-full py-2 font-medium"
  //                   onClick={() => item.hasDropdown && toggleDropdown(index)}
  //                 >
  //                   {item.name}
  //                   {item.hasDropdown && (
  //                     <LuChevronDown
  //                       className={`h-4 w-4 transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
  //                     />
  //                   )}
  //                 </button>
  //               ) : (
  //                 <a
  //                   href={`#${item.href}`}
  //                   className="text-gray-300 hover:text-white flex items-center justify-between w-full py-2 font-medium"
  //                 >
  //                   {item.name}
  //                 </a>
  //               )}

  //               {/* Mobile Dropdown Menu */}
  //               {item.hasDropdown && activeDropdown === index && (
  //                 <div className="ml-4 mt-1 border-l border-gray-700 pl-4 space-y-2 py-2">
  //                   {item.dropdownItems?.map((dropdownItem, idx) => (
  //                     <a
  //                       key={idx}
  //                       href={`#${item.href}`}
  //                       className="block py-1 text-gray-400 hover:text-white transition-colors"
  //                     >
  //                       {dropdownItem}
  //                     </a>
  //                   ))}
  //                 </div>
  //               )}
  //             </div>
  //           ))}
  //         </nav>

  //         <div className="flex flex-col space-y-3 mt-6">
  //           <a
  //             href="#contacts"
  //             className="flex items-center justify-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition-colors"
  //           >
  //             Контакты
  //           </a>
  //         </div>
  //       </div>
  //     )}
  //   </header>
  // );
};
