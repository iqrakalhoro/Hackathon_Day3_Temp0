import React from 'react';
import Image from 'next/image';

const ProductSection = () => {
  return (
    <div className='p-8'>
      {/* Section Heading */}
      <div className='text-center mb-8'>
        <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold'>Top Picks for you</h1>
        <p className='text-[#9F9F9F] mt-2 sm:text-sm'>
        Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>

      {/* Product Grid */}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Product 1 */}
        <div className='text-center'>
          <Image
            src='/Product1.png'
            alt='Product 1'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='lg:text-lg sm:text-sm font-medium mt-4'>Trenton modular sofa_3 1</h2>
          <p className='lg:text-xl sm:text-lg font-bold text-black mt-1'>Rs. 25,000.00</p>
        </div>

        {/* Product 2 */}
        <div className='text-start'>
          <Image
            src='/Product2.png'
            alt='Product 2'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='lg:text-lg sm:text-sm font-medium mt-24'>Granite dining table with dining chair</h2>
          <p className='lg:text-xl sm:text-lg font-bold text-black mt-1'>Rs. 25,000.00</p>
        </div>

        {/* Product 3 */}
        <div className='text-start'>
          <Image
            src='/Product3.png'
            alt='Product 3'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='lg:text-lg sm:text-sm font-medium mt-4'>Outdoor bar table and stool</h2>
          <p className='lg:text-xl sm:text-lg font-bold text-black mt-1'>Rs. 25,000.00</p>
        </div>

        {/* Product 4 */}
        <div className='text-start'>
          <Image
            src='/Product4.png'
            alt='Product 4'
            width={300}
            height={300}
            className='mx-auto'
          />
          <h2 className='lg:text-lg sm:text-sm font-medium mt-24'>Plain console with teak mirror</h2>
          <p className='lg:text-xl sm:text-lg font-bold text-black mt-1'>Rs. 25,000.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
