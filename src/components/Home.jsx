import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import developer from "../assets/dev.png";  
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-mySignatureColor text-white mt-16">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl text-white md:text-6xl mt-10 sm:text-4xl sm:mt-20 md:mt-0 font-roboto">
            I'm an Undergraduate!!
          </h2>
          <p className="py-4 text-gray-500 max-w-md mx-auto md:mx-0">
            Eager to join a software company to enhance my skills and contribute to its success. Committed to continuous learning and innovation, I aim to drive progress and efficiency, ensuring personal growth and benefiting the company through dedicated work.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Link to="projects" smooth duration={500} className="hover:scale-105 duration-200 group mr-0 md:mr-2 cursor-pointer bg-gradient-to-r from-cyan-700 to-blue-700 items-center justify-center text-white py-3 px-6 rounded-md flex w-fit my-2">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
            <button className="group mr-0 md:mr-2 hover:scale-105 duration-200 cursor-pointer bg-gradient-to-r from-green-500 to-green-800 items-center justify-center text-white py-3 px-6 rounded-md flex w-fit my-2">
              <a href="/Vijay_Resume.pdf" download={true}>
                <span className="flex justify-center items-center">Resume <BsFillPersonLinesFill className="ml-2" size={23} /></span>
              </a>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center mt-2  md:mt-0">
          <img className="mx-auto rounded-2xl w-2/3 md:w-full sm:w-2/3 mt-[-10]" src={developer} alt="my profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
