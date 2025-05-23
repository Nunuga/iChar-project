import { LuLink } from "react-icons/lu";

export const Cv = ({ cv }: { cv: string }) => {
  return (
    <>
      {cv && (
        <div className="text-center">
          <a
            href={cv}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <LuLink className="mr-2 h-5 w-5" />
            Скачать резюме
          </a>
        </div>
      )}
    </>
  );
};
