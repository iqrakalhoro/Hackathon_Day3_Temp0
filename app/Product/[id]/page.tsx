"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaGreaterThan } from "react-icons/fa";
import { urlFor } from '@/sanity/lib/image';
import QuantitySelector from '@/app/Components/QuantitySelector/QuantitySelector';
import { CartContext } from '@/app/context/CartContext';
import { data, Product } from '@/app/data';
import { useParams } from 'next/navigation';


const page =  ( ) => {
 
 const params = useParams();
  const products:Product = data.find((item:Product)=> item.id == params.id)

  
  
  const {addToCart,cart} = useContext(CartContext)
console.log(cart);

 if (!products) {
    return <div>Product not found</div>;
  }



  return (
    <div key={products.id}>
             <div className=" w-full px-10 pb-10">
        <p className="text-[#9F9F9F] flex gap-4 cursor-pointer"><Link href="/HeroSection">Home</Link>
        <span className="text-[#000000]"><FaGreaterThan /> </span> <Link href="/shop"> Shop </Link><span className="text-[#000000]"><FaGreaterThan /> </span>
  <span className="text-[#000000] border-l-2 border-[#9F9F9F] px-6">{products.name}</span></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 pl-32 gap-0">

        {/* Left */}
        <div className="flex flex-cols-2 items-center">
        <div className="flex flex-col gap-2 p-2">
      <div
        className=" justify-center items-right"
      >
        <Image
        key={products.id}
          src={urlFor(products.Image).url()}
          alt={products.name}
          height={76}
          width={76}
          objectFit="cover"
          className="rounded-md cursor-pointer hover:opacity-80"
          ></Image>
       
      </div>
</div>

          <div className="h-[550px] flex justify-center items-center mb-4 bg-[#FFF9E5] rounded-lg">
            <Image
              src={urlFor(products.Image).url()} 
              alt={products.name}
              objectFit="cover"
              className="rounded-lg "
              height={500}
              width={481}></Image>
            
          </div>
          
        </div>

        {/* Right Side*/}
        <div className="space-y-6 pt-24">
          
          <div>
            <h1 className="text-3xl text-[#000000] font-extrabold">{products.name}</h1>
            <p className="text-2xl text-[#9F9F9F] mt-2">Rs. {products.price}</p>
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
           {products.description}
          </p>

          <div className="flex items-center space-x-6">
           <QuantitySelector/>
        <button onClick={()=>{ addToCart(products); alert("Item Added to cart")}}>Add to cart</button>
          </div>
         
          <div className="space-y-2 "> 
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
  )
}

export default page