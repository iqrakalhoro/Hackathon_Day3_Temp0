import React from "react";
import Image from "next/image";
import { FaUser, FaCalendar, FaTag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";



const posts = [2, 3];
const imageSources = [
  '/box1.png',
  '/box2.png',
  '/box3.png',
  '/box4.png',
  '/box5.png',
];
const titles = [
  'Going all-in with millennial design',
  'Exploring new ways of decorating',
  'Handmade pieces that took time to make',
  'Modern home in Milan',
  'Colorful office redesign',
]; 

const Blog = () => {
  return (
    <div className=" min-h-screen">
     
       <div className="relative">
                        <Image
                          src="/blog.jpeg"
                          alt="Shop Banner"
                          height={400}
                          width={1500}
                        />
                      </div>
     

      <div className="container mx-auto px-4 lg:p-44 sm:p-0 my-6 grid md:grid-cols-3 gap-8">
    
        <div className="md:col-span-2">
     
          <div className="mb-8">
            <Image
            src='/blog1.png'
            alt=''
            height={500}
            width={817}
            ></Image>
            <div className="flex items-center space-x-4 text-sm text-[#9F9F9F] mt-2 p-4">
              <span className="flex items-center gap-2">
              <FaUser></FaUser> Admin
              </span>
              <span className="flex items-center gap-2">
              <FaCalendar></FaCalendar> 14 Oct 2022
              </span>
              <span className="flex items-center gap-2">
              <FaTag></FaTag> Wood
              </span>
            </div>
            <h2 className="text-xl mt-2">Going all-in with millennial design</h2>
            <p className="text-[#9F9F9F] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <button className="text-[#000000] hover:underline mt-2 border-b-[1px] border-[#000000]">
              Read more
            </button>
          </div>

          {posts.map((post, index) => (
            <div key={post} className="mb-8">
              <div className="mb-8">
            <Image
            src={index === 0 ? '/blog2.png' : '/blog3.png'}
            alt=''
            height={500}
            width={817}
            ></Image>
            </div>
              <div className="flex items-center space-x-4 text-sm text-[#9F9F9F] mt-2 p-2">
                <span className="flex items-center gap-2">
                <FaUser></FaUser> Admin
                </span>
                <span className="flex items-center gap-2">
                <FaCalendar></FaCalendar> 14 Oct 2022
                </span>
                <span className="flex items-center gap-2">
                  <FaTag></FaTag> Wood
                </span>
              </div>
              <h2 className="text-xl mt-2">
              Exploring new ways of decorating {post}
              </h2>
              <p className="text-[#9F9F9F] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <button className="text-[#000000] hover:underline mt-2 border-b-[1px] border-[#000000]">
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div>
         
          <div className='relative text-black  border border-[#9F9F9F] rounded-md '>

            <input
              type="text"
              placeholder=""
              className="w-[90%] px-4 py-2  border-none outline-none"/>
      <FiSearch className="w-5 h-5 text-[#000000] absolute right-3 top-1/2 transform -translate-y-1/2"></FiSearch>
            
          </div>

    
          <div className="mb-8 p-8">
            <h3 className="text-2xl  mb-4">Categories</h3>
            <ul className="text-[#9F9F9F] space-y-8">
              {[
                { name: 'Crafts', count: 2 },
                { name: 'Design', count: 8 },
                { name: 'Handmade', count: 7 },
                { name: 'Interior', count: 1 },
                { name: 'Wood', count: 6 },
              ].map((category) => (
                <li
                  key={category.name}
                  className="flex justify-between items-center"
                >
                  <span>{category.name}</span>
                  <span className=" text-[#9F9F9F] ">
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
            {imageSources.map((src, index) => (
                <li key={index} className="flex items-center space-x-4">
                   <Image
                          src={src}
                          alt={`Image for ${titles[index]}`}
                          height={80}
                          width={80}
                        />
                  <p className="text-[#000000] text-sm">
              {titles[index]}
              <br />
              <span className='text-[#9F9F9F] '>03 Aug 2022</span>
            </p>
          
                </li>
              ))}
            </ul>
          </div>

       
          
        </div>
        
      </div>

 
      <div className="flex justify-center space-x-2 lg:p-8 sm:p-2 mx-auto">
            <button className="px-6 py-4 bg-[#FBEBB5] text-[#000000] rounded-md hover:bg-[#FBEBB5] border-2 border-[#000000]">
              1
            </button>
            <button className="px-6 py-4 bg-[#FFF9E5] text-[#000000] rounded-md hover:bg-[#FBEBB5]">
              2
            </button>
            <button className="px-6 py-4 bg-[#FFF9E5] text-[#000000] rounded-md hover:bg-[#FBEBB5]">
              3
            </button>
            <button className="px-6 py-4 bg-[#FFF9E5] text-[#000000] rounded-md hover:bg-[#FBEBB5]">
              Next
            </button>
          </div>

      {/* Delivery Section */}
 <div className="bg-[#FAF4F4] px-4 sm:px-12 lg:px-24 lg:h-72 lg:p-24 mt-6">
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

export default Blog;
