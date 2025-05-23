import { useDeleteResumeItemMutation } from "@/api/resumeApi";

export const ResumeButtonDelete = ({ id }: { id: number }) => {
  const [deleteResume] = useDeleteResumeItemMutation();

  const onSubmit = async () => {
    try {
      const response = await deleteResume({ id: id }).unwrap();

      if (response) {
        alert("Запись успешно удалена");
      }
    } catch (error: any) {
      alert(`Ошибка при удалении записи: ${JSON.stringify(error)}`);
    }
  };

  return (
    <button
      onClick={() => onSubmit()}
      className="px-6 py-2 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg transition-all shadow"
    >
      Удалить
    </button>
  );
};
