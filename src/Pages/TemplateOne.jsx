import React, { useContext, useEffect, useState } from "react";
import Button from "../Components/Button";
import ExpANDSkillSec from "../Components/ExpANDSkillSec";
import PersonalSec from "../Components/PersonalSec";
import ProjectSec from "../Components/ProjectSec";
import EducationSec from "../Components/EducationSec";
import { ResumeDataContext } from "../Context/ResumeDataContext";
import { message } from "antd";
const TemplateOne = () => {
  const { userPersonalResumeData, userExperienceContext, userSkillsTag } = useContext(ResumeDataContext);
  // status check for personal sec
  const [PersonalSecStatus, setPersonalSecStatus] = useState(false);
  const [UserExperienceStatus, setUserExperienceStatus] = useState(false);
  const [UserSkillsTags, setUserSkillsTags] = useState(false);
  
  const lengthCheck = Object.keys(userPersonalResumeData).length;
  useEffect(() => {
    if (lengthCheck === 0) {
      message.info("Data length is 0");
    } else {
      message.info(`Data length: ${lengthCheck}`);
      setPersonalSecStatus(true);
    }
  }, [userPersonalResumeData, lengthCheck]);
  console.log("ss", PersonalSecStatus);

  return (
    <main className=" p-5 bg-[#F9FAFB]">
      {/* taking data for resume */}
      <section className=" p-4 rounded-lg flex flex-col gap-9">
        <PersonalSec />
        <ExpANDSkillSec />
        <ProjectSec />
        <EducationSec />
      </section>
      <div className="flex justify-center p-5">
        <Button Title={"Generate Resume"} />
      </div>
    </main>
  );
};

export default TemplateOne;
