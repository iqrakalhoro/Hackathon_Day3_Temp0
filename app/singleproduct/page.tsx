import React from "react";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";


const ProductDetails = () => {
  return (
    <div className="bg-white min-h-screen py-8 px-6 lg:px-20">
      <div className=" w-full p-8">
        <p className="text-[#9F9F9F] flex gap-4 ">Home
        <span className="text-[#000000]"><FaGreaterThan /> </span>  Shop <span className="text-[#000000]"><FaGreaterThan /> </span>
  <span className="text-[#000000] border-l-2 border-[#9F9F9F] px-6"> Asgaard Sofa</span></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">



        {/* Left */}
        <div className="flex flex-cols-2 items-center">
        <div className="flex flex-col gap-16 p-2">
  {["/small1.png", "/small2.png", "/small3.png", "/small4.png"].map(
    (src, index) => (
      <div
        key={index}
        className="h-20 w-20 flex justify-center items-center bg-[#FFF9E5] rounded-md"
      >
        <Image
          src={src}
          alt={`Thumbnail ${index + 1}`}
          height={76}
          width={76}
          objectFit="cover"
          className="rounded-md cursor-pointer hover:opacity-80"></Image>
       
      </div>
    )
  )}
</div>

          <div className="h-[550px] flex justify-center items-center mb-4 bg-[#FFF9E5] rounded-lg">
            <Image
              src="/Asgaard sofa 1.png" 
              alt="Product Image"
              objectFit="cover"
              className="rounded-lg "
              height={500}
              width={481}></Image>
            
          </div>
          
        </div>

        {/* Right Side*/}
        <div className="space-y-6 pt-24">
          
          <div>
            <h1 className="text-3xl text-[#000000]">Asgaard sofa</h1>
            <p className="text-2xl text-[#9F9F9F] mt-2">Rs. 250,000.00</p>
          </div>

          
          <div className="flex items-center space-x-4">
  <div className="flex text-yellow-400">
    {"★".repeat(4)}
    <span className="relative inline-block text-yellow-400">
      <span className="absolute inset-0 w-[50%] overflow-hidden">★</span>
      <span className="text-transparent">★</span>
    </span>
  </div>
  <p className="text-[#9F9F9F] border-l p-2">5 Customer Reviews</p>
</div>


      
          <p className="text-[#000000] leading-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

          </p>

         
          <div>
            <h3 className=" text-[#9F9F9F]">Size</h3>
            <div className="flex space-x-4 mt-2 ">
              {[ "L", "XL" , "XS"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 bg-[#FFF9E5] text-[#000000] rounded hover:bg-[#FBEBB5]"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

         
          <div>
            <h3 className=" text-[#9F9F9F]">Color</h3>
            <div className="flex space-x-4 mt-2">
            {["#816DFA", "#000000", "#CDBA7B"].map((color) => (
          <div
          key={color}
          className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 ring-offset-2"
          style={{ backgroundColor: color }}
        />
           ))}
        </div>

          </div>

      
          <div className="flex items-center space-x-6">
            <div className="flex items-center border border-[#9F9F9F] rounded">
              <button className="pl-4 py-4 text-[#000000] hover:bg-[white]">
                -
              </button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center pl-6"
              />
              <button className="px-4 py-2 text-[#000000] hover:bg-gray-200">
                +
              </button>
            </div>
            <button className=" text-[#000000] px-10 py-4 rounded-lg hover:bg-[#9F9F9F] border border-[#000000]">
              Add to Cart
            </button>
          </div>

         
          <hr className="border-[#D9D9D9] my-6" />

         
          <div className="space-y-2 ">
          <div className="text-base text-[#9F9F9F] mt-6">
                        <p>SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;SS001</p>
                        <p>Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;Sofas</p>
                        <p>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;Sofa, Chair, Home, Shop</p>
                    </div>
            <div className="flex justify-between">
              <p className="text-[#9F9F9F]">Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; <span className="space-x-6 text-xl">
                <button className="text-[#000000] hover:text-blue-500"><FaFacebook></FaFacebook></button>
                <button className="text-[#000000] hover:text-blue-300"><FaLinkedin></FaLinkedin></button>
                <button className="text-[#000000] hover:text-pink-400"><AiFillTwitterCircle></AiFillTwitterCircle></button>
              </span>
              </p>
            </div>
          </div>
        </div>
      </div>  


      <section className=" py-10 border-y border-[#9F9F9F] my-6">
      <div className="container mx-auto ">
   
        <div className="flex flex-col sm:flex-row justify-center items-center pb-4 mb-6 gap-7">
          <h2 className="text-xl text-[#000000]">Description</h2>
          
            <h3 className="text-xl text-[#9F9F9F] cursor-pointer hover:text-gray-800">
              Additional Information
            </h3>
            <h3 className="text-xl text-[#9F9F9F] cursor-pointer hover:text-gray-800">
              Reviews [5]
            </h3>
        
        </div>

      
        <div className="space-y-6">
          
          <p className="text-[#9F9F9F] text-lg leading-7">
          Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br /> sound of Marshall, unplugs the chords, and takes the show on the road.          </p>
          <p className="text-[#9F9F9F] text-lg leading-7">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.          </p>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src="/description.png"
              alt="Description 1"
              className="rounded-lg bg-[#FFF9E5]"
              height={436}
              width={657}
            />
            <Image
              src="/description.png" 
              alt="Description 2"
              className="rounded-lg bg-[#FFF9E5]"
              height={436}
              width={657}
            />
          </div>
        </div>
      </div>
    </section>

    <div className='p-8'>
   
      <div className='text-center mb-8'>
        <h1 className='text-3xl'>Related Products</h1>
      </div>

    
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
     
        <div className='text-center'>
          <Image
            src='/Product1.png'
            alt='Product 1'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='text-lg font-medium mt-4'>Trenton modular sofa_3 1</h2>
          <p className='text-xl font-bold text-[#000000] mt-1'>Rs. 25,000.00</p>
        </div>

     
        <div className='text-start'>
          <Image
            src='/Product2.png'
            alt='Product 2'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='text-lg font-medium mt-20'>Granite dining table with dining chair</h2>
          <p className='text-xl font-bold text-[#000000] mt-1'>Rs. 25,000.00</p>
        </div>

      
        <div className='text-start'>
          <Image
            src='/Product3.png'
            alt='Product 3'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='text-lg font-medium mt-4'>Outdoor bar table and stool</h2>
          <p className='text-xl font-bold text-[#000000] mt-1'>Rs. 25,000.00</p>
        </div>

        <div className='text-start'>
          <Image
            src='/Product4.png'
            alt='Product 4'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='text-lg font-medium mt-20'>Plain console with teak mirror</h2>
          <p className='text-xl font-bold text-[#000000] mt-1'>Rs. 25,000.00</p>
        </div>
      </div>
      <div className='flex justify-center p-16 '>
        <span className='border-[#000000] border-b-2 p-2 text-xl'> <Link href="/shop">View More</Link></span>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
