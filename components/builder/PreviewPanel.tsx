"use client";

import { useResumeStore } from "@/stores/useResumeStore";
import { HarvardTemplate } from "@/components/templates/HarvardTemplate";
import { ModernTemplate } from "@/components/templates/ModernTemplate";

export const PreviewPanel = () => {
  const { resumeData, selectedTemplate, themeColor } = useResumeStore();

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-700/50 p-4 md:p-8 print:p-0 print:bg-white print:overflow-visible">
      <div
        id="resume-preview-id"
        className="mx-auto w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl print:shadow-none print:w-full print:max-w-none print:m-0"
      >
        {selectedTemplate === "harvard" && (
          <HarvardTemplate data={resumeData} />
        )}
        {selectedTemplate === "modern" && (
          <ModernTemplate data={resumeData} themeColor={themeColor} />
        )}
      </div>
    </div>
  );
};
