import React from "react";
import { FaRegComments } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import ChartOne from "./charts/chartOne";
import ChartTwo from "./charts/ChartTwo";
import ChartThree from "./charts/ChartThree";
import Image from "next/image";
import Shape1 from "@/../public/shape1.png";
import Shape2 from "@/../public/shape2.png";
import Shape3 from "@/../public/shape3.png";
import Shape4 from "@/../public/shape4.png";
import Shape8 from "@/../public/shape8.png";
import { useUser } from "@/actions/UserContext";
const Hero = () => {
  const user = useUser();

  if (!user) {
    window.location.href = '/';
    return null; 
  }

  const username = user.user?.username || "Guest";

  return (
    <div className="max-w-[1000px] m-auto">
      <div className="flex gap-8 flex-col items-center justify-center w-full mb-2">
        <Image src={Shape1} width={120} height={120} alt="Shape1" />
        <Image
          src={Shape2}
          width={120}
          height={120}
          alt="Shape2"
          className="absolute right-0 top-40 hidden lg:block"
        />
        <Image
          src={Shape3}
          width={120}
          height={120}
          alt="Shape3"
          className="absolute left-0 top-[400px] hidden lg:block"
        />
        <div className="relative">
          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            Welcome {username} {username === "Guest" ? "..." : ","}
          </h1>
          <Image
            src={Shape4}
            width={500}
            height={400}
            alt="Shape4"
            className="m-auto lg:absolute lg:right-0 lg:bottom-[-60px] opacity-80 lg:w-[500px] w-[300px]"
          />
        </div>
        <p className="text-white text-opacity-80 text-lg lg:mt-20">
          A cutting-edge AI-powered tool designed to skyrocket your social media
          reels! With smart analytics at its core, it delivers powerful insights
          to help you grow faster and smarter than ever.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <FaRegComments
            className="text-white p-2 bg-purple-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-purple-800 cursor-pointer"
            size="38"
          />
          <FaRegHeart
            className="text-white p-2 bg-red-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-red-800 cursor-pointer"
            size="38"
          />
          <IoMdPaperPlane
            className="text-white p-2 bg-blue-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-800 cursor-pointer"
            size="38"
          />
          <IoShareSocialOutline
            className="text-white p-2 bg-orange-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-orange-800 cursor-pointer"
            size="38"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 flex-row mt-20 p-10">
        <div className="flex-[1.2]">
          <ChartOne />
        </div>
        <div className="flex-[1]">
          <ChartTwo />
        </div>
      </div>
      <div className="px-10">
        <ChartThree />
      </div>
      <h1 className="text-white bottom-[150px] right-[40px] fixed text-xl pacifico-regular">
        Use our AI Chat to See Stats...
      </h1>
      <Image
        src={Shape8}
        width={100}
        height={100}
        alt="Shape4"
        className="m-auto lg:right-[40px] fixed bottom-[50px] opacity-80 lg:w-[100px] w-[100px]"
      />
    </div>
  );
};

export default Hero;
