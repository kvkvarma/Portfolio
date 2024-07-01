import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-mySignatureColor text-white pt-16 pb-8">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-3xl font-signature inline border-b-2 border-gray-400 text-yellow-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/4e594292-18e2-42ad-8808-fb6f82a6d4c5" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" />
            <input type="email" name="email" placeholder="Enter your email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" />
            <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"></textarea>
            <button type="submit" className="text-white bg-gradient-to-r from-cyan-700 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
          </form>
        </div>
        {/* Conditionally render social links only on mobile screens */}
        <div className="flex justify-center mt-8 md:hidden"> {/* Hide on screens larger than mobile */}
          <a href="https://www.linkedin.com/in/kvkvarma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 mx-4">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/kvkvarma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 mx-4">
            <FaGithub size={30} />
          </a>
          <a href="mailto:vijayvarmakucharlapati@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 mx-4">
            <HiOutlineMail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
