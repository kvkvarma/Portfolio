import React from "react";
import salesManagement from "../assets/Projimages/salesManagement.png";
import studentTeacherPortal from "../assets/Projimages/studentTeacherPortal.png";
import gameCenter from '../assets/Projimages/gameCenter.png'
import loginRegister from "../assets/Projimages/loginRegister.png"
import rps from "../assets/Projimages/rpx.png"
import restaurentWebsite from "../assets/Projimages/restaurentWebsite.png"
const Projects = () => {
    const projects = [
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
        {
          id: 5,
          src: loginRegister,
          href:'https://game-centerr.netlify.app/',
          code:'https://github.com/kvkvarma/Login-Register'
        },
        {
          id: 4,
          src: rps,
          href:'https://game-centerr.netlify.app/',
          code:'https://github.com/kvkvarma/Rock-Scissor-Paper-JS-React'
        },
        {
          id: 6,
          src: restaurentWebsite,
          href:'https://game-centerr.netlify.app/',
          code:'https://github.com/kvkvarma/Restaurent-Website'
        },
      ];
      return (
          <div name="projects" className= " bg-mySignatureColor text-white w-full pt-20 sm:pt-0 sm:h-screen">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-3xl font-signature inline border-b-2 text-yellow-500 border-gray-400 ">
                Projects
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                projects.map(({id,src,href,code})=>(
              <div key={id}  className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  className="rounded-md duration-200 hover:scale-105 "
                  src={src}
                  alt=""
                />
                <div className="flex items-center justify-center">
                  <button className="w-2/3 m-2 px-6 py-1 duration-200 hover:scale-105 105 hover:bg-purple-700 rounded-md">
                    <a 
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    >Demo</a>
                  </button>
                  <button className="w-2/3 m-2 px-6 py-1 duration-200 hover:scale-105 hover:bg-purple-700 rounded-md">
                    <a href={code} target="_blank" rel="noreferrer"> Code</a>
                  </button>
                </div>
              </div>
                ))
            }
            </div>
          </div>
        </div>
      );
}

export default Projects