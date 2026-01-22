import React from "react";
import appleCloneImg from "../img/apple clone.png";
import weatherappImg from "../img/Weatherapp.png";
import todoListImg from "../img/todolist.png";
import dreamworkImg from "../img/dreamwork.png";
const Projects = () => {
  const projects = [
    {
      title: "Dreamwork Clone",
      description:
        "Team project cloning Dreamwork website using modern web technologies. Collaborated with team members to recreate the design and functionality with responsive layouts.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: dreamworkImg,
      github: "https://github.com/cchhi7576-jpg",
      demo: "https://generont-team.github.io/generont-dreamwork/",
    },
    {
      title: "Apple Homepage Clone",
      description:
        "Individual project cloning Apple's static homepage with responsive design. Implemented pixel-perfect design using Tailwind framework to match Apple's aesthetic and user experience.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design"],
      image: appleCloneImg,
      github: "https://github.com/cchhi7576-jpg/Clone_apple",
      demo: "https://cchhi7576-jpg.github.io/Clone_apple/",
    },
    {
      title: "Weather App",
      description:
        "Individual project - Weather app built with React that provides accurate, real-time weather updates. Features include temperature display, humidity tracking, and weather forecasts using Fetch API.",
      technologies: ["React.js", "Tailwind CSS", "Fetch API", "JavaScript"],
      image: weatherappImg,
      github: "https://github.com/cchhi7576-jpg/Weather-app",
      demo: "https://cchhi7576-jpg.github.io/Weather-app/",
    },
    {
      title: "Todo List App",
      description:
        "Personal project featuring full CRUD operations (Create, Read, Update, Delete) with local storage integration. Users can efficiently manage tasks with persistent data storage.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
      image: todoListImg,
      github: "https://github.com/cchhi7576-jpg/Todo-list",
      demo: "https://cchhi7576-jpg.github.io/Todo-list/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition text-sm sm:text-base text-center sm:text-left"
                  >
                    View Code →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition text-sm sm:text-base text-center sm:text-left"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
