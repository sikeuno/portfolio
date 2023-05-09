import React from 'react'

const Conatct = () => {
  return (
    <div name="contact" className='w-full  bg-black p-4 text-white'>
        

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Contact</p>
                    <p className=' py-6'> Submit the form to get in touch with me</p>
                </div>
                <div className=' flex justify-center items-center'>
                    <form action='https://getform.io/f/d9296af4-5f56-45c1-b3ee-9bca109a4ece' method='POST' className=' flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white  focus:outline-none' required/>
                        <input type="email" name='email' placeholder='Enter your email' className='p-2  my-4 bg-transparent border-2 rounded-md text-white  focus:outline-none' required/>
                        <textarea name='message' rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-400 to-blue-800 px-4 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>

    </div>
  )
}

export default Conatct