import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-[#FBEBB5] lg:h-screen flex flex-col-reverse lg:flex-row items-center lg:items-stretch px-6 lg:px-16 py-10 lg:py-20">
  
      <div className="text-[#000000] flex flex-col justify-center items-center lg:items-start space-y-6 lg:space-y-10 lg:w-1/2 text-center lg:text-left lg:pl-[50px]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">
          Rocket Single Seater
        </h1>
        <button className="text-lg lg:text-xl border-b-2 border-black pb-2 hover:underline">
          Shop Now
        </button>
      </div>

    
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/Image1.png" 
          alt="Rocket Single Seater"
          height={500} 
          width={450} 
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
