import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Logo from '../../public/assets/logo.png';

const Navbar = () => {
  // UseState
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('transparent');
  const [linkColor, setLinkColor] = useState('#020617');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/realestate' ||
      router.asPath === '/defi' ||
      router.asPath === '/netflix' ||
      router.asPath === '/photography'
    ) {
      setLinkColor('#ffff');
    } else {
      setLinkColor('#020617');
    }
  }, [router]);

  // Handle navigation
  const handleNav = () => {
    setNav(!nav);
  };

  // UseEffect
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={`w-full h-20 fixed z-[99999] lg:text-xl ${shadow ? `shadow-none backdrop-filter backdrop-blur-md` : 'shadow-none bg-transparent'}`}>
      <div className="w-full h-full flex justify-between items-center px-4 md:px-16">
        <Image src={Logo} alt="Logo" width={100} height={50} />
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden  md:flex gap-x-8">
            <Link href="/#home">
              <li className="text-sm hover:text-blue-400 transition">HOME</li>
            </Link>
            <Link href="/#about">
              <li className="text-sm hover:text-blue-400 transition">ABOUT</li>
            </Link>
            <Link href="/#skills">
              <li className="text-sm hover:text-blue-400 transition">SKILLS</li>
            </Link>
            <Link href="/#project">
              <li className="text-sm hover:text-blue-400 transition">PROJECT</li>
            </Link>
            <Link href="/#contact">
              <li className="text-sm hover:text-blue-400 transition">CONTACT</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className={!nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/50' : ''}>
        {/* Navbar Menu */}
        <div
          className={
            !nav
              ? 'md:hidden fixed top-0 left-0 h-screen bg-white w-4/5 md:w-1/3 p-8 transition ease-in duration-300'
              : 'fixed top-0 left-[-100%] ease-in duration-500'
          }>
          <div className="w-full flex items-center justify-between">
            <Image src={Logo} alt="Logo" width={80} height={0} />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400/60 p-2 group cursor-pointer">
              <AiOutlineClose size={20} className="group-hover:scale-105 transition duration-300" />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-full py-4">Let's build something legendary together</p>
          </div>
          <div className="flex flex-col py-4">
            <ul>
              <Link href="/#home">
                <li
                  onClick={handleNav}
                  className="text-sm py-4 uppercase hover:text-gray-600 transition">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={handleNav}
                  className="text-sm py-4 uppercase hover:text-gray-600 transition">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={handleNav}
                  className="text-sm py-4 uppercase hover:text-gray-600 transition">
                  Skills
                </li>
              </Link>
              <Link href="/#project">
                <li
                  onClick={handleNav}
                  className="text-sm py-4 uppercase hover:text-gray-600 transition">
                  Project
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={handleNav}
                  className="text-sm py-4 uppercase hover:text-gray-600 transition">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="font-semibold tracking-wide">Let's connect</p>
              <div className="flex justify-between items-center w-full sm:w-[80%] mt-3 lg:mt-4">
                <Link href="https://www.linkedin.com/in/thobazb" target="_blank">
                  <div className="rounded-full shadow-lg p-3 shadow-gray-300 hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                    <FaLinkedin />
                  </div>
                </Link>
                <Link href="https://github.com/zainuul" target="_blank">
                  <div className="rounded-full shadow-lg p-3 shadow-gray-300 hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/zainuull_" target="_blank">
                  <div className="rounded-full shadow-lg p-3 shadow-gray-300 hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                    <FaInstagram />
                  </div>
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=6288298813114" target="_blank">
                  <div className="rounded-full shadow-lg p-3 shadow-gray-300 hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                    <FaWhatsapp />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
