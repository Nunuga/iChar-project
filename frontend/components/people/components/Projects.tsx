import { LuCode } from "react-icons/lu";

export const Projects = ({ projects }: { projects: PersonProjectsI[] }) => {
  return (
    <>
      {projects.length > 0 && (
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-6">
            <LuCode className="h-6 w-6 text-indigo-400 mr-3" />
            <h2 className="text-2xl font-bold">Проекты</h2>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-l-4 border-purple-500 pl-5 py-1"
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 bg-opacity-70 text-sm text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
