import { useCreateResumeItemMutation } from "@/api/resumeApi";
import { resumeInitialValues } from "./resumeInitialValues";

export const ResumeButtonCreate = () => {
  const [createResume] = useCreateResumeItemMutation();

  const onSubmit = async () => {
    try {
      const response = await createResume(resumeInitialValues).unwrap();

      if (response) {
        alert("Запись успешно создана");
      }
    } catch (error: any) {
      alert(`Ошибка при создании записи: ${JSON.stringify(error)}`);
    }
  };

  return (
    <button
      onClick={() => onSubmit()}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all shadow"
    >
      Добавить
    </button>
  );
};
