import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col jusdtify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 borgray50'>About</p>
            </div>
            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui, alias quidem reiciendis libero iusto laudantium, vitae, unde quisquam sapiente fuga minima adipisci animi explicabo laboriosam autem quam? Provident assumenda totam dolor in mollitia natus magni odit! Voluptatum eum nam eveniet porro ea odit, enim odio iste nisi, incidunt labore.
            </p>
            <br/>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio provident at, saepe veritatis fugit sit praesentium natus veniam in iste doloremque est reprehenderit neque architecto rem consequatur, nemo atque asperiores dolores culpa animi. Voluptatibus eius dicta veritatis asperiores maiores placeat? Vitae temporibus tempore eius, voluptatum doloremque tenetur cumque quasi.</p>
        </div>
    </div>
  )
}

export default About