// pages/checkout.js
import React from "react";
import Image from "next/image";

const Checkout = () => {
  return (
    <div className="bg-white min-h-screen">
  
      <div className="relative w-full h-64">
                  <Image
                    src="/checkout.png"
                    alt="Shop Banner"
                    height={400}
                    width={1500}
                  />
                </div>

   
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column*/}
          <div className="md:col-span-2  lg:p-20 sm:p-2" >
            <h2 className="text-2xl font-semibold mb-4">Billing details</h2>
            <form>
         
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-[#000000]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-[#000000]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="company-name" className="block text-sm font-medium text-[#000000]">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-[#000000]">
                  Country/Region
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                >
  [#000000]<option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Turkey</option>
                  <option>Afghanistan</option>
                  <option>Russia</option>
                  <option>Iran</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="street-address" className="block text-sm font-medium text-[#000000]">
                  Street Address
                </label>
                <input
                  type="text"
                  id="street-address"
                  className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                  placeholder="Street Address"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-[#000000]">
                    Town/City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                    placeholder="Town/City"
                  />
                </div>
                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-[#000000]">
                    Province
                  </label>
                  <input
                    type="text"
                    id="province"
                    className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                    placeholder="Province"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="zip-code" className="block text-sm font-medium text-[#000000]">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip-code"
                    className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                    placeholder="Zip Code"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#000000]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[#000000]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="mt-1 block w-full px-3 py-2 border border-[#9F9F9F] rounded-md shadow-sm focus:outline-none focus:ring-[#000000] focus:border-[#000000] sm:text-sm"
                  placeholder="Additional Information (Optional)"
                />
              </div>
            </form>
          </div>

          {/* Right Column */}
          <div className="bg-white pt-20">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p className="text-[#9F9F9F]">Product</p>
              <p className="text-right text-gray-700">Subtotal</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <p className="text-[#9F9F9F] mb-4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#9F9F9F]">
                <input type="radio" name="payment" className="mr-2" /> Cash on Delivery
              </label>
              <label className="block text-sm font-medium text-[#9F9F9F]">
                <input type="radio" name="payment" className="mr-2" /> Direct Bank Transfer
              </label>
            </div>
            <p className="text-gray-600 text-sm mb-6">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
              <a href="#" className="text-[#000000] hover:underline">
                Privacy Policy
              </a>.
            </p>
            <div className= "pl-24">
            <button className="w-[70%] border-[#000000] border-[1px] text-[#000000] py-2 px-4 rounded-lg hover:bg-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-[#9F9F9F] focus:ring-offset-2">
              Place Order
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
