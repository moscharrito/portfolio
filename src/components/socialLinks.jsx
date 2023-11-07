import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const socialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/moshood-salaudeen/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Github <AiFillGithub size={30} />
        </>
      ),
      href: 'https://github.com/moscharrito',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto: moscharito@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/Moshood..Resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map (({id, child, href, style, download}) => (
          <li key={id} className={'flex justify-between items-center w-40 h-14 px-4  ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}> 
            <a href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel="noreferrer"> 
              <>
                {child}
              </> 
            </a> 
          </li>
        ))}
          
      </ul>
    </div>
  )
}

export default socialLinks