"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
// import { FaBeer } from "react-icons/fa";
import { FaBars, FaCcVisa, FaCreditCard, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <nav className='fixed top-0 left-0 shadow-lg z-30 w-full backdrop-blur-blurCustom border-b-2 border-gray-400 bg-white '>
        <div className='container flex px-4 justify-between items-center h-16 relative'>
          <Link href='/'>Success</Link>
          <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
            {navLinks.map((link) => {
              const { id, href, label } = link;
              return (
                <Link
                  key={id}
                  href={href}
                  className='px-6 py-2 hover:bg-gray-600 hover-text-white motion '
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <button
            type='button'
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 h-screen w-cusWidth6 bg-slate-200 shadow-lg z-cuzindex flex flex-col justify-center items-center space-y-3 transition-all duration-1000 ease-in ${
            isOpen ? "active" : "left-cusLeft"
          }`}
        >
          {navLinks.map((link) => {
            const { id, href, label } = link;
            return (
              <Link
                key={id}
                href={href}
                onClick={() => setIsOpen(false)}
                className='px-6 py-2 hover:bg-gray-600 hover:text-white text-[16px] text-cusBgCol6 text-left rounded-cusBradius4'
              >
                {label}
              </Link>
            );
          })}
          <div className='absolute top-custop5 right-cusPt text-[16px]' y>
            <button type='button' onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
