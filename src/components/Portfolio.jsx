import React from "react";
import salesManagement from "../assets/Projimages/salesManagement.png";
import studentTeacherPortal from "../assets/Projimages/studentTeacherPortal.png";
import gameCenter from '../assets/Projimages/gameCenter.png'
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: salesManagement,
      href:'https://sales-administration.netlify.app/',
      code:'https://github.com/LikhitaSurla/Sales-Adminstration/tree/vijay'
    },
    {
      id: 2,
      src: studentTeacherPortal,
      href:'https://www.youtube.com/watch?v=t7R-_ssf8m8',
      code:'https://github.com/kvkvarma/Main_Project'
    },
    {
      id: 3,
      src: gameCenter,
      href:'https://game-centerr.netlify.app/',
      code:'https://github.com/kvkvarma/Main_Project'
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-mySignatureColor text-white w-full md:h-screen "
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-6 text-yellow-500">Checkout My Work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
            portfolios.map(({id,src,href,code})=>(
          <div key={id}  className="shadow-md shadow-gray-600 rounded-lg">
            <img
              className="rounded-md duration-200 hover:scale-105 w-full"
              src={src}
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 m-4 px-4 py-2 duration 200 hover:scale-105">
                <a 
                href={href}
                target="blank"
                >Demo</a>
              </button>
              <button className="w-1/2 m-4 px-4 py-2 duration 200 hover:scale-105">
                <a href={code} target="blank"> Code</a>
              </button>
            </div>
          </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
