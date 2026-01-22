import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-400">Portfolio</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
