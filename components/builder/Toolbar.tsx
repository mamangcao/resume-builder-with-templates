"use client";

import { useResumeStore } from "@/stores/useResumeStore";
import { Download, FileText, Layout, Palette } from "lucide-react";
import { SiKofi } from "react-icons/si";

export const Toolbar = () => {
  const {
    selectedTemplate,
    setTemplate,
    resumeData,
    themeColor,
    setThemeColor,
  } = useResumeStore();

  const colors = [
    { name: "emerald", class: "bg-emerald-600" },
    { name: "blue", class: "bg-blue-600" },
    { name: "slate", class: "bg-slate-800" },
    { name: "purple", class: "bg-purple-600" },
    { name: "rose", class: "bg-rose-600" },
  ];

  const handlePrint = () => {
    const originalTitle = document.title;
    const fileName = resumeData.personalInfo.fullName
      ? `${resumeData.personalInfo.fullName} - Resume`
      : "My Resume";
    document.title = fileName;
    window.print();
    setTimeout(() => (document.title = originalTitle), 100);
  };

  return (
    <div className="order-1 md:absolute md:top-4 md:right-6 z-30 flex flex-wrap gap-3 p-4 md:p-0 border-b md:border-b-0 bg-white md:bg-transparent justify-center md:justify-end items-center no-print w-full md:w-auto">
      {/* Color Picker*/}
      {selectedTemplate === "modern" && (
        <div className="bg-white p-2 rounded-lg shadow-sm md:shadow-lg border border-gray-200 flex gap-2 items-center animate-in fade-in slide-in-from-top-2 duration-300">
          <Palette size={14} className="text-gray-400 ml-1 hidden sm:block" />
          <div className="h-4 w-px bg-gray-200 mx-1 hidden sm:block"></div>
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setThemeColor(c.name)}
              className={`w-6 h-6 rounded-full ${
                c.class
              } border-2 transition-all cursor-pointer ${
                themeColor === c.name
                  ? "border-gray-900 scale-110 shadow-sm"
                  : "border-transparent hover:scale-110"
              }`}
              aria-label={`Select ${c.name} theme`}
            />
          ))}
        </div>
      )}

      {/* Template Switcher */}
      <div className="bg-white p-1 rounded-lg shadow-sm md:shadow-lg border border-gray-200 flex gap-1">
        <button
          onClick={() => setTemplate("harvard")}
          className={`group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
            selectedTemplate === "harvard"
              ? "bg-gray-900 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <FileText size={16} className="group-hover:cursor-pointer" />
          <span className="hidden sm:inline group-hover:cursor-pointer">
            Harvard
          </span>
        </button>
        <button
          onClick={() => setTemplate("modern")}
          className={`group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
            selectedTemplate === "modern"
              ? "bg-emerald-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Layout size={16} className="group-hover:cursor-pointer" />
          <span className="hidden sm:inline group-hover:cursor-pointer">
            Modern
          </span>
        </button>
      </div>

       {/* Ko-fi Button */}
      {/* Ko-fi brand color is roughly #FF5E5B, but we can use Tailwind's Rose or Red */}
      <a
        href="https://ko-fi.com/mamangcao"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#FF5E5B] hover:bg-[#FF413D] text-white px-4 py-2 rounded-lg shadow-sm md:shadow-lg font-bold transition-colors text-sm"
      >
        <SiKofi size={18} />
        <span className="hidden sm:inline">Send a Coffee</span>
      </a>

      {/* Download Button */}
      <button
        onClick={handlePrint}
        className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm md:shadow-lg font-semibold transition-colors text-sm"
      >
        <Download size={18} className="group-hover:cursor-pointer" />
        <span className="hidden sm:inline group-hover:cursor-pointer">
          Download PDF
        </span>
      </button>
    </div>
  );
};
