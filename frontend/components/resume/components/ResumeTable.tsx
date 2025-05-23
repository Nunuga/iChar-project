import { ResumeButtonDelete } from "./edit/ResumeButtonDelete";
import { ResumeButtonEdit } from "./edit/ResumeButtonEdit";
import { resumeStatusParser } from "./resumeStatusParser";
import { ResumeButtonView } from "./view/ResumeButtonView";

export const ResumeTable = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((item: any) => (
        <div key={item.id} className="bg-indigo-900 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="bg-indigo-600 text-white px-4 py-3 ">
            <h3 className="font-semibold text-lg">
              {item.position}
              {/* {item.first_name} {item.last_name} */}
            </h3>
            {/* <p className="text-indigo-100">{item.position}</p> */}
          </div>
          
          <div className="p-4 text-white">
          
            <div className="mb-3 flex flex-row gap-2" >
              {/* <span className="block text-sm text-indigo-300 " ></span> */}
              <span>{item.first_name} {item.last_name}</span>
            </div>
            <div className="mb-3 flex flex-row gap-2" >
              <span className="block text-sm text-indigo-300 " >ID:</span>
              <span>{item.id}</span>
            </div>
            
            <div className="mb-4 flex flex-row gap-2"  >
              <span className="block text-sm text-indigo-300">Статус:</span>
              <span>{resumeStatusParser[item.status]}</span>
            </div>
            
            
            <div className="flex flex-row sm:flex-col gap-4 justify-center gap-2 mt-4">
              <ResumeButtonView id={item.id} />
              <ResumeButtonEdit id={item.id} />
              <ResumeButtonDelete id={item.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};