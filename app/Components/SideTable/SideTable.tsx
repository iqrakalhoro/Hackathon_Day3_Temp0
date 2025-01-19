import React from 'react';
import Image from 'next/image';

const SideTableSection = () => {
  return (
    <div className='p-8 bg-[#FAF4F4]'>
    
      <div className='flex space-x-2'>
       
        <div className='text-center'>
          <Image
            src='/Mask group.png'
            alt='Side Table 1'
            height={562}
            width={605}
            className='block  lg:max-h-[523px] sm:max-h-[133px]'
          />
          
          <h2 className='lg:text-3xl sm:text-lg'>Side table</h2>
          <button className='mt-2 px-2 py-2 text-black font-medium border-b border-[#000000] lg:text-xl sm:text-sm'>
            View More
          </button>
        </div>


        <div className='text-center'>
          <Image
            src='/Image2.png'
            alt='Side Table 2'
            height={562}
            width={605}
            className='block  lg:max-h-[523px]'
          />
          <h2 className='lg:text-3xl sm:text-lg'>Side Table</h2>
          <button className='mt-2 px-2 py-2 text-black font-medium border-b border-[#000000] lg:text-xl sm:text-sm'>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideTableSection;
