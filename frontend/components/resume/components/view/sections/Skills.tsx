import { LuStar } from "react-icons/lu";

export const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills?.length > 0 && (
        <div className="bg-gray-800 bg-opacity-100 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-6">
            <LuStar className="h-6 w-6 text-indigo-400 mr-3" />
            <h2 className="text-2xl font-bold">Навыки</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-900 bg-opacity-50 px-3 py-1 rounded-full text-indigo-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
