"use client";

import { useResumeStore } from "@/stores/useResumeStore";
import { Plus, Trash2 } from "lucide-react";

export const EducationForm = () => {
  const { resumeData, addSectionItem, removeSectionItem, updateSectionItem } =
    useResumeStore();
  const educationList = resumeData.education;

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Education</h3>
        <button
          onClick={() => addSectionItem("education")}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
        >
          <Plus size={16} /> Add School
        </button>
      </div>

      {educationList.map((edu) => (
        <div
          key={edu.id}
          className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative group animate-in slide-in-from-bottom-2"
        >
          <button
            onClick={() => removeSectionItem("education", edu.id)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            title="Delete"
            aria-label="Delete education"
          >
            <Trash2 size={16} />
          </button>

          <div className="grid grid-cols-1 gap-3">
            {/* School */}
            <input
              placeholder="School Name"
              value={edu.school}
              onChange={(e) =>
                updateSectionItem("education", edu.id, "school", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
            />

            {/* Location */}
            <input
              placeholder="Location"
              value={edu.location}
              onChange={(e) =>
                updateSectionItem(
                  "education",
                  edu.id,
                  "location",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) =>
                  updateSectionItem(
                    "education",
                    edu.id,
                    "degree",
                    e.target.value
                  )
                }
                className="sm:col-span-2 w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
              />
              <input
                placeholder="GPA (Optional)"
                value={edu.gpa}
                onChange={(e) =>
                  updateSectionItem("education", edu.id, "gpa", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Start Date"
                value={edu.startDate}
                onChange={(e) =>
                  updateSectionItem(
                    "education",
                    edu.id,
                    "startDate",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
              />
              <input
                placeholder="End Date"
                value={edu.endDate}
                onChange={(e) =>
                  updateSectionItem(
                    "education",
                    edu.id,
                    "endDate",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
