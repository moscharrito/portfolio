import React from 'react'
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import MongoDB from "../assets/mongodb.png";
import Python from "../assets/python.png";



const Experience = () => {

  const techs = [
    {
      id: 1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: Css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: Javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: ReactImage,
      title: 'REACT',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: Tailwind,
      title: 'TAILWIND',
      style: 'shadow-green-400'
    },
    {
      id: 6,
      src: Node,
      title: 'NODE',
      style: 'shadow-green-400'
    },
    {
      id: 7,
      src: Github,
      title: 'GITHUB',
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: MongoDB,
      title: 'MONGODB',
      style: 'shadow-green-400'
    },
    {
      id: 9,
      src: Python,
      title: 'PYTHON',
      style: 'shadow-yellow-500'
    },
  ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
          <p className='py-6'>These are the Technologies I have worked in in the past</p>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            techs.map (({id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="html" className='w-20 mx-auto' />
                <p className='mt-4 '>{title}</p>
              </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Experience