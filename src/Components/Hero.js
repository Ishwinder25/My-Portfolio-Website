import React from 'react';
import { Link } from 'react-router-dom';
import Two from '../Images/Ishwinder-Resume.pdf';
import One from '../Images/One.jpeg';

const Hero = () => {
  return (
    <div className="bg-gray-800 min-h-screen p-4 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-center">
      <div className="text-center md:text-left md:w-2/3">
        <h1 className="text-4xl font-bold mb-4 text-white">Hi, I'm Ishwinder</h1>
        <p className="text-lg mb-6 text-white">
          I'm a versatile software developer with 1.5 years of experience and expertise in MERN Stack and experience in deploying scalable solutions using AWS. Reach out if you would like to learn more about me!
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
          <Link to="/contact" className="bg-blue-500 text-white px-4 py-2 mx-4 rounded-lg hover:bg-blue-600">
            Contact Me
          </Link>
          <a href={Two} download className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Download CV
          </a>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
        <img 
          src={One} 
          alt="Ishwinder"
          className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
