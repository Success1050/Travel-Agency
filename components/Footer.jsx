"use client";

import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className='bg-gray-800 p-4 text-white '>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h2 className='text-2xl font-bold mb-4'>Travel Agency</h2>
              <p className='mb-4'>
                Your trusted partner for unforgettable travel experience.
                Explore the world
              </p>
            </div>
            <div className='flex flex-col md:items-center'>
              <h2 className='text-lg font-semibold'>Quick Links</h2>
              <div className='flex flex-col mt-4 space-y-2'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/services'>Services</Link>
                <Link href='/requests'>Requests</Link>
                <Link href='/conact'>Contact</Link>
              </div>
            </div>
            <div>
              <h2 className='text-xl font-bold mb-4'>Follow us</h2>
              <div className='flex space-x-4 mb-4'>
                <Link href='#'>
                  <FaFacebook
                    size={24}
                    className='text-blue-500 hover:text-blue-600 motion cursor-pointer'
                  />
                </Link>

                <Link href='#'>
                  <FaInstagram
                    size={24}
                    className='text-pink-500 hover:text-pink-600 motion cursor-pointer'
                  />
                </Link>

                <Link
                  href='https://api.whatsapp.com/send?phone=2349068149319&text=Hello, more information!'
                  target='_blank'
                >
                  <FaWhatsapp
                    size={24}
                    className='text-green-400 hover:text-green-500 motion cursor-pointer'
                  />
                </Link>

                <Link href='#'>
                  <FaTwitter
                    size={24}
                    className='text-blue-400 hover:text-blue-500 motion cursor-pointer'
                  />
                </Link>
              </div>
              <form
                action='#'
                method='post'
                className='flex items-center justify-center mt-8'
              >
                <input
                  type='email'
                  placeholder='Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600'
                />
                <button
                  type='button'
                  className='bg-blue-600 text-white px-4 py-2 rounded-r-lg border-blue-600'
                >
                  Suscribe
                </button>
              </form>
            </div>
          </div>
          <div className='flex justify-between border border-t border-gray-700 pt-4 md:flex row flex-col md:flex-row'>
            <p>&copy; 2024 Travel Agency. All Right Reserved. </p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <Link href='#'>Privacy Policy</Link>
              <Link href='#'>Terms of Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
