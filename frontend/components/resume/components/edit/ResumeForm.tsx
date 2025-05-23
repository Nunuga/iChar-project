import { useUpdateResumeItemMutation } from "@/api/resumeApi";
import { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export const ResumeForm = ({
  data,
  isOpen,
}: {
  data: any;
  isOpen: boolean;
}) => {
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

  // Experience field array
  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience",
  });

  // Education field array
  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  // Certifications field array
  const {
    fields: certificationsFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    control,
    name: "certifications",
  });

  // Project field array
  const {
    fields: projectsFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control,
    name: "projects",
  });

  // Skills field array
  const {
    fields: skillsFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const projectsValues = watch("projects") || [];

  // Для хранения current value input'a технологий каждого поля
  const [techInputs, setTechInputs] = useState<Record<number, string>>({});

  const techInputRefs = useRef<any>({});

  // Добавление технологии в массив
  const handleAddTech = (index: any, value: any) => {
    if (!value.trim()) return;
    const currentArr = projectsValues?.[index]?.technologies || [];
    if (currentArr.includes(value.trim())) return;

    const newArr = [...currentArr, value.trim()];
    setValue(`projects.${index}.technologies`, newArr, {
      shouldValidate: true,
    });

    setTechInputs((prev) => ({
      ...prev,
      [index]: "",
    }));
  };

  // Удаление технологии по индексу
  const handleRemoveTech = (projIndex: any, techIndex: any) => {
    const currentArr = projectsValues?.[projIndex]?.technologies || [];
    const newArr = currentArr.filter((item: any, i: any) => i !== techIndex);
    setValue(`projects.${projIndex}.technologies`, newArr, {
      shouldValidate: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col">
          <label className="text-white font-bold">Имя</label>
          <input
            {...register("first_name")}
            className="w-full mt-2 p-4 bg-white rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-bold">Фамилия</label>
          <input
            {...register("last_name")}
            className="w-full mt-2 p-4 bg-white rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-bold">Должность</label>
          <input
            {...register("position")}
            className="w-full mt-2 p-4 bg-white rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-bold">О себе</label>
          <textarea
            {...register("about")}
            className="w-full h-50 max-h-50 min-h-50 mt-2 p-4 bg-white rounded-lg"
          />
        </div>

        <div className="w-full border-b border-indigo-500" />

        <h1 className="text-center text-white font-bold">Контакты</h1>
        <div className="grid grid-cols-7 gap-2">
          <div className="flex flex-col">
            <label className="text-white font-bold">Email</label>
            <input
              {...register("contact.email")}
              className="w-full mt-2 p-4 bg-white rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold">Телефон</label>
            <input
              {...register("contact.phone")}
              className="w-full mt-2 p-4 bg-white rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold">Telegram</label>
            <input
              {...register("contact.telegram")}
              className="w-full mt-2 p-4 bg-white rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold">Адрес</label>
            <input
              {...register("contact.location")}
              className="w-full mt-2 p-4 bg-white rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold">GitHub</label>
            <input
              {...register("contact.github")}
              className="w-full mt-2 p-4 bg-white rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold">Twitter</label>
            <input
              {...register("contact.twitter")}
              className="w-full mt-2 p-4 bg-white rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold">Linkedin</label>
            <input
              {...register("contact.linkedin")}
              className="w-full mt-2 p-4 bg-white rounded-lg"
            />
          </div>
        </div>

        <div className="w-full border-b border-indigo-500" />

        <h1 className="text-center text-white font-bold">Опыт</h1>
        <div>
          {experienceFields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-5 gap-2 items-center mb-2"
            >
              <div className="flex flex-col">
                <label className="text-white font-bold">Должность</label>
                <input
                  {...register(`experience.${index}.position`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Компания</label>
                <input
                  {...register(`experience.${index}.company`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Период</label>
                <input
                  {...register(`experience.${index}.period`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Описание</label>
                <input
                  {...register(`experience.${index}.description`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="px-6 py-2 mt-6 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg shadow"
              >
                Удалить
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendExperience({
                position: "",
                company: "",
                period: "",
                description: "",
              })
            }
            className="w-full px-6 py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow"
          >
            Добавить опыт
          </button>
        </div>

        <div className="w-full border-b border-indigo-500" />

        <h1 className="text-center text-white font-bold">Образование</h1>
        <div>
          {educationFields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-4 gap-2 items-center mb-2"
            >
              <div className="flex flex-col">
                <label className="text-white font-bold">Специальность</label>
                <input
                  {...register(`education.${index}.degree`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Университет</label>
                <input
                  {...register(`education.${index}.institution`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Год</label>
                <input
                  {...register(`education.${index}.year`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="px-6 py-2 mt-6 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg shadow"
              >
                Удалить
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendEducation({ degree: "", institution: "", year: "" })
            }
            className="w-full px-6 py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow"
          >
            Добавить образование
          </button>
        </div>

        <div className="w-full border-b border-indigo-500" />

        <h1 className="text-center text-white font-bold">Сертификаты</h1>
        <div>
          {certificationsFields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-4 gap-2 items-center mb-2"
            >
              <div className="flex flex-col">
                <label className="text-white font-bold">Наименование</label>
                <input
                  {...register(`certifications.${index}.name`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Выдавший</label>
                <input
                  {...register(`certifications.${index}.issuer`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Год</label>
                <input
                  {...register(`certifications.${index}.year`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <button
                type="button"
                onClick={() => removeCertification(index)}
                className="px-6 py-2 mt-6 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg shadow"
              >
                Удалить
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendCertification({ name: "", issuer: "", year: "" })
            }
            className="w-full px-6 py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow"
          >
            Добавить сертификат
          </button>
        </div>

        <div className="w-full border-b border-indigo-500" />

        <h1 className="text-center text-white font-bold">Проекты</h1>
        <div>
          {projectsFields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-4 gap-2 items-center mb-2"
            >
              <div className="flex flex-col">
                <label className="text-white font-bold">Наименование</label>
                <input
                  {...register(`projects.${index}.name`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Описание</label>
                <input
                  {...register(`projects.${index}.description`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white font-bold">Технологии</label>

                <div className="flex flex-wrap gap-2 mt-2">
                  {projectsValues?.[index]?.technologies.map(
                    (tech: any, techIdx: number) => (
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
                    )
                  )}

                  <input
                    ref={(el) => {
                      techInputRefs.current[index] = el;
                    }}
                    type="text"
                    value={techInputs[index] || ""}
                    placeholder="Нажмите Enter чтобы добавить"
                    onChange={(e) =>
                      setTechInputs((prev) => ({
                        ...prev,
                        [index]: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === ",") {
                        e.preventDefault();
                        handleAddTech(index, techInputs[index] || "");
                      }
                      if (e.key === "Backspace" && !techInputs[index]) {
                        // Стереть последний тег по Backspace на пустом input
                        const arr = projectsValues?.[index]?.technologies || [];
                        if (arr.length > 0) {
                          handleRemoveTech(index, arr.length - 1);
                        }
                      }
                    }}
                    className="w-full p-4 bg-white rounded-lg"
                  />
                </div>
                <input
                  type="hidden"
                  {...register(`projects.${index}.technologies`)}
                />
              </div>

              <button
                type="button"
                onClick={() => removeProject(index)}
                className="px-6 py-2 mt-6 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg shadow"
              >
                Удалить
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendProject({ name: "", description: "", technologies: [] })
            }
            className="w-full px-6 py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow"
          >
            Добавить проект
          </button>
        </div>

        <div className="w-full border-b border-indigo-500" />

        <h1 className="text-center text-white font-bold">Навыки</h1>
        <div>
          {skillsFields?.map((field: any, index: number) => (
            <div
              key={field.id}
              className="grid grid-cols-2 gap-2 items-center mb-2"
            >
              <div className="flex flex-col">
                <label className="text-white font-bold">{index + 1}.</label>
                <input
                  {...register(`skills.${index}`)}
                  className="w-full mt-2 p-4 bg-white rounded-lg"
                />
              </div>

              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="px-6 py-2 mt-6 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg shadow"
              >
                Удалить
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendSkill("")}
            className="w-full px-6 py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow"
          >
            Добавить навык
          </button>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-2 rounded-lg text-white font-medium focus:outline-none"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};
