import React from "react";

interface NavbarProps {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              Logo
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-1 text-black dark:text-white transition-all duration-200 border border-black dark:border-white lg:hidden focus:bg-gray-100 dark:focus:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a
              href="#"
              className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80"
            >
              Categories
            </a>

            <a
              href="#"
              className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80"
            >
              Manage Tasks
            </a>
          </div>

          <button
            onClick={() => setDarkMode(!isDarkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-all duration-200"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
