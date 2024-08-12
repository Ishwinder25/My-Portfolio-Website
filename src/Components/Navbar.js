import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = (isActive) => (
    `py-2 px-4 block ${isActive ? 'border-b-2 border-blue-500' : 'hover:underline'}`
  );

  return (
    <nav className="bg-custom-blue text-white sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Ishwinder</div>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/About" className={({ isActive }) => linkClasses(isActive)}>About</NavLink>
          <NavLink to="/Experience" className={({ isActive }) => linkClasses(isActive)}>Experience</NavLink>
          <NavLink to="/Project" className={({ isActive }) => linkClasses(isActive)}>Projects</NavLink>
          <NavLink to="/Contact" className={({ isActive }) => linkClasses(isActive)}>Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLink to="/About" className={({ isActive }) => linkClasses(isActive)} onClick={toggleMenu}>About</NavLink>
          <NavLink to="/Experience" className={({ isActive }) => linkClasses(isActive)} onClick={toggleMenu}>Experience</NavLink>
          <NavLink to="/Projects" className={({ isActive }) => linkClasses(isActive)} onClick={toggleMenu}>Projects</NavLink>
          <NavLink to="/Contact" className={({ isActive }) => linkClasses(isActive)} onClick={toggleMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
