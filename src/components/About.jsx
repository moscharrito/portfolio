import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <div className='text-xl mt-20'>
                <p>
                    My experience encompasses the development of responsive layouts, seamless integration of APIs, and optimization of website performance for an unparalleled user experience. Through effective collaboration with cross-functional teams, I have consistently delivered exceptional projects of the highest quality, meeting deadlines and adhering to budget constraints.
                </p>
                <p className='text-xl '>
                Problem-solving is my forte, and I possess a profound understanding of software development methodologies, enabling me to create efficient and maintainable code. Furthermore, my exceptional communication and interpersonal skills allow me to thrive in collaborative environments, effectively translating business requirements into innovative technical solutions.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About