import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { FaGithub,FaLinkedin,FaInstagram } from 'react-icons/fa'
import {AiOutlineDownload} from "react-icons/ai"
import {Link} from "react-scroll"
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className='text-5xl font-signature ml-2'>Waris</h1>
        </div>
       
        <ul className='hidden md:flex'>
        {links.map(({id,link})=>(
        <li 
        key={id} 
        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={1000} offset={-60}>{link}</Link></li>
        ))}
        </ul>
        <div
        onClick={()=>setNav(!nav)}
         className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav? <FaTimes size={30}/>:<FaBars size={30}/>}
         </div>
         {nav && 
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-black text-white'>
          {links.map(({id,link})=>(
         <li 
         key={id} 
         className=' px-4 py-6 cursor-pointer capitalize text-4xl'>
            <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500} offset={-60}>{link}</Link>
         </li>
         ))}
         <li className='text-3xl pt-5 '><a href='/logo192.png'  className=' flex gap-2' download={true} >Resume<AiOutlineDownload size={35}/></a></li>
         <li className='mt-20 flex gap-6 '><a href='https://www.linkedin.com/in/waris-ibrahim-58a914256' target="_blank" rel="noreferrer"><FaLinkedin size={30}/></a>
         <a href='http://github.com/sikeuno' target="_blank" rel="noreferrer"><FaGithub size={30}/></a>
         <a href='https://instagram.com/var_i.sh?igshid=YmMyMTA2M2Y=' target="_blank" rel="noreferrer"><FaInstagram size={30}/></a>
         </li>
          </ul>
          
         }
        
    </div>
  )
}

export default Navbar