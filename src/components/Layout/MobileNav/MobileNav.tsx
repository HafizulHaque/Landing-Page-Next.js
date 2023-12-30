'use client'

import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button/Button';

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
    <nav className={`fixed top-0 left-0 z-50 h-100 w-full py-4 ${isScrolled || isMenuOpen ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'} ${isMenuOpen ? 'rounded-b-xl' : 'rounded-b-md'} px-2 lg:px-0`}>
      {/* mobile nav icon  */}
      <div className="flex justify-between items-center px-4 py-1">
        <a 
          href="#" 
          className={`text-xl font-semibold ${isScrolled || isMenuOpen ? 'text-customNavy' : 'text-white'}`}
          onClick={closeMenu}>
          Login
        </a>
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
        <div className='bg-white text-black px-4' onClick={closeMenu}>
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
