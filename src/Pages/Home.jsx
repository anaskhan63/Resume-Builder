import React, { useEffect } from 'react'
import Button from '../Components/Button'
import Resumeillustration from "../assets/Resumeillustration.gif"
import ResumeCreationSteps from '../Components/Steps'
import ResumeStepsIllustration from "../assets/ResumeStepsIllustration.gif"
const Home = () => {


  return (
    <>
      <main className='bg-[#e6f9ff] grid grid-cols-1 md:grid-cols-2 items-center p-9 gap-3'>
        <section className='p-12 flex flex-col gap-5'>
          <h1 className='font-poppins  text-4xl font-medium'>
            Effortlessly create  <span className='font-bold gradient-text text-5xl'>professional resume.</span>
          </h1>
          <p>
            Easily craft a standout professional resume with this powerful and free resume builder, designed to help you create polished and tailored resumes effortlessly.
          </p>
          <Button HrefLink={"/templates"} Title={"Create Resume ->"} />
          <p className="pl-2 text-gray-400">
            no Signup Required!
          </p>
        </section>
        <section className='block mx-auto '>
          <img src={Resumeillustration} alt="" />
        </section>
      </main>
      <section className='grid grid-cols-1 md:grid-cols-2 items-center p-9 gap-3'>
        <ResumeCreationSteps />
        <div className="p-4 block mx-auto">
          <img src={ResumeStepsIllustration} alt="" />
        </div>
      </section>
    </>


  )
}

export default Home