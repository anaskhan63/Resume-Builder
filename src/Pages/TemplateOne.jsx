import React, { useState } from "react";
import Button from "../Components/Button";
import ExpANDSkillSec from "../Components/ExpANDSkillSec";
import PersonalSec from "../Components/PersonalSec";
import ProjectSec from "../Components/ProjectSec";
import EducationSec from "../Components/EducationSec";
const TemplateOne = () => {
  return (
    <main className=" p-5 bg-[#F9FAFB]">
      {/* taking data for resume */}
      <section className=" p-4 rounded-lg flex flex-col gap-9">
        <PersonalSec />
        <ExpANDSkillSec />
        <ProjectSec />
        <EducationSec/>
      </section>
      <div className="flex justify-center p-5">
        <Button Title={"Generate Resume"} />
      </div>
    </main>
  );
};

export default TemplateOne;
