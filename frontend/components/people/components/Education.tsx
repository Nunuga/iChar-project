import { LuGraduationCap } from "react-icons/lu";

export const Education = ({ education }: { education: PersonEducationI[] }) => {
  return (
    <>
      {education.length > 0 && (
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-6">
            <LuGraduationCap className="h-6 w-6 text-indigo-400 mr-3" />
            <h2 className="text-2xl font-bold">Образование</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-indigo-500 pl-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-indigo-300">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
