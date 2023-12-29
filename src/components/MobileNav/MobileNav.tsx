'use client'

import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 h-100 w-full z-1000 py-4 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
      {/* mobile nav icon  */}
      <div className="flex justify-between items-center px-4">
        <a href="#" className={`font-semibold ${isScrolled || isMenuOpen ? 'text-customNavy' : 'text-white'}`}>Login</a>
        {
          !isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>):(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          )}
      </div>
      {/* nav icons  */}
      {isMenuOpen ? (
        <div className='bg-white text-black px-4'>
          <ul className="list-none">
            <li className='my-2'><a href="#">Home</a></li>
            <li className='my-2'><a href="#" className="flex items-center space-x-1"><span>Model</span><img src={isScrolled || isMenuOpen ? `./expand_more_light.svg`:`./expand_more.svg`}/></a></li>
            <li className='my-2'><a href="#" className="flex items-center space-x-1"><span>Be a Partner</span><img src={isScrolled || isMenuOpen ? `./expand_more_light.svg`:`./expand_more.svg`}/></a></li>
            <li className='my-2'><a href="#" className="flex items-center space-x-1"><span>More</span><img src={isScrolled || isMenuOpen ? `./expand_more_light.svg`:`./expand_more.svg`}/></a></li>
          </ul>
          <div className="mb-4 mt-6">
           <Button text="Join Our Discord" onClick={() => {}}/>
          </div>
        </div>
      ) : null }
    </nav>
  );
};

export default MobileNav;
