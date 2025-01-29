import { SiReact, SiTailwindcss, SiExpress, SiMongodb, SiGit, SiGithub } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function Skills() {

  {/* Tableau des compétences */}
  const skills = [
    { name: "React", icon: <SiReact className="text-blue-500 w-12 h-12" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-12 h-12" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500 w-12 h-12" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-12 h-12" /> },
    { name: "Git", icon: <SiGit className="text-orange-500 w-12 h-12" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-800 w-12 h-12" /> },
  ];

  return (
    <section id="skills" className="my-8 px-4 w-full">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compétences</h2>

        {/* Compétences */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center space-y-2">
              {skill.icon}
              <span className="text-lg font-semibold text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Skills;
