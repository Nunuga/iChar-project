import { LuBriefcase, LuCalendar } from "react-icons/lu";

export const Experience = ({
  experience,
}: {
  experience: PersonExperienceI[];
}) => {
  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <LuBriefcase className="h-6 w-6 text-indigo-400 mr-3" />
        <h2 className="text-2xl font-bold">Опыт</h2>
      </div>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-indigo-500"
          >
            <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-indigo-500"></div>
            <div className="mb-1 flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {exp.position}
              </h3>
              <span className="text-sm text-indigo-400 flex items-center mt-1 sm:mt-0">
                <LuCalendar className="h-4 w-4 mr-1" />
                {exp.period}
              </span>
            </div>
            <p className="text-lg text-indigo-300 mb-2">{exp.company}</p>
            <p className="text-gray-300 whitespace-pre-line">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
