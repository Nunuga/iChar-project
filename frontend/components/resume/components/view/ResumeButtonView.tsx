import { useLazyGetResumeItemQuery } from "@/api/resumeApi";
import { ResumeCard } from "@/components/resume/components/view/ResumeCard";
import { useState, useEffect, useCallback } from "react";

export const ResumeButtonView = ({ id }: { id: number }) => {
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
        Открыть
      </button>

      {isOpen && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          {/* Оверлей — кликом по нему окно закрывается */}
          <div
            className="fixed inset-0 z-10 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Само окно */}
          <div className="absolute z-30">
            <div className="py-24 pb-12 px-4">
              <ResumeCard data={data} />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 mb-4  px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};
