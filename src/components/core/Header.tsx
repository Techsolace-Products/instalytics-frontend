"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/../public/logo.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed w-full z-[999]">
        <div className="max-w-[1300px] m-auto">
          <div className="p-8 bg-black flex justify-between items-center">
            <div className="flex-[1]">
              <Image src={Logo} alt="InstaLytics" width={100} height={100} />
            </div>

            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>

            <div className="hidden lg:flex flex-[1]">
              <nav className="text-white flex-wrap gap-10 font-light flex items-center justify-center">
                <Link href="/">Home</Link>
                <Link href="#features">Features</Link>
                <Link href="#about">About</Link>
                <Link href="#developers">Developers</Link>
              </nav>
            </div>

            <div className="hidden lg:flex flex-[1] flex-wrap gap-2 items-center justify-end">
              <Link
                href="#"
                className="border-white border-[2px] px-3 py-2 text-sm text-white rounded-2xl flex flex-wrap items-center gap-2 font-semibold"
              >
                Login
              </Link>
              <Link
                href="#"
                className="border-white border-[2px] px-3 py-2 text-sm text-black bg-white rounded-2xl flex flex-wrap items-center gap-2 font-semibold"
              >
                Get Started <MdKeyboardDoubleArrowRight />
              </Link>
            </div>
          </div>

          <div
            className={`fixed top-0 right-0 h-full w-[300px] bg-black transform transition-transform duration-300 ease-in-out lg:hidden z-[998] ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col py-4 text-white gap-4 pt-20 px-8">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
              >
                <span>Home</span>
                <IoIosArrowForward />
              </Link>
              <Link 
                href="#features" 
                onClick={handleLinkClick}
                className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
              >
                <span>Features</span>
                <IoIosArrowForward />
              </Link>
              <Link 
                href="#about" 
                onClick={handleLinkClick}
                className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
              >
                <span>About</span>
                <IoIosArrowForward />
              </Link>
              <Link 
                href="#developers" 
                onClick={handleLinkClick}
                className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
              >
                <span>Developers</span>
                <IoIosArrowForward />
              </Link>
              
              <div className="mt-4 flex flex-col gap-3 w-full">
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  className="border-white border-[2px] px-4 py-2 text-sm text-white rounded-2xl flex items-center justify-center gap-2 font-semibold w-full hover:bg-white hover:text-black transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  className="border-white border-[2px] px-4 py-2 text-sm text-black bg-white rounded-2xl flex items-center justify-center gap-2 font-semibold w-full hover:bg-transparent hover:text-white transition-colors"
                >
                  Get Started <IoIosArrowForward className="text-lg" />
                </Link>
              </div>
            </nav>
          </div>

          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden z-[997] ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
