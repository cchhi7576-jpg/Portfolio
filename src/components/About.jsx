import React from "react";
import profilePhoto from "../img/photo_20.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              I am a highly driven software developer with extensive experience
              in front-end programming and UI/UX design. I've developed
              practical skills through intensive training programs covering
              front-end technologies and Git version control. I'm delighted to
              contribute to relevant software projects and grow professionally.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Currently pursuing my Bachelor's degree in Computer Science and
              Engineering at Royal University of Phnom Penh (RUPP), I combine
              academic knowledge with hands-on project experience. My expertise
              spans HTML, CSS, JavaScript, React.js, and modern UI/UX design
              tools like Figma. I'm passionate about creating responsive,
              user-friendly web applications and continuously expanding my
              technical skills.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/cchhi7576-jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ouchhi-san-05135b3a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
