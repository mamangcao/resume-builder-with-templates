"use client";

import { useResumeStore } from "@/stores/useResumeStore";
import { Plus, Trash2 } from "lucide-react";

export const ExperienceForm = () => {
  const { resumeData, addSectionItem, removeSectionItem, updateSectionItem } =
    useResumeStore();

  const experienceList = resumeData.experience;

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
        <button
          onClick={() => addSectionItem("experience")}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
        >
          <Plus size={16} /> Add Job
        </button>
      </div>

      {experienceList.map((exp) => (
        <div
          key={exp.id}
          className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative group animate-in slide-in-from-bottom-2"
        >
          <button
            onClick={() => removeSectionItem("experience", exp.id)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>

          <div className="grid grid-cols-1 gap-3">
            <input
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) =>
                updateSectionItem(
                  "experience",
                  exp.id,
                  "company",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              placeholder="Position"
              value={exp.position}
              onChange={(e) =>
                updateSectionItem(
                  "experience",
                  exp.id,
                  "position",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) =>
                  updateSectionItem(
                    "experience",
                    exp.id,
                    "startDate",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) =>
                  updateSectionItem(
                    "experience",
                    exp.id,
                    "endDate",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <input
              placeholder="Location"
              value={exp.location}
              onChange={(e) =>
                updateSectionItem(
                  "experience",
                  exp.id,
                  "location",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              placeholder="Description (New line for new bullet point)"
              rows={4}
              value={exp.description}
              onChange={(e) =>
                updateSectionItem(
                  "experience",
                  exp.id,
                  "description",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none resize-y"
            />
          </div>
        </div>
      ))}
    </section>
  );
};
