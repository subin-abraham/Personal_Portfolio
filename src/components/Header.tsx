"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faHandshake, faBars, faTimes, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Subin_Abraham_Resume.pdf';
    link.download = 'Subin_Abraham_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  function bookMeeting(): void {
    window.open("https://calendly.com/subinabraham346/30min", "_blank", "noopener,noreferrer");
  }

  return (
    <header className='p-3 border-b-4 border-double border-gray-300 font-semibold'>
      <div className="flex items-center justify-between">
        {/* Left - Profile */}
        <div className='border rounded-full border-gray-300'>
          <Link href="/">
            <Image
              className='cursor-pointer rounded-full'
              src="/images/Profile_Image.jpeg"
              alt="profile"
              width={50}
              height={50}
            />
          </Link>
        </div>

        {/* Center - Desktop Nav */}
        <nav className="hidden md:block">
          <ul className='flex gap-8'>
            <li>
              <Link
                href="/"
                className={`cursor-pointer ${pathname === '/' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`cursor-pointer ${pathname === '/about' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`cursor-pointer ${pathname === '/projects' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`cursor-pointer ${pathname === '/blogs' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right - Desktop Action Buttons */}
        <div className="hidden md:flex gap-4">
          <button className='btn flex items-center gap-1 cursor-pointer hover:text-blue-500' onClick={() => bookMeeting()}>
            Book a Meeting <FontAwesomeIcon icon={faCalendarDays} />
          </button>
          <button className='btn flex items-center gap-1 cursor-pointer hover:text-blue-500' onClick={() => handleDownload()}>
            Resume <FontAwesomeIcon icon={faFileArrowDown} />
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 z-20">
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block cursor-pointer ${pathname === '/' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block cursor-pointer ${pathname === '/about' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block cursor-pointer ${pathname === '/projects' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block cursor-pointer ${pathname === '/blogs' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
              >
                Blogs
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <button className='btn w-full flex justify-center items-center gap-1 hover:text-blue-500' onClick={() => bookMeeting()}>
              Book a Meeting <FontAwesomeIcon icon={faHandshake} />
            </button>
            <button className='btn w-full flex justify-center items-center gap-1 hover:text-blue-500' onClick={() => handleDownload()}>
              Resume <FontAwesomeIcon icon={faFileArrowDown} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
