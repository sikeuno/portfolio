import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css1.png"
import javascript from "../assets/javascript.png"
import mongodb from "../assets/mongodb.png"
import github from "../assets/github.png"
import react from "../assets/react.jpeg"
import python from "../assets/python.png"
import sql from "../assets/sql.jpg"

const Experience = () => {
  const techs=[
    {
      id:1,
      src:html,
      title:"HTML",
      style:" shadow-orange-500"
    },
    {
      id:2,
      src:css,
      title:"CSS",
      style:" shadow-blue-500"
    },  {
      id:3,
      src:javascript,
      title:"JavaSrcipt",
      style:" shadow-yellow-500"
    },  {
      id:4,
      src:python,
      title:"Python",
      style:" shadow-blue-500"
    },  {
      id:5,
      src:mongodb,
      title:"mongoDb",
      style:" shadow-green-500"
    },  {
      id:6,
      src:react,
      title:"React JS",
      style:" shadow-blue-500"
    },
    {
      id:7,
      src:github,
      title:"Github",
      style:" shadow-white"
    },
    {
      id:8,
      src:sql,
      title:"SQL",
      style:" shadow-red-500"
    },
  ]
  return (
    <div name="experience" className='bg-black w-full min-h-screen pb-16 text-white'>
        <div className='max-w-screen-lg flex flex-col justify-center p-4 mx-auto w-full h-full text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'> These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
              {
                techs.map(({id,src,title,style})=>(
                  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src} alt="" className='w-20 mx-auto'/>
                  <p className=' mt-4'>{title}</p>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Experience