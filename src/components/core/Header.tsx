import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/../public/logo.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Header = () => {
  return (
    <>
    <div className="fixed w-full z-[100]">
      <div className="max-w-[1300px] m-auto">
        <div className="p-8 bg-black flex justify-between items-center">
          <div className="flex-[1]">
            <Image src={Logo} alt="InstaLytics" width={100} height={100} />
          </div>
          <div className="flex-[1]">
            <nav className="text-white flex-wrap gap-10 font-light flex items-center justify-center">
              <Link href="/">Home</Link>
              <Link href="#features">Features</Link>
              <Link href="#about">About</Link>
              <Link href="#developers">Developers</Link>
            </nav>
          </div>
          <div className="flex-[1] flex flex-wrap gap-2 items-center justify-end">
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
      </div>
      </div>
    </>
  );
};

export default Header;
