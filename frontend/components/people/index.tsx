import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { Certification } from "./components/Certification";
import { Cv } from "./components/Cv";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { ProfileHeader } from "./components/ProfileHeader";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const PortfolioBase = ({
  professional,
}: {
  professional: PersonDescriptionI;
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-24 pb-12 px-4 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header/Profile Card */}
        <ProfileHeader professional={professional} />

        {professional.showDetails && (
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
        )}

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out overflow-hidden ${showDetails ? "h-full opacity-100" : "h-0 opacity-0"}`}
        >
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <Experience experience={professional.experience} />

            {/* Projects Section */}
            <Projects projects={professional.projects} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <Skills skills={professional.skills} />

            {/* Education Section */}
            <Education education={professional.education} />

            {/* Certifications Section */}
            <Certification certification={professional.certifications} />

            {/* Download Resume button */}
            <Cv cv={professional.cv} />
          </div>
        </div>
      </div>
    </div>
  );
};
