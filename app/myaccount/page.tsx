import React from "react";
import Image from "next/image";

const MyAccount = () => {
  return (
    <div className="">

      <div className="relative">
              <Image
                src="/Myaccount.png"
                alt="Account Banner"
               width={1500}
               height={400}
              />
            </div>

      
      <div className="container mx-auto px-12 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-white lg:p-10 space-y-10 sm:p-0">
            <h2 className="lg:text-3xl sm:text-2xl font-semibold mb-4">Log In</h2>
            <form>
              <div className="mb-4 space-y-5">
                <label htmlFor="email" className="block text-sm font-medium text-black">
                 Username or email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-[60%] px-2 py-4 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-4 space-y-5">
                <label htmlFor="password" className="block text-sm font-medium text-[#000000]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-[60%] px-3 py-4 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4 space-y-5">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="h-4 w-4  border-[#9F9F9F] rounded-lg"
                  />
                  <span className="ml-2 text-[#000000]">Remember me</span>
                </label>
                
              </div>
              <button
                type="submit"
                className="lg:w-[30%] sm:w-[40%] border border-black text-black py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Log In
              </button>
              <a href="#" className="text-sm text-black hover:underline p-4">
                  Lost your password?
                </a>
            </form>
          </div>

     
          <div className="bg-white lg:p-10 space-y-8 sm:p-0">
            <h2 className="lg:text-3xl sm:text-2xl font-semibold mb-4">Register</h2>
            <form>
              <div className="pt-2 space-y-4">
                <label htmlFor="register-email" className="block text-sm font-medium text-[#000000]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="register-email"
                  className="mt-1 block w-[60%] px-3 py-4 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                  placeholder=""
                  required
                />
              </div>
             
            </form>
            <p className="text-sm text-black">
            A link to set a new password will be sent to your email <br />address.</p>
            <p className='text-sm text-black'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our {' '}
            <a href="#" className="text-black font-semibold hover:underline">
                privacy policy
              </a>.
            </p>
            <div className=''>
            <button
                type="submit"
                className="lg:w-[30%] sm:w-[50%] border border-black text-black py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Register
              </button>
              </div>
          </div>
        </div>
      </div>


       {/* Delivery section */}
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

export default MyAccount;
