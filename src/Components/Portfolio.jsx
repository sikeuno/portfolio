import React from 'react';
import proj1 from "../assets/a.png"
import proj2 from "../assets/b.png"
import proj3 from "../assets/c.png"
import proj4 from "../assets/d.png"
import proj5 from "../assets/e.png"
const Portfolio = () => {
  const images = [
    {
      id: 1,
      src: proj1,
      code:"https://github.com/sikeuno/sanjai",
      demo:""
    },
    {
      id: 2,
      src: proj2,
      code:"https://github.com/sikeuno/Bankist",
      demo:""
    },
    {
      id: 3,
      src: proj3,
      code:"https://github.com/sikeuno/clgproject",
      demo:""
    },
    {
      id: 4,
      src: proj4,
      code:"https://github.com/sikeuno/guess_the_game"
    },
    {
      id: 5,
      src: proj5,
      code:"https://github.com/sikeuno/piggame"
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
                <a href={demo} target="_blank" rel="noreferrer" className="w-full px-4 py-2 m-2 duration-200 hover:scale-105">
                  demo
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="w-full px-4 py-2 m-2 duration-200 hover:scale-105">
                  code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
