import { LuAward } from "react-icons/lu";

export const Certification = ({
  certification,
}: {
  certification: ResumeCertificationsI[];
}) => {
  return (
    <>
      {certification?.length > 0 && (
        <div className="bg-gray-800 bg-opacity-100 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-6">
            <LuAward className="h-6 w-6 text-indigo-400 mr-3" />
            <h2 className="text-2xl font-bold">Сертификаты</h2>
          </div>

          <div className="space-y-4">
            {certification?.map((cert, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-indigo-900 bg-opacity-30 p-2 rounded-lg mr-3">
                  <LuAward className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
