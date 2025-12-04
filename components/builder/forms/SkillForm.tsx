"use client";

import { useResumeStore } from "@/stores/useResumeStore";
import { Plus, Trash2 } from "lucide-react";

export const SkillsForm = () => {
  const { resumeData, addSectionItem, removeSectionItem, updateSectionItem } =
    useResumeStore();
  const skillsList = resumeData.skills;

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
        <button
          onClick={() => addSectionItem("skills")}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
        >
          <Plus size={16} /> Add Category
        </button>
      </div>

      {skillsList.map((skill) => (
        <div
          key={skill.id}
          className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative group animate-in slide-in-from-bottom-2"
        >
          <button
            onClick={() => removeSectionItem("skills", skill.id)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>

          <div className="grid grid-cols-1 gap-3">
            <input
              placeholder="Category Name (e.g. Languages)"
              value={skill.name}
              onChange={(e) =>
                updateSectionItem("skills", skill.id, "name", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              placeholder="Skills (Comma separated)"
              value={skill.skills}
              onChange={(e) =>
                updateSectionItem("skills", skill.id, "skills", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
      ))}
    </section>
  );
};
