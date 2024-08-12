import React from 'react';
import AboutImage from '../Images/aboutImage.png';
import Cursor from '../Images/cursorIcon.png';
import serverIcon from '../Images/serverIcon.png';
import './style.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-section bg-gray-800 py-6 px-6 flex flex-col md:flex-row items-center md:items-start md:justify-center mt-0 md:mt-0 rounded-lg shadow-md">
      <div className="about-left flex flex-col items-center md:items-start md:w-1/3">
        <h2 className="text-3xl font-bold text-white mb-4">About</h2>
        <img
          src={AboutImage}
          alt="Ishwinder"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full mb-6"
        />
      </div>
      <div className="about-right flex flex-col space-y-4 md:w-2/3">
        <div className="info-box bg-gray-700 p-4 rounded-lg shadow-md flex items-center hover:bg-gray-600 transition-colors duration-300">
          <img src={Cursor} alt="Frontend Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Frontend Developer</h3>
            <p className="text-white mt-2">
              I'm a front-end developer with proficiency in React, Node, HTML5, CSS3, creating dynamic and responsive web interfaces.
            </p>
          </div>
        </div>
        <div className="info-box bg-gray-700 p-4 rounded-lg shadow-md flex items-center hover:bg-gray-600 transition-colors duration-300">
          <img src={serverIcon} alt="Backend Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Backend Developer</h3>
            <p className="text-white mt-2">
              I'm adept at backend development utilizing Node.js, Express.js and various databases to build scalable server-side applications.
            </p>
          </div>
        </div>
        <div className="info-box bg-gray-700 p-4 rounded-lg shadow-md flex items-center hover:bg-gray-600 transition-colors duration-300">
          <img src={serverIcon} alt="UI/UX Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-blue-400">UI/UX Designer</h3>
            <p className="text-white mt-2">
              I combine creativity and technical skills in UI/UX design, leveraging tools like Figma and Photoshop to create intuitive and engaging user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
