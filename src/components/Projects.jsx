import React from "react";
import salesManagement from "../assets/Projimages/salesManagement.png";
import studentTeacherPortal from "../assets/Projimages/studentTeacherPortal.png";
import gameCenter from '../assets/Projimages/gameCenter.png'
import loginRegister from "../assets/Projimages/loginRegister.png"
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
          code:'https://github.com/kvkvarma/Game-Center'
        },
        {
          id: 5,
          src: loginRegister,
          href:'https://www.youtube.com/watch?v=mLzFl9E4pzM',
          code:'https://github.com/kvkvarma/Login-Register'
        },
        {
          id: 6,
          src: restaurentWebsite,
          href:'https://vijays-restaurant.netlify.app/',
          code:'https://github.com/kvkvarma/Restaurent-Website'
        },
      ];
      return (
          <div name="projects" className= " bg-mySignatureColor text-white w-full pt-14 sm:pt-0 sm:h-screen">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-3xl inline border-b-2 text-yellow-500 border-gray-400 ">
                Projects
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                projects.map(({id,src,href,code})=>(
              <div key={id}  className="shadow-md shadow-gray-600 rounded-lg">  
                <img
                  className="rounded-md duration-200 sm:hover:scale-105 "
                  src={src}
                  alt=""
                />
                <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer" className="bg-purple-700 w-2/3 m-2 px-6 py-1 duration-200 sm:hover:scale-105 sm:hover:bg-purple-700 rounded-md inline-block">
                <button className="w-full h-full flex justify-center items-center">
                Demo
              </button>
            </a>
                  <a  href={code} target="_blank" rel="noreferrer" className="bg-purple-700 w-2/3 m-2 px-6 py-1 duration-200 s,sm:hover:scale-105 sm:hover:bg-purple-700 rounded-md inline-block">
                <button className=" w-full h-full flex justify-center items-center">
                Code
              </button>
            </a>

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