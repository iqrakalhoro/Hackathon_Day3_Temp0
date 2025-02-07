import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductDetails from '@/app/asgaardSofa/page';

const NewArrivalSection = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center p-8 bg-[#FFF9E5]'>

      <div className='lg:w-1/2 w-full'>
        <Image
          src='/Asgaard Sofa 1.png'
          alt='Asgaard Sofa'
          width={983}
          height={600}
          className='object-cover rounded-md'
        />
      </div>

  
      <div className='lg:w-1/2 w-full lg:pl-16 mt-8 lg:mt-0 text-center lg:text-left'>
        <p className='text-lg  text-[#000000] text-center'>New Arrivals</p>
        <h1 className='text-5xl font-bold mt-4 text-center'>Asgaard Sofa</h1>
        <div className='text-center'>
        <button className='mt-6 px-12 py-3 border border-[#000000] text-[#000000] text-lg font-medium hover:bg-[#FFF9E5] transition'>
         <Link href="/asgaardSofa"> Order Now </Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;
