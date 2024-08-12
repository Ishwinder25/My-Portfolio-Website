import React from 'react';
import ProjectImage1 from '../Images/ProjectImage1.png';
import ProjectImage2 from '../Images/ProjectImage2.png';
import ProjectImage3 from '../Images/ProjectImage3.png';

const projects = [
  {
    title: "E-commerce website",
    description: "A dynamic e-commerce platform dedicated to delivering the latest fashion trends in clothing.",
    image: ProjectImage1,
    technologies: ["React", "Express", "Node", "MongoDB", "Figma"],
    sourceLink: "https://github.com/bharat882/e-commerce"
  },
  {
    title: "Facial-Recognition App",
    description: "Architected and deployed a facial recognition app utilizing AWS and React JS, significantly enhancing workplace security by 45%.",
    image: ProjectImage2,
    technologies: ["React", "AWS", "S3 bucket", "DynamoDB", "GitHub"],
    sourceLink: "https://github.com/Ishwinder25/Facial-recognition-app"
  },
  {
    title: "Skiing Industry Digitization",
    description: "Led a team of 4 members to successfully develop a distributed system for the collection and analysis of ski resorts data.",
    image: ProjectImage3,
    technologies: ["REST-API", "Spring", "Docker", "MongoDB", "Oracle"],
    sourceLink: "https://github.com/neha2499/Skiing_Industry_Digitization"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow-md p-6 flex flex-col space-y-4">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="text-white">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-800 text-blue-400 rounded-full px-3 py-1 text-sm font-semibold">{tech}</span>
        ))}
      </div>
      <a
        href={project.sourceLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white rounded-full px-4 py-2 text-center font-semibold mt-auto hover:bg-gray-600 transition-colors duration-300"
      >
        Source
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-10 px-6 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
