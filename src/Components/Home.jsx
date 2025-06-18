import React from 'react';
import hero1 from '../assets/hero.jpg';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="pt-28 pb-20 bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-4xl font-bold sm:text-7xl text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
           I'm Indhuja, a dedicated Full Stack Developer with a passion for ML (Machine Learning), Data Science, and Blockchain & Crypto. I firmly believe in the power of time and work with unwavering enthusiasm towards my goals. Let's start scrolling to learn more about me!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-60}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowForwardIos className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={hero1}
            alt="my profile"
            className="rounded-2xl mx-auto w-full"
            style={{ maxWidth: '100%', height: 'auto' }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
