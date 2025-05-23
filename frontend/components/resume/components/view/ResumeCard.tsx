import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { Certification } from "./sections/Certification";
import { Cv } from "./sections/Cv";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { ProfileHeader } from "./sections/ProfileHeader";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export const ResumeCard = ({ data }: { data: ResumeI }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="text-white">
      <div className="min-w-400 mx-auto">
        {/* Header/Profile Card */}
        <ProfileHeader data={data} />

        <div className="flex justify-center mb-8">
          <button
            onClick={toggleDetails}
            className="flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {showDetails ? "Скрыть" : "Подробнее"}
            {showDetails ? (
              <LuChevronUp className="ml-2 h-5 w-5" />
            ) : (
              <LuChevronDown className="ml-2 h-5 w-5" />
            )}
          </button>
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out overflow-hidden ${showDetails ? "h-full opacity-100" : "h-0 opacity-100"}`}
        >
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <Experience experience={data?.experience} />

            {/* Projects Section */}
            <Projects projects={data?.projects} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <Skills skills={data?.skills} />

            {/* Education Section */}
            <Education education={data?.education} />

            {/* Certifications Section */}
            <Certification certification={data?.certifications} />

            {/* Download Resume button */}
            <Cv cv={data?.cv} />
          </div>
        </div>
      </div>
    </div>
  );
};
