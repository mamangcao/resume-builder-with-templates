import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ResumeData,
  TemplateType,
  Education,
  Experience,
  Project,
  SkillCategory,
} from "@/types/resume";
import { INITIAL_DATA, SAMPLE_DATA } from "@/data/initial-state";
import { generateId } from "@/lib/utils";

type SectionItem = Education | Experience | Project | SkillCategory;

interface ResumeStore {
  resumeData: ResumeData;
  selectedTemplate: TemplateType;
  themeColor: string;

  setTemplate: (template: TemplateType) => void;
  setThemeColor: (color: string) => void;

  updatePersonalInfo: (
    field: keyof ResumeData["personalInfo"],
    value: string
  ) => void;
  addSectionItem: (
    section: keyof Pick<
      ResumeData,
      "education" | "experience" | "projects" | "skills"
    >
  ) => void;
  removeSectionItem: (
    section: keyof Pick<
      ResumeData,
      "education" | "experience" | "projects" | "skills"
    >,
    id: string
  ) => void;
  updateSectionItem: (
    section: keyof Pick<
      ResumeData,
      "education" | "experience" | "projects" | "skills"
    >,
    id: string,
    field: string,
    value: string
  ) => void;

  loadDemoData: () => void;
  resetResume: () => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resumeData: INITIAL_DATA,
      selectedTemplate: "modern",
      themeColor: "emerald",
      setTemplate: (template) => set({ selectedTemplate: template }),
      setThemeColor: (color) => set({ themeColor: color }),

      updatePersonalInfo: (field, value) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            personalInfo: { ...state.resumeData.personalInfo, [field]: value },
          },
        })),
      addSectionItem: (section) =>
        set((state) => {
          let newItem: SectionItem;
          const id = generateId();
          if (section === "education")
            newItem = {
              id,
              school: "",
              degree: "",
              location: "",
              startDate: "",
              endDate: "",
            };
          else if (section === "experience")
            newItem = {
              id,
              company: "",
              position: "",
              location: "",
              startDate: "",
              endDate: "",
              employmentType: "",
              description: "",
            };
          else if (section === "projects")
            newItem = { id, name: "", technologies: "", description: "" };
          else newItem = { id, name: "", skills: "" };
          return {
            resumeData: {
              ...state.resumeData,
              [section]: [...state.resumeData[section], newItem],
            },
          };
        }),
      removeSectionItem: (section, id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            [section]: (state.resumeData[section] as SectionItem[]).filter(
              (item) => item.id !== id
            ),
          },
        })),
      updateSectionItem: (section, id, field, value) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            [section]: (state.resumeData[section] as SectionItem[]).map(
              (item) => (item.id === id ? { ...item, [field]: value } : item)
            ),
          },
        })),
      loadDemoData: () => set({ resumeData: SAMPLE_DATA }),
      resetResume: () => set({ resumeData: INITIAL_DATA }),
    }),
    { name: "resume-storage" }
  )
);
