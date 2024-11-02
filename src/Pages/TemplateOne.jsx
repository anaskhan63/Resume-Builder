import React, { useContext, useState } from "react";
import Button from "../Components/Button";
import ExpANDSkillSec from "../Components/ExpANDSkillSec";
import PersonalSec from "../Components/PersonalSec";
import ProjectSec from "../Components/ProjectSec";
import EducationSec from "../Components/EducationSec";
import { ResumeDataContext } from "../Context/ResumeDataContext";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { GenerateDataByGemeniContext } from "../Context/GenerateDataByGemeni";
// import { GenerateDataByGemeniContext } from "../Context/GenerateDataByGemeniContext";
const TemplateOne = () => {
  const [
    CheckDataInputViewORGeneratedResumeView,
    setCheckDataInputViewORGeneratedResumeView,
  ] = useState(false);
  // Gemeni resp func getting
  const { GetExpPromptData, GemeniUserExperienceResponse } = useContext(
    GenerateDataByGemeniContext
  );
  console.log("GemeniUserExperienceResponse", GemeniUserExperienceResponse);
  
  // context data
  const {
    PersonalSecStatus,
    UserExperienceStatus,
    UserSkillsTagsStatus,
    userProjectStatus,
    userEducationStatus,
  } = useContext(ResumeDataContext);

  // Hardcoded array of skills
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "Git",
    "Redux",
    "TailwindCSS",
    "TypeScript",
  ];

  const skillsPerColumn = 5; // Limit of skills per column
  const columns = [];

  // Split skills array into chunks
  for (let i = 0; i < skills.length; i += skillsPerColumn) {
    columns.push(skills.slice(i, i + skillsPerColumn));
  }

  return (
    <main className=" p-5 bg-[#F9FAFB]">
      {/* taking data for resume */}
      {!CheckDataInputViewORGeneratedResumeView ? (
        <div>
          <section className=" p-4 rounded-lg flex flex-col gap-9">
            <PersonalSec />
            <ExpANDSkillSec />
            <ProjectSec />
            <EducationSec />
          </section>
          <div className="flex justify-center p-5">
            <Button onClick={GetExpPromptData} Title={"Generate Resume"} />
          </div>
        </div>
      ) : (
        <div>
          <section id="resume" className="p-9 rounded-lg bg-white shadow-md">
            {/* Name */}
            <h2 className="UserName text-3xl font-semibold">
              Muhammad Anas Khan
            </h2>
            {/* Position */}
            <h5 className="UserPosition text-lg mt-1 font-medium">
              Front End Developer
            </h5>
            {/* Social Links */}
            <div className="social mt-2 flex items-center gap-2 justify-between ">
              <div className="flex items-center gap-1 justify-start">
                <MdEmail />
                <a href="mailto:muhammadanask409@gmail.com">
                  muhammadanask409@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1 justify-start">
                <BsGithub />
                <a href="mailto:muhammadanask409@gmail.com">@anaskhan63</a>
              </div>
              <div className="flex items-center gap-1 justify-start">
                <BsLinkedin />
                <a href="mailto:muhammadanask409@gmail.com">
                  muhammadanask409@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1 justify-start">
                <BiPhone />
                <a href="mailto:muhammadanask409@gmail.com">03112233445</a>
              </div>
            </div>
            {/* Objective */}
            <div className="Objective mt-5">
              <h2 className="text-3xl font-medium ">Objective</h2>
              <p className="mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                in dolor accusamus reiciendis et nam, tempora aperiam corrupti
                libero officiis cum commodi Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Necessitatibus non dolore quod
                tenetur ducimus nobis cum at voluptate a reprehenderit.
                doloremque laborum aspernatur nostrum maxime sed consectetur
                pariatur totam ea est harum. Fugit!
              </p>
            </div>
            {/* Education */}
            <div className="Education mt-3">
              <h2 className="text-3xl font-medium ">Education</h2>
              <div className="flex items-end gap-1 mt-2">
                <h3 className="font-medium text-lg">KASBIT</h3>
                <h3 className="italic"> (2023-2027)</h3>
              </div>
              <p className="font-medium">
                Bachelor of Science in Computer Science (BSCS)
              </p>
            </div>
            {/* Experience */}
            <div className="Experience  mt-3">
              <h2 className="text-3xl font-medium ">Experience</h2>
              <div className="pl-4">
                <h2 className="text-2xl font-medium mt-2 ">Folio3</h2>
                <p className="font-medium text-lg ">
                  Software Engineer{" "}
                  <span className="italic font-normal">Sep-2022 | Present</span>
                </p>
                <ul className="list-disc pl-9 mt-1">
                  <li>
                    Developed multiple web applications, including e-commerce
                    platforms and booking systems for salons.
                  </li>
                  <li>
                    Delivered tailored digital solutions using modern frameworks
                    to meet client requirements
                  </li>
                  <li>
                    Delivered tailored digital solutions using modern frameworks
                    to meet client requirements
                  </li>
                </ul>
              </div>
            </div>
            <div className="pl-4">
              <h2 className="text-2xl font-medium mt-2 ">Folio3</h2>
              <p className="font-medium text-lg ">
                Software Engineer{" "}
                <span className="italic font-normal">Sep-2022 | Present</span>
              </p>
              <ul className="list-disc pl-9 mt-1">
                <li>
                  Developed multiple web applications, including e-commerce
                  platforms and booking systems for salons.
                </li>
                <li>
                  Delivered tailored digital solutions using modern frameworks
                  to meet client requirements
                </li>
                <li>
                  Delivered tailored digital solutions using modern frameworks
                  to meet client requirements
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div className="Projects mt-4">
              <h2 className="text-3xl font-medium ">Projects</h2>
              <ul className="list-decimal pl-9 mt-2">
                <li className="font-medium text-lg">
                  AI Resume Builder{" "}
                  <a
                    className="text-blue-600 font-normal"
                    target="_blank"
                    href="https://resume-builder-anas.vercel.app/"
                  >
                    Visit Project
                  </a>
                  <ul className="list-disc pl-9 font-normal">
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officiis, dolore?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officiis, dolore?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officiis, dolore?
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Skills */}
            <div className="mt-4">
              <h2 className="text-3xl font-medium ">Skills</h2>
              <div className="flex gap-8 mt-3 ">
                {columns.map((column, index) => (
                  <ul key={index} className="pl-9 list-disc">
                    {column.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </section>

          <div className="flex justify-center p-5">
            <Button Title={"Download Resume"} />
            {/* <Button Title={"Download Resume"} onClick={downloadResume} /> */}
          </div>
        </div>
      )}
    </main>
  );
};

export default TemplateOne;
