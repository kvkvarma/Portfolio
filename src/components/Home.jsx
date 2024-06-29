import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import developer from "../assets/dev.png";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-mySignatureColor text-white"

    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        <div className="flex flex-col justify-center h-full" >
          <h2 className="text-3xl text-white sm:text-7xl ">I'm an Undergraduate!!</h2>
          <p className="py-4 text-gray-500 max-w-md font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, adipisci magnam ullam dolores, labore itaque similique
            qui corporis, laboriosam sint error! Maiores consequuntur sed quasi
            magnam dolor, similique inventore cupiditate!
          </p>
          <div className="flex">
          <button className="group mr-2 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-center  py-3 px-6 rounded-md flex w-fit">
            Portfolio
            <span className="group-hover:rotate-90 duration-200" >
              <MdKeyboardArrowRight size={25} />
            </span>
          </button>
          <button className="group cursor-pointer bg-gradient-to-r from-green-500 via-green-500 to-green-700 items-center justify-center  py-3 px-6 rounded-md flex w-fit">
            <a href="/Vijay_Resume.pdf" download={true}><span className="flex justify-center items-center">Resume <BsFillPersonLinesFill className="ml-2" size={23}/></span></a>
          </button>
        </div>
        </div>

        <div >
          <img className="mx-auto mt-[-10] w-2/3 md:w-full" src={developer} alt="my profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
