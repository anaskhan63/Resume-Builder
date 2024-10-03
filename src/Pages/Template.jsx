import React, { useContext } from 'react'
import ResumeTemplate1 from "../assets/ResumeTemplate1.png"
import ResumeTemplate2 from "../assets/ResumeTemplate2.png"
import ResumeTemplate3 from "../assets/ResumeTemplate3.png"
import Button from "../Components/Button"
import { TemplateContext } from '../Context/TemplateContext'

const Template = () => {

  const { setSelectedTemplate } = useContext(TemplateContext); // Access the context

  const handleSelectTemplate = (currTemp) => {
    setSelectedTemplate(currTemp)
  }

  return (
    <main className='p-9'>
      <h1 className="text-center mt-4 font-outfit text-3xl font-medium">
        Choose Template For Your Resume!
      </h1>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-gray-100 rounded-lg border mt-9'>
        <div className='bg-white border flex flex-col items-center p-4 rounded-md '>
          <img src={ResumeTemplate1} className=' w-64 border transition ease-linear  hover:scale-105' alt="" />
          <div className='mt-4'>
            <Button HrefLink={"/create-resume"} Title={"Select"} onClick={() => handleSelectTemplate('template1')}/>
          </div>
        </div>

        <div className='bg-white border flex flex-col items-center p-4 rounded-md '>
          <img src={ResumeTemplate2} className=' w-72 border transition ease-linear  hover:scale-105' alt="" />
          <div className='mt-4'>
            <Button HrefLink={"/create-resume"} Title={"Select"} onClick={() => handleSelectTemplate('template2')}/>
          </div>
        </div>


        <div className='bg-white border flex flex-col items-center p-4 rounded-md '>
          <img src={ResumeTemplate3} className=' w-64 border transition ease-linear  hover:scale-105' alt="" />
          <div className='mt-4'>
            <Button HrefLink={"/create-resume"} Title={"Select"}  onClick={() => handleSelectTemplate('template3')}/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Template