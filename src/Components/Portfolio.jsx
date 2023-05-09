import React from 'react';
import proj1 from '../assets/1.jpg';
import proj2 from '../assets/2.jpg';
import proj3 from '../assets/3.jpeg';
import proj4 from '../assets/4.jpeg';
import proj5 from '../assets/6.jpeg';

const Portfolio = () => {
  const images = [
    {
      id: 1,
      src: proj1,
    },
    {
      id: 2,
      src: proj2,
    },
    {
      id: 3,
      src: proj3,
    },
    {
      id: 4,
      src: proj4,
    },
    {
      id: 5,
      src: proj5,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-black w-full h-full text-white pb-16 md:h-screen"
      style={{ height: '100%' }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Porfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {images.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover"
              ></img>

              <div className="flex justify-center ite">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
