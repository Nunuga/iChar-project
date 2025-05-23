import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
  LuTwitter,
  LuUser,
} from "react-icons/lu";
import { RiTelegram2Fill } from "react-icons/ri";

export const ProfileHeader = ({ data }: { data: ResumeI }) => {
  const createVCardURL = (prof: ResumeI) => {
    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${prof?.first_name} ${prof?.last_name}`,
      `TITLE:${prof?.position}`,
      `EMAIL:${prof?.contact?.email}`,
      `TEL:${prof?.contact?.phone}`,
      `ADR:;;${prof?.contact?.location};;;`,
      "END:VCARD",
    ].join("\n");

    return `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;
  };

  return (
    <div className="bg-gray-800 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden mb-12">
      <div className="relative h-40 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute top-4 right-4 flex space-x-3">
          {data?.contact?.linkedin && (
            <a
              href={`https://${data.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <LuLinkedin className="h-5 w-5" />
            </a>
          )}
          {data?.contact?.github && (
            <a
              href={`https://${data.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <LuGithub className="h-5 w-5" />
            </a>
          )}
          {data?.contact?.twitter && (
            <a
              href={`https://${data.contact.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <LuTwitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="flex flex-col md:flex-row">
          <div className="relative -top-16 md:-top-20 flex-shrink-0">
            <img
              src={data?.photo?.file_path}
              alt={`${data?.first_name} ${data?.last_name}`}
              className="h-32 w-32 md:h-40 md:w-40 rounded-xl border-4 border-gray-800 shadow-lg object-cover bg-indigo-900"
            />
          </div>

          <div className="md:ml-6 md:pt-6 -mt-10 md:mt-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {data?.first_name} {data?.last_name}
                </h1>
                <p className="text-xl text-indigo-400 mt-1">{data?.position}</p>
              </div>

              <div className="mt-4 md:mt-0 space-y-2">
                {data?.contact?.email && (
                  <div className="hidden md:flex items-center">
                    <LuMail className="h-5 w-5 text-indigo-400 mr-2" />
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-indigo-300 hover:text-white transition-colors underline decoration-dotted"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                )}
                {data?.contact?.phone && (
                  <div className="hidden md:flex items-center">
                    <LuPhone className="h-5 w-5 text-indigo-400 mr-2" />
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="text-indigo-300 hover:text-white transition-colors underline decoration-dotted"
                    >
                      {data.contact.phone}
                    </a>
                  </div>
                )}
                {data?.contact?.telegram && (
                  <div className="hidden md:flex items-center">
                    <RiTelegram2Fill className="h-5 w-5 text-indigo-400 mr-2" />
                    <a
                      href={`https://t.me/${data.contact.telegram}`}
                      target="_blank"
                      className="text-indigo-300 hover:text-white transition-colors underline decoration-dotted"
                    >
                      {"@" + data.contact.telegram}
                    </a>
                  </div>
                )}
                {data?.contact?.location && (
                  <div className="flex items-center">
                    <LuMapPin className="h-5 w-5 text-indigo-400 mr-2" />
                    <span className="text-gray-300">
                      {data.contact.location}
                    </span>
                  </div>
                )}
              </div>
              <div className="md:hidden mt-4">
                {data?.contact?.phone && (
                  <>
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="flex items-center justify-center w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-white shadow-lg transition-all mb-3"
                    >
                      <LuPhone className="mr-2 h-5 w-5" />
                      Позвонить
                    </a>
                    <a
                      href={`https://t.me/${data?.contact?.telegram}`}
                      target="_blank"
                      className="flex items-center justify-center w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white shadow-lg transition-all mb-3"
                    >
                      <RiTelegram2Fill className="mr-2 h-5 w-5" />
                      Написать в Telegram
                    </a>
                  </>
                )}
                <a
                  href={`mailto:${data?.contact?.email}`}
                  className="flex items-center justify-center w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white shadow-lg transition-all mb-3"
                >
                  <LuMail className="mr-2 h-5 w-5" />
                  Email
                </a>
                <a
                  href={createVCardURL(data)}
                  download={`${data?.first_name.replace(" ", "_")} ${data?.last_name.replace(" ", "_")}.vcf`}
                  className="flex items-center justify-center w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-white shadow-lg transition-all"
                >
                  <LuUser className="mr-2 h-5 w-5" />
                  Сохрнаить контакт
                </a>
              </div>
            </div>

            {data?.about && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-2">О себе</h2>
                <p className="text-gray-300 whitespace-pre-line">
                  {data.about}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
