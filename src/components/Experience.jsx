import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Program",
      company: "Above & Beyond School",
      period: "2025",
      description:
        "Full-time intensive training program, Monday to Friday for 3 months, preparing for corporate roles and responsibilities in software development.",
      achievements: [
        "Developed practical skills in front-end technologies",
        "Gained hands-on experience with Git version control",
        "Completed team and individual projects using modern web frameworks",
        "Learned Agile methodology and project management",
      ],
    },
    {
      title: "Bachelor of Computer Science and Engineering",
      company: "Royal University of Phnom Penh (RUPP)",
      period: "2024 - 2027",
      description:
        "Year 3 student majoring in Computer Science and Engineering. Building strong foundation in software development, algorithms, and system design.",
      achievements: [
        "Specializing in front-end development and UI/UX design",
        "Completed multiple web development projects",
        "Active involvement in coding projects and team collaborations",
        "Developing expertise in React.js and modern web technologies",
      ],
    },
    {
      title: "High School Diploma",
      company: "Bovel High School",
      period: "2020 - 2023",
      description:
        "Graduated Grade 12 with strong academic performance. Developed early interest in technology and programming.",
      achievements: [
        "Completed secondary education with excellence",
        "Built foundation for pursuing computer science",
        "Developed problem-solving and analytical skills",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-900 text-white py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition h-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-300 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      {exp.period}
                    </p>
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2 flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="text-sm sm:text-base text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block w-8 h-8 bg-blue-600 rounded-full border-4 border-gray-900 z-10 flex-shrink-0"></div>
                <div className="w-full lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
