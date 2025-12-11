import React from "react";
import { ResumeData } from "@/types/resume";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

interface Props {
  data: ResumeData;
  themeColor: string;
}

export const ModernTemplate: React.FC<Props> = ({ data, themeColor }) => {
  const { personalInfo, education, experience, projects, skills } = data;

  // Helper to map theme names to Tailwind classes
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "blue":
        return {
          title: "text-blue-700",
          subtitle: "text-blue-600",
          border: "border-blue-100",
          icon: "text-blue-600",
          bg: "bg-blue-50",
        };
      case "purple":
        return {
          title: "text-purple-700",
          subtitle: "text-purple-600",
          border: "border-purple-100",
          icon: "text-purple-600",
          bg: "bg-purple-50",
        };
      case "rose":
        return {
          title: "text-rose-700",
          subtitle: "text-rose-600",
          border: "border-rose-100",
          icon: "text-rose-600",
          bg: "bg-rose-50",
        };
      case "slate":
        return {
          title: "text-slate-900",
          subtitle: "text-slate-600",
          border: "border-slate-200",
          icon: "text-slate-700",
          bg: "bg-slate-50",
        };
      case "emerald":
      default:
        return {
          title: "text-emerald-700",
          subtitle: "text-emerald-600",
          border: "border-emerald-100",
          icon: "text-emerald-600",
          bg: "bg-slate-50",
        };
    }
  };

  const colors = getThemeClasses(themeColor);

  return (
    <div className="font-sans text-slate-800 bg-white relative min-h-[297mm] resume-content print:min-h-0 print:h-auto print:overflow-visible">
      <div
        className={`${colors.bg} border-b ${colors.border} p-8 pb-6 resume-item`}
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
          {personalInfo.fullName}
        </h1>
        {personalInfo.summary && (
          <p className="text-slate-600 leading-relaxed max-w-2xl text-sm mb-4">
            {personalInfo.summary}
          </p>
        )}

        <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium mt-3">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail size={12} className={colors.icon} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone size={12} className={colors.icon} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin size={12} className={colors.icon} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={12} className={colors.icon} />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center gap-1">
              <Github size={12} className={colors.icon} />
              <span>{personalInfo.github}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1">
              <Globe size={12} className={colors.icon} />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8 pt-6 grid grid-cols-1 gap-6 print:block print:p-6">
        {/* Experience Section */}
        {experience.length > 0 && (
          <section>
            <h2
              className={`text-sm font-bold uppercase tracking-wider ${colors.title} mb-3 border-b ${colors.border} pb-1`}
            >
              Relevant Experience
            </h2>
            <div className="space-y-5">
              {[...experience].reverse().map((exp, index, arr) => {
                const prevExp = arr[index - 1];
                const isSameCompany =
                  prevExp && prevExp.company === exp.company;

                return (
                  <div
                    key={exp.id}
                    className={`${isSameCompany ? "-mt-3 resume-item" : ""}`}
                  >
                    {!isSameCompany && (
                      <div
                        className={`text-sm font-medium ${colors.subtitle} mb-2 mt-4`}
                      >
                        {exp.company}, {exp.location}
                      </div>
                    )}
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-bold text-slate-900 ${
                            isSameCompany ? "pl-0" : ""
                          }`}
                        >
                          {exp.position}
                        </h3>
                        {exp.employmentType && (
                          <span className="text-xs text-slate-500 font-normal border border-slate-200 px-1.5 py-0.5 rounded">
                            {exp.employmentType}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                    <ul className="text-sm text-slate-600 list-disc list-outside ml-4 space-y-1">
                      {exp.description
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, idx) => (
                          <li key={idx} className="pl-1">
                            {line}
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            {/* Projects */}
            {projects.length > 0 && (
              <section>
                <h2
                  className={`text-sm font-bold uppercase tracking-wider ${colors.title} mb-3 border-b ${colors.border} pb-1`}
                >
                  Projects
                </h2>
                <div className="space-y-3">
                  {[...projects].reverse().map((proj) => (
                    <div key={proj.id} className="resume-item">
                      {/* ... Content ... */}
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-slate-900 text-sm">
                          {proj.name}
                        </h3>
                        {proj.link && (
                          <span className={`text-xs ${colors.subtitle}`}>
                            {proj.link}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mb-1 font-mono">
                        {proj.technologies}
                      </div>
                      <p className="text-sm text-slate-600">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="col-span-1 space-y-6">
            {/* Education */}
            {education.length > 0 && (
              <section>
                <h2
                  className={`text-sm font-bold uppercase tracking-wider ${colors.title} mb-3 border-b ${colors.border} pb-1`}
                >
                  Education
                </h2>
                <div className="space-y-3">
                  {[...education].reverse().map((edu) => (
                    <div key={edu.id} className="resume-item">
                      <div className="font-bold text-slate-900 text-sm">
                        {edu.school}
                      </div>
                      <div className="text-xs text-slate-500 mb-1">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-slate-400">
                        {edu.startDate} – {edu.endDate}
                      </div>
                      {edu.gpa && (
                        <div className="text-xs text-slate-400 mt-0.5">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <section>
                <h2
                  className={`text-sm font-bold uppercase tracking-wider ${colors.title} mb-3 border-b ${colors.border} pb-1`}
                >
                  Skills
                </h2>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.id} className="resume-item">
                      <div className="font-bold text-slate-900 text-xs mb-1">
                        {skill.name}
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed">
                        {skill.skills.split(",").join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
