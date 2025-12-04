"use client";

import { useResumeStore } from "@/stores/useResumeStore";
import { Plus, Trash2 } from "lucide-react";

export const ProjectsForm = () => {
  const { resumeData, addSectionItem, removeSectionItem, updateSectionItem } =
    useResumeStore();

  const projectsList = resumeData.projects;

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
        <button
          onClick={() => addSectionItem("projects")}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
        >
          <Plus size={16} /> Add Project
        </button>
      </div>

      {projectsList.map((proj) => (
        <div
          key={proj.id}
          className="p-4 bg-gray-50 rounded-lg border border-gray-200 relative group animate-in slide-in-from-bottom-2"
        >
          <button
            onClick={() => removeSectionItem("projects", proj.id)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>

          <div className="grid grid-cols-1 gap-3">
            <input
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) =>
                updateSectionItem("projects", proj.id, "name", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              placeholder="Technologies Used"
              value={proj.technologies}
              onChange={(e) =>
                updateSectionItem(
                  "projects",
                  proj.id,
                  "technologies",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              placeholder="Link (Optional)"
              value={proj.link || ""}
              onChange={(e) =>
                updateSectionItem("projects", proj.id, "link", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Description"
              rows={3}
              value={proj.description}
              onChange={(e) =>
                updateSectionItem(
                  "projects",
                  proj.id,
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
