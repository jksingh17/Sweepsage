

'use client';
import React, { useState, RefObject, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  sectionRefs?: { [key: string]: RefObject<HTMLElement> };
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [activeMenu, setActiveMenu] = useState<string>('Home'); // State for active menu item
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu
  const dropdownRef = useRef<HTMLUListElement>(null); // Ref for dropdown
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu

  // Close dropdown if clicking outside or selecting a subservice
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionName: string) => {
    if (!sectionRefs) {
      console.warn("No sectionRefs provided");
      return;
    }
    const targetRef = sectionRefs[sectionName];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveMenu(sectionName);
      setIsOpen(false);
    } else {
      console.warn(`No section found for ${sectionName}`);
    }
  };
  

  const handleServiceClick = (serviceName: string) => {
    localStorage.setItem('selectedService', serviceName); // Store the service name
    router.push('/Form'); // Navigate to the Form page
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div
      className={`bg-black text-white transition-all duration-300 fixed w-full z-50`}
      style={{
        height: isOpen ? 'auto' : '80px',
        paddingTop: isOpen ? '0px' : '0px',
      }}
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 pt-5 pb-6 mx-auto h-full">
        <a href="/" className="flex items-center">
          <img src="logo1.png" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
          <span
  className="self-center text-xl 2xl font-semibold"
  style={{ fontSize: '2rem', fontFamily: 'FantasyFont, cursive' }}
>
  Sweepsage
</span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden md:flex space-x-4">
            <div className="relative inline-flex group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                onClick={() => window.open("https://wa.me/9555826615", "_blank")}
                title="Get quote now"
                className="text-white relative inline-flex items-center justify-center px-8 py-2 text-lg font-bold transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Contact Us
              </a>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-white rounded-lg lg:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {['Home'].map((menu) => (
              <li key={menu}>
                <a
                  onClick={() => scrollToSection(menu.replace('?', ''))}
                  className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                    activeMenu === menu
                      ? 'text-purple-500'
                      : 'text-gray-300 hover:text-purple-500 hover:cursor-pointer'
                  }`}
                  aria-current={activeMenu === menu ? 'page' : undefined}
                >
                  {menu}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                  activeMenu === 'Services'
                    ? 'text-purple-500'
                    : 'text-gray-300 hover:text-purple-500'
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 ml-2 transform transition-transform ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg"
                >
                  {[
                    'Ad Creation',
                    'Photography',
                    'Social Media Management',
                    'Video Editing',
                    'Graphic Design',
                    'Gaming ID vendors',
                    'Web Development',
                    'App Development',
                  ].map((service) => (
                    <li key={service}>
                      <a
                        onClick={() => handleServiceClick(service)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {[ 'WhyUs?', 'Reviews', 'AboutUs', 'FAQs', 'Footer'].map((menu) => (
              <li key={menu}>
                <a
                  onClick={() => scrollToSection(menu.replace('?', ''))}
                  className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                    activeMenu === menu
                      ? 'text-purple-500'
                      : 'text-gray-300 hover:text-purple-500 hover:cursor-pointer'
                  }`}
                  aria-current={activeMenu === menu ? 'page' : undefined}
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
