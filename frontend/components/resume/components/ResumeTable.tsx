import { ResumeButtonDelete } from "./edit/ResumeButtonDelete";
import { ResumeButtonEdit } from "./edit/ResumeButtonEdit";
import { resumeStatusParser } from "./resumeStatusParser";
import { ResumeButtonView } from "./view/ResumeButtonView";

export const ResumeTable = ({ data }: { data: any }) => {
  return (
    <table className="w-full rounded-2xl transition-all shadow">
      <thead className="bg-indigo-600 text-white">
        <tr>
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">Статус</th>
          <th className="px-6 py-3">ФИО</th>
          <th className="px-6 py-3">Должность</th>
          <th className="px-6 py-3">Опции</th>
        </tr>
      </thead>
      <tbody className="bg-indigo-900">
        {data?.map((item: any, idx: number) => (
          <>
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-white">
                {item.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white">
                {resumeStatusParser[item.status]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white">
                {item.first_name} {item.last_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white">
                {item.position}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex justify-center gap-2">
                <ResumeButtonView id={item.id} />
                <ResumeButtonEdit id={item.id} />
                <ResumeButtonDelete id={item.id} />
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <div className="w-full border-b-1 border-b-indigo-500" />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
