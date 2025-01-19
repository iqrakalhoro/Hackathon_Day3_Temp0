import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
    return (
        <div className="min-h-screen\">
            <div className="relative ">
                <Image
                    src="/cart.png"
                    alt="Shop Banner"
                    height={400}
                    width={1500}
                />
            </div>
            <div className='py-3 md:py-7 xl:w-[83%] lg:w-[90%] m-auto px-3 flex-col md:flex-row flex items-center sm:items-end md:items-start md:justify-between gap-5 '>
                <div className='xl:w-[70%] w-full lg:mt-10'>
                    <div className='grid grid-cols-4 text-sm sm:text-base xl:text-lg py-3 font-medium bg-[#FFF9E5]'>
                        <h3 className='text-right'>Product</h3>
                        <h3 className="text-center">Price</h3>
                        <h3 className="text-center">Quantity</h3>
                        <h3 className="col-span">Subtotal</h3>
                      
                    </div>
                    <div className='grid grid-cols-4 mt-6 lg:mt-10 xl:mt-20 text-[8px] sm:text-xs xl:text-base items-center'>
                        <div className='flex items-center space-x-2'>
                            <Image className='bg-[#FBEBB5] rounded-lg max-w-[100px] w-10 h-10 md:w-16 md:h-16 lg:w-28 lg:h-16'
                                src="/Asgaard sofa 1.png"
                                alt="Image"
                                width={100}
                                height={70}
                            />
                            <h2 className=" text-[#9F9F9F] pl-4">Asgaard Sofa</h2>
                        </div>
                        <p className=" text-[#9F9F9F] text-center pl-11">Rs. 250,000.00</p>
                        <input
                                type="number"
                                className="w-8 h-8 border border-[#9F9F9F] rounded-md m-auto text-center cursor-pointer"
                                min="1"
                                defaultValue="1"
                            />
                        <div className="flex gap-2 sm:gap-9 ">
                            <p className="">Rs.250,000.00</p>
                            <p><AiFillDelete className='text-[#FBEBB5] flex text-right text-2xl'></AiFillDelete></p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFF9E5] space-y-5 md:space-y-7  lg:mt-10  border-2 border-[#FFF9E5] lg:w-[360px] sm:w-[260px] lg:h-[330px] ">
                            <h2 className="text-base sm:text-lg lg:text-2xl xl:text-4xl font-semibold my-4  text-center md:pb-10">Cart Totals</h2>
                            <div className="flex justify-between items-center gap-8 text-[#000000] xl:px-10">
                                <p className='text-xs md:text-base xl:text-lg'>Subtotal</p>
                                <p className="text-xs md:text-base lg:text-sm text-[#9F9F9F]">Rs. 250,000.00</p>
                            </div>
                            <div className="flex justify-between items-center gap-8 text-xs md:text-base xl:text-lg text-[#000000]  xl:px-10">
                                <p>Total</p>
                                <p className='text-base md:text-xl lg:text-xl text-[#B88E2F]'>Rs. 250,000.00</p>
                            </div>
                            <div className='m-auto w-fit'>
                                <Link href="/checkout"> <button className=" border-[#000000] border-[1px] text-[#000000] py-1 px-7 text-base md:py-3 md:px-16 rounded-md sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFF9E5] focus:ring-offset-2 sm:text-lg">
                                    Checkout
                                </button></Link>
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

export default Cart;
