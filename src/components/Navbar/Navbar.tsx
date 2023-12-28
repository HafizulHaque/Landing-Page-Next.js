'use client'

import { useEffect, useState } from "react";
import Button from "../Button/Button"

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 h-100 w-full py-1 transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
      <div className="max-w-screen-lg mx-auto p-4 flex justify-between align-items-center">
        <ul className="flex space-x-4 list-none">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
        <div>
          <a href="#">Link 3</a>
          <Button/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar