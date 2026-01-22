import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
          Hi, I'm <span className="text-blue-400">Ouchhi San</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300">
          Full Stack Developer | Designer | Problem Solver
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition transform hover:scale-105"
          >
            Contact Me
          </button>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto border-2 border-blue-400 hover:bg-blue-400 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition transform hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
