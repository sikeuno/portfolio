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
      code:"",
      demo:"
    },
    {
      id: 2,
      src: proj2,
      code:"",
      demo:"
    },
    {
      id: 3,
      src: proj3,
      code:"",
      demo:"
    },
    {
      id: 4,
      src: proj4,
      code:""
    },
    {
      id: 5,
      src: proj5,
      code:""
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-black w-full min-h-screen text-white pb-16">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {images.map(({ id, src,code,demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover"
              />

              <div className="flex justify-center">
                <button className="w-full px-4 py-2 m-2 duration-200 hover:scale-105">
                  {demo}
                </button>
                <button className="w-full px-4 py-2 m-2 duration-200 hover:scale-105">
                  {code}
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
