"use client";

import { useResumeStore } from "@/stores/useResumeStore";
import { ResumeData } from "@/types/resume";

export const PersonalInfoForm = () => {
  const { resumeData, updatePersonalInfo } = useResumeStore();
  const { personalInfo } = resumeData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name as keyof ResumeData["personalInfo"];
    updatePersonalInfo(fieldName, e.target.value);
  };

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Personal Information
      </h3>
      <div className="grid grid-cols-1 gap-4">
        <input
          name="fullName"
          placeholder="Full Name"
          value={personalInfo.fullName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={personalInfo.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <input
          name="location"
          placeholder="City, Country"
          value={personalInfo.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="linkedin"
            placeholder="LinkedIn URL"
            value={personalInfo.linkedin}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            name="github"
            placeholder="Github URL"
            value={personalInfo.github}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <input
          name="website"
          placeholder="Portfolio URL"
          value={personalInfo.website}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          name="summary"
          placeholder="Professional Summary"
          rows={3}
          value={personalInfo.summary}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-y"
        />
      </div>
    </section>
  );
};
