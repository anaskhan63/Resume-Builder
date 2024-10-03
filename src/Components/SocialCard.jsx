import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'
import { BsGithub } from 'react-icons/bs'
import { TbWorldCode } from 'react-icons/tb'
import { IoIosMail } from 'react-icons/io'

const SocialCard = () => {
  return (
    <section className='flex gap-3 items-center'>
      <Link to={"https://www.linkedin.com/in/muhammad-anas-khan-2699a32a1/"} target='_blank'>
        <Tooltip title="Linkedin">
          <div className="bg-black flex items-center justify-center rounded-full text-center p-2">
            <AiFillLinkedin />
          </div>
        </Tooltip>
      </Link>

      <Link to={"https://github.com/anaskhan63"} target='_blank'>
        <Tooltip title="Github">
          <div className="bg-black flex items-center justify-center rounded-full text-center p-2">
            <BsGithub />
          </div>
        </Tooltip>
      </Link>

      <Link to={"https://anas-khan-portfolio.vercel.app/"} target='_blank'>
        <Tooltip title="Portfolio">
          <div className="bg-black flex items-center justify-center rounded-full text-center p-2">
            <TbWorldCode />
          </div>
        </Tooltip>
      </Link>
      <Link to={"mailto:muhammadanask409@gmail.com"} target='_blank'>
        <Tooltip title="email">
          <div className="bg-black flex items-center justify-center rounded-full text-center p-2">
            <IoIosMail />
          </div>
        </Tooltip>
      </Link>

    </section>
  )
}

export default SocialCard