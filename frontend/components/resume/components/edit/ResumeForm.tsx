import { useUpdateResumeItemMutation } from "@/api/resumeApi";
import { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export const ResumeForm = ({ data, isOpen }: { data: any; isOpen: boolean }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: data });

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  useEffect(() => {
    if (isOpen) reset();
  }, [isOpen]);

  const [updateResume] = useUpdateResumeItemMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await updateResume(data).unwrap();
      if (response) {
        alert("Запись успешно обновлена");
      }
    } catch (error: any) {
      alert(`Ошибка при обновлении записи: ${JSON.stringify(error)}`);
    }
  };

  // Field arrays
  const fieldArrays = {
    experience: useFieldArray({ control, name: "experience" }),
    education: useFieldArray({ control, name: "education" }),
    certifications: useFieldArray({ control, name: "certifications" }),
    projects: useFieldArray({ control, name: "projects" }),
    skills: useFieldArray({ control, name: "skills" }),
  };

  const projectsValues = watch("projects") || [];
  const [techInputs, setTechInputs] = useState<Record<number, string>>({});
  const techInputRefs = useRef<any>({});

  const handleAddTech = (index: any, value: any) => {
    if (!value.trim()) return;
    const currentArr = projectsValues?.[index]?.technologies || [];
    if (currentArr.includes(value.trim())) return;

    const newArr = [...currentArr, value.trim()];
    setValue(`projects.${index}.technologies`, newArr, { shouldValidate: true });
    setTechInputs((prev) => ({ ...prev, [index]: "" }));
  };

  const handleRemoveTech = (projIndex: any, techIndex: any) => {
    const currentArr = projectsValues?.[projIndex]?.technologies || [];
    const newArr = currentArr.filter((item: any, i: any) => i !== techIndex);
    setValue(`projects.${projIndex}.technologies`, newArr, { shouldValidate: true });
  };

  // Render section header
  const renderSectionHeader = (title: string) => (
    <>
      <div className="w-full border-b border-indigo-500 my-6" />
      <h2 className="text-center  text-white font-bold text-xl mb-4">{title}</h2>
    </>
  );

  // Render input field
  const renderInput = (label: string, name: string, options: any = {}) => (
    <div className="mb-4">
      <label className="block text-white font-medium mb-2">{label}</label>
      <input
        {...register(name, options)}
        className="w-full px-4 py-2 bg-[#4D4D4D] text-white border border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
    </div>
  );

  // Render textarea field
  const renderTextarea = (label: string, name: string) => (
    <div className="mb-4">
      <label className="block text-white font-medium mb-2">{label}</label>
      <textarea
        {...register(name)}
        className="w-full px-4 py-2 bg-[#808080] text-white border border-indigo-500 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
    </div>
  );

  // Render array field section
  const renderArraySection = (
    title: string,
    fields: any[],
    fieldsConfig: any[],
    appendFn: any,
    removeFn: any,
    defaultItem: any
  ) => (
    <div className="mb-8">
      {renderSectionHeader(title)}
      
      {fields.map((field, index) => (
        <div key={field.id} className="bg-indigo-800 p-4 rounded-lg mb-4 border border-indigo-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fieldsConfig.map((config) => (
              <div key={config.name}>
                <label className="block text-white font-medium mb-2">{config.label}</label>
                <input
                  {...register(`${config.arrayName}.${index}.${config.name}`)}
                  className="w-full px-4 py-2 bg-indigo-700 text-white border border-indigo-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => removeFn(index)}
            className="mt-3 px-4 py-2 bg-red-800 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Удалить
          </button>
        </div>
      ))}
      
      <button
        type="button"
        onClick={() => appendFn(defaultItem)}
        className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
      >
        Добавить
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-indigo-00 p-6 rounded-lg shadow-md">
      {/* Основная информация */}
      <div className="mb-8">
        {renderSectionHeader("Основная информация")}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderInput("Имя", "first_name")}
          {renderInput("Фамилия", "last_name")}
          {renderInput("Должность", "position")}
          {renderInput("Дата рождения", "last_name")}
        </div>
        {renderTextarea("О себе", "about")}
      </div>

      {/* Контакты */}
      <div className="mb-8">
        {renderSectionHeader("Контакты")}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderInput("Email", "contact.email")}
          {renderInput("Телефон", "contact.phone")}
          {renderInput("Telegram", "contact.telegram")}
          {renderInput("Адрес", "contact.location")}
          {renderInput("GitHub", "contact.github")}
          {renderInput("Twitter", "contact.twitter")}
          {renderInput("Linkedin", "contact.linkedin")}
        </div>
      </div>

      {/* Опыт работы */}
      {renderArraySection(
        "Опыт работы",
        fieldArrays.experience.fields,
        [
          { arrayName: "experience", name: "position", label: "Должность" },
          { arrayName: "experience", name: "company", label: "Компания" },
          { arrayName: "experience", name: "period", label: "Период" },
          { arrayName: "experience", name: "description", label: "Описание" },
        ],
        fieldArrays.experience.append,
        fieldArrays.experience.remove,
        { position: "", company: "", period: "", description: "" }
      )}

      {/* Образование */}
      {renderArraySection(
        "Образование",
        fieldArrays.education.fields,
        [
          { arrayName: "education", name: "degree", label: "Специальность" },
          { arrayName: "education", name: "institution", label: "Университет" },
          { arrayName: "education", name: "year", label: "Год" },
        ],
        fieldArrays.education.append,
        fieldArrays.education.remove,
        { degree: "", institution: "", year: "" }
      )}

      {/* Сертификаты */}
      {renderArraySection(
        "Сертификаты",
        fieldArrays.certifications.fields,
        [
          { arrayName: "certifications", name: "name", label: "Наименование" },
          { arrayName: "certifications", name: "issuer", label: "Выдавший" },
          { arrayName: "certifications", name: "year", label: "Год" },
        ],
        fieldArrays.certifications.append,
        fieldArrays.certifications.remove,
        { name: "", issuer: "", year: "" }
      )}

      {/* Проекты */}
      <div className="mb-8">
        {renderSectionHeader("Проекты")}
        
        {fieldArrays.projects.fields.map((field, index) => (
          <div key={field.id} className="bg-indigo-800 p-4 rounded-lg mb-4 border border-indigo-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput("Наименование", `projects.${index}.name`)}
              {renderInput("Описание", `projects.${index}.description`)}
              
              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">Технологии</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {projectsValues?.[index]?.technologies?.map((tech: any, techIdx: number) => (
                    <span
                      key={techIdx}
                      className="bg-blue-700 text-white px-3 py-1 rounded-full flex items-center"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => handleRemoveTech(index, techIdx)}
                        className="ml-2 text-red-200 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                
                <input
                  ref={(el) => (techInputRefs.current[index] = el)}
                  type="text"
                  value={techInputs[index] || ""}
                  placeholder="Введите технологию и нажмите Enter"
                  onChange={(e) => setTechInputs((prev) => ({ ...prev, [index]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === ",") {
                      e.preventDefault();
                      handleAddTech(index, techInputs[index] || "");
                    }
                    if (e.key === "Backspace" && !techInputs[index]) {
                      const arr = projectsValues?.[index]?.technologies || [];
                      if (arr.length > 0) handleRemoveTech(index, arr.length - 1);
                    }
                  }}
                  className="w-full px-4 py-2 bg-indigo-700 text-white border border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <input type="hidden" {...register(`projects.${index}.technologies`)} />
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => fieldArrays.projects.remove(index)}
              className="mt-3 px-4 py-2 bg-red-800 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Удалить проект
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => fieldArrays.projects.append({ name: "", description: "", technologies: [] })}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
        >
          Добавить проект
        </button>
      </div>

      {/* Навыки */}
      <div className="mb-8">
        {renderSectionHeader("Навыки")}
        
        {fieldArrays.skills.fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-4 mb-3">
            <input
              {...register(`skills.${index}`)}
              className="flex-1 px-4 py-2 bg-indigo-700 text-white border border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              type="button"
              onClick={() => fieldArrays.skills.remove(index)}
              className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Удалить
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => fieldArrays.skills.append("")}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
        >
          Добавить навык
        </button>
      </div>

      {/* Кнопка сохранения */}
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors"
      >
        Сохранить резюме
      </button>
    </form>
  );
};