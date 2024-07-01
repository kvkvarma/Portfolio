import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-mySignatureColor text-white pt-16 md:pt-">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-signature inline border-b-2 border-gray-400 text-yellow-500">About</p>
        </div>
        <p className="text-xl ">
          I am K Vijaya Kumar Varma, currently pursuing a B.Tech in Computer Science and Engineering at Pragati Engineering College, now in my fourth year. I am passionate about the software industry and have enriched my skills through various hands-on projects.
        </p>
        <br />
        <p className="text-xl">
          Through engaging projects, I've enhanced proficiency in React for front-end, Node.js and Express.js for back-end development, and MySQL for database management. Excited to apply these skills, contribute effectively, and achieve professional growth in the dynamic software industry.
        </p>
        
      </div>
    </div>
  );
};

export default About;
