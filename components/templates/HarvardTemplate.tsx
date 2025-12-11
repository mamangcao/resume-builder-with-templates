import React from "react";
import { ResumeData } from "@/types/resume";

interface Props {
  data: ResumeData;
}

export const HarvardTemplate: React.FC<Props> = ({ data }) => {
  const { personalInfo, education, experience, projects, skills } = data;

  return (
    <div className="resume-content font-serif text-black leading-tight text-sm p-8 bg-white min-h-[297mm] print:min-h-0 print:h-auto print:overflow-visible">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold uppercase tracking-wide mb-1">
          {personalInfo.fullName}
        </h1>
        <div className="text-sm">
          {[
            personalInfo.location,
            personalInfo.phone,
            personalInfo.email,
            personalInfo.linkedin,
            personalInfo.github,
            personalInfo.website,
          ]
            .filter(Boolean)
            .join(" | ")}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black mb-2">
            Education
          </h2>
          {[...education].reverse().map((edu) => (
            <div key={edu.id} className="mb-2 resume-item">
              <div className="flex justify-between font-bold">
                <span>{edu.school}</span>
                <span>{edu.location}</span>
              </div>
              <div className="flex justify-between italic">
                <span>
                  {edu.degree} {edu.gpa ? `(GPA: ${edu.gpa})` : ""}
                </span>
                <span>
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Experience - REVERSED */}
      {experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black mb-2">
            Experience
          </h2>
          {[...experience].reverse().map((exp, index, arr) => {
            const prevExp = arr[index - 1];
            const isSameCompany = prevExp && prevExp.company === exp.company;

            return (
              <div key={exp.id} className="mb-3 resume-item">
                {!isSameCompany ? (
                  <div className="flex justify-between font-bold">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
                  </div>
                ) : (
                  <div className="h-0.5"></div>
                )}
                <div className="flex justify-between italic mb-1">
                  <span>
                    {exp.position}
                    {exp.employmentType && (
                      <span className="font-normal not-italic text-xs ml-1">
                        ({exp.employmentType})
                      </span>
                    )}
                  </span>
                  <span>
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-0.5">
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
      )}

      {/* Projects - REVERSED */}
      {projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black mb-2">
            Projects
          </h2>
          {[...projects].reverse().map((proj) => (
            <div key={proj.id} className="mb-2 resume-item">
              <div className="flex justify-between">
                <span className="font-bold">
                  {proj.name}
                  <span className="font-normal italic ml-1">
                    ({proj.technologies})
                  </span>
                </span>
                {proj.link && <span className="italic">{proj.link}</span>}
              </div>
              <div>
                {proj.description.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black mb-2">
            Skills & Interests
          </h2>
          <ul className="list-none space-y-1">
            {skills.map((skill) => (
              <li key={skill.id}>
                <span className="font-bold resume-item">{skill.name}: </span>
                <span>{skill.skills}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
