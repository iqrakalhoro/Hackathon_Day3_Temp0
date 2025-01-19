import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";



const Contact = () => {
  return (
    <div className="min-h-screen">


      <div className="relative">
        <Image
          src="/contact.png"
          alt="Shop Banner"
          height={400}
          width={1500}
        />
      </div>

      
      <div className="text-center lg:p-[150px] sm:p-8">
        <h2 className="lg:text-3xl sm:text-2xl font-semibold">Get in Touch With Us</h2>
        <p className="text-[#9F9F9F] mt-4">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

     
      <div className="container mx-auto lg:px-28 lg:py-10 grid md:grid-cols-2 gap-8">
        {/* Left Column*/}
        <div className="space-y-12">
          <div className="flex items-start mb-6">
            <span className=" text-2xl p-3 ">
            <FaLocationDot></FaLocationDot>
            </span>
            <div className="ml-4">
              <h4 className="text-xl  font-semibold">
               Address</h4>
              <p className="text-[#000000]">236 5th SE Avenue, New York NY10000, United <br />States</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <span className=" text-2xl p-3 ">
            <FaPhoneAlt></FaPhoneAlt>
            </span>
            <div className="ml-4">
              <h4 className="text-xl font-semibold">Phone</h4>
              <p className="text-[#000000]">Mobile: +84 546-6789</p>
              <p>Hotline: +84 456-6789</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <span className=" text-2xl p-3">
            <MdOutlineAccessTimeFilled></MdOutlineAccessTimeFilled>
            </span>
            <div className="ml-4">
              <h4 className="text-xl font-semibold">Working Hours</h4>
              <p className="text-[#000000]">Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Column*/}
        <div className="lg:p-0 sm:p-6 ">
          <form className="space-y-8">
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#000000] mb-4"
              >
                Your Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="mt-1 w-[80%] px-4 py-4 border border-[#9F9F9F] rounded-lg shadow-sm focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#000000] mb-4"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                className="mt-1 block w-[80%] px-4 py-4 border border-[#9F9F9F] rounded-lg shadow-sm focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#000000] mb-4"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional"
                className="mt-1 block w-[80%] px-4 py-4 border border-[#9F9F9F] rounded-lg shadow-sm focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#000000] mb-4"
              
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! id like to ask about"
                className="mt-1 block w-[80%] px-4 py-6 border border-[#9F9F9F] rounded-lg shadow-sm sm:text-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[50%] text-[#000000] py-2 px-2 rounded-xl border-[#000000] border"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

 {/* Delivery Section */}
 <div className="bg-[#FAF4F4] px-4 py-12 sm:px-12 lg:px-24 lg:h-72 lg:p-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-start">
            <h3 className="text-xl lg:text-2xl mb-2">Free Delivery</h3>
            <p className="text-sm text-[#9F9F9F]">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-start">
            <h3 className="text-xl lg:text-2xl mb-2">90 Days Return</h3>
            <p className="text-sm text-[#9F9F9F]">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-start">
            <h3 className="text-xl lg:text-2xl mb-2">Secure Payment</h3>
            <p className="text-sm text-[#9F9F9F]">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
