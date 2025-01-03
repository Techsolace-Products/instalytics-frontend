import React from "react";
import Logo from "@/../public/authorLogo.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import Shape6 from "@/../public/shape6.png";
import Link from "next/link";
const Team = () => {
  return (
    <>
      <div className="max-w-[800px] m-auto mt-20">
        <div className="flex flex-col gap-8 items-center text-center">
          <div className="inline-block">
            <span className="text-black px-4 py-1 bg-white rounded-full font-bold text-xs">
              Team
            </span>
          </div>
          <div className="relative">
            <h1 className="text-white text-4xl font-semibold">
              Meet the Minds Behind InstaLytics
            </h1>
            <Image
              src={Shape6}
              width={120}
              height={120}
              alt="Shape1"
              className="m-auto"
            />
          </div>
          <p className="text-center text-white">
            We are a dedicated crew of innovators, creators, and community
            champions, united by a shared mission to craft the ultimate platform
            for celebrating and sharing the journeys of builders everywhere.
          </p>
          <Image
            src={Logo}
            width={150}
            height={150}
            alt="Author Logo"
            className="rounded-full mt-5"
          />
          <Link
            href="https://github.com/techsolace"
            target="_blank"
            className="text-black flex bg-white rounded-lx items-center gap-2 font-semibold py-2 px-4 rounded-xl 
            transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg"
          >
            Techsolace <FaGithub />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Team;
