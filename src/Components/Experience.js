import React, { useState } from 'react';
import HTML from '../Images/Skills/html.png';
import css from '../Images/Skills/css.png';
import javascript from '../Images/Skills/javascript_logo.png';
import react from '../Images/Skills/react.png';
import node from '../Images/Skills/node.png';
import mongodb from '../Images/Skills/mongodb.png';
import figma from '../Images/Skills/figma.png';
import graphql from '../Images/Skills/graphql.png';
import express from '../Images/Skills/express-js.png';

const Experience = () => {
  const [showUpworkDetails, setShowUpworkDetails] = useState(false);
  const [showAkalDetails, setShowAkalDetails] = useState(false);

  const toggleUpworkDetails = () => setShowUpworkDetails(!showUpworkDetails);
  const toggleAkalDetails = () => setShowAkalDetails(!showAkalDetails);

  const skills = [
    { src: HTML, alt: "HTML5", name: "HTML" },
    { src: css, alt: "CSS3", name: "CSS" },
    { src: javascript, alt: "JavaScript", name: "JavaScript" },
    { src: react, alt: "React", name: "React" },
    { src: node, alt: "Node.js", name: "Node.js" },
    { src: mongodb, alt: "MongoDB", name: "MongoDB" },
    { src: figma, alt: "Figma", name: "Figma" },
    { src: graphql, alt: "GraphQL", name: "GraphQL" },
    { src: express, alt: "Express", name: "Express" },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="grid grid-cols-3 gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full p-4">
                <img src={skill.src} alt={skill.alt} className="h-12 w-12" />
              </div>
              <p className="mt-1 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <div className="mb-4">
          <h3 className="text-lg font-bold">MERN Stack Developer, Freelancer-Upwork</h3>
          <p>September 2023 - Present</p>
          <p>Collaborated with Product Owners, UI/UX Designers, and QA Engineers to develop and implement new features, ensuring alignment with business goals and reducing development time by 10%.</p>
          {showUpworkDetails && (
            <div>
              <p>Developed, tested, and maintained web applications using ReactJs and MySQL, enhancing software quality by
              32%. Improved CI/CD processes using GitHub Actions, reducing deployment time by 20%.</p>
              <p>• Conducted code reviews, troubleshot and debugged software issues, ensuring performance, quality, and security standards were met, improving system efficiency by 15%.</p>
            </div>
          )}
          <button onClick={toggleUpworkDetails} className="text-blue-500">
            {showUpworkDetails ? 'Read Less' : 'Read More...'}
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Software Developer, Akal Web Soft Pvt Ltd.</h3>
          <p>January 2021 - August 2021</p>
          <p>Planned, refactored, and optimized e-commerce websites. Integrated payment gateways into web applications, enhancing e-commerce functionality and user experience by 18%.</p>
          {showAkalDetails && (
            <div>
              <p>• Enhanced team productivity by 15% by participating in Agile processes, including planning and sprints using Jira, translating user stories into user interfaces within the time frames.</p>
              <p>• Worked with QA teams to ensure product quality, applied Java and Sprint Boot frameworks, and implemented micro-services architecture thereby increasing the scalability of the system by 22%.</p>
            </div>
          )}
          <button onClick={toggleAkalDetails} className="text-blue-500">
            {showAkalDetails ? 'Read Less' : 'Read More...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
