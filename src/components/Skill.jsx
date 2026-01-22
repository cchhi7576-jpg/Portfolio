import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "React.js", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      category: "UI/UX & Design",
      skills: [
        { name: "Figma", level: 75 },
        { name: "Prototyping", level: 70 },
        { name: "Wireframing", level: 70 },
        { name: "Design Systems", level: 65 },
        { name: "UX Optimization", level: 70 },
      ],
    },
    {
      category: "Tools & Methodologies",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Version Control", level: 80 },
        { name: "Agile/Scrum", level: 70 },
        { name: "Kanban", level: 65 },
        { name: "Python", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Skills & Expertise
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 sm:p-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-blue-600">
                {category.category}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm sm:text-base text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm sm:text-base text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
