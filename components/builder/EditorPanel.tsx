"use client";

import { useResumeStore } from "@/stores/useResumeStore";
import { PersonalInfoForm } from "./forms/PersonalInfoForm";
import { EducationForm } from "./forms/EducationForm";
import { ExperienceForm } from "./forms/ExperienceForm";
import { ProjectsForm } from "./forms/ProjectForm";
import { SkillsForm } from "./forms/SkillForm";

export const EditorPanel = () => {
  const { loadDemoData, resetResume } = useResumeStore();

  return (
    <div className="w-full md:h-full h-auto md:overflow-y-auto bg-white z-10 flex flex-col custom-scrollbar">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-white sticky top-0 z-20 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800">Resume Builder</h2>
          <div className="flex gap-2">
            <button
              onClick={loadDemoData}
              className="text-xs px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100 font-medium transition-colors cursor-pointer"
            >
              Load Sample
            </button>
            <button
              onClick={resetResume}
              className="text-xs px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-md font-medium transition-colors cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Build a polished, professional single page resume in minutes!
        </p>
      </div>

      {/* Forms Container */}
      <div className="p-6 space-y-8 pb-10 md:pb-20">
        <PersonalInfoForm />
        <hr className="border-gray-100" />
        <EducationForm />
        <hr className="border-gray-100" />
        <ExperienceForm />
        <hr className="border-gray-100" />
        <ProjectsForm />
        <hr className="border-gray-100" />
        <SkillsForm />
      </div>
    </div>
  );
};
