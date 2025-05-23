import { useLazyGetResumeItemQuery } from "@/api/resumeApi";
import { useState, useEffect, useCallback } from "react";
import { ResumeForm } from "./ResumeForm";

export const ResumeButtonEdit = ({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [resumeData, { data, isLoading, isError }] =
    useLazyGetResumeItemQuery();

  // Закрытие по Escape
  const onKeyDown = useCallback((e: any) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      resumeData({ id: id });
    }
  }, [isOpen, id]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-2 rounded-lg text-white font-medium focus:outline-none"
      >
        Редактировать
      </button>

      {isOpen && (
        <div className="absolute inset-10 z-30 flex items-start justify-center">
          {/* Оверлей — кликом по нему окно закрывается */}
          <div
            className="fixed inset-0 z-10 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Само окно */}
          <div className="absolute w-full z-30 bg-gradient-to-br from-gray-700 to-indigo-900 rounded-xl">
            <div className="w-full flex items-center relative bg-indigo-500 p-4 rounded-t-xl">
              <h1 className="text-white font-bold flex-1 text-center">
                Редактирование
              </h1>
              <button
                className="absolute right-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow"
                onClick={() => setIsOpen(false)}
              >
                Закрыть
              </button>
            </div>
            <div className="mb-4 w-full border-b border-indigo-500" />
            <div>
              <ResumeForm data={data} isOpen={isOpen} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
