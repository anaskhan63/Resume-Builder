import React from 'react'
import PersonalSec from '../Components/PersonalSec'
import ExpANDSkillSec from '../Components/ExpANDSkillSec'
import Button from '../Components/Button'
import ProjectSec from '../Components/ProjectSec'
import EducationSec from '../Components/EducationSec'

const TemplateThree = () => {
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
  )
}

export default TemplateThree