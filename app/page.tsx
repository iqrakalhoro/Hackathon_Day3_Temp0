import React from 'react'
import Herosection from './Components/HeroSection/Herosection';
import SideTableSection from './Components/SideTable/SideTable';
import ProductSection from './Components/Product/Product';
import NewArrivalSection from './Components/NewArrivals/NewArrival';
import OurBlogsSection from './Components/OurBlogs/OurBlogsSection';
import OurInstagram from './Components/OurInstagram/OurInstagram';


const page = () => {
  return (
    <div> 
      <Herosection/>
      <SideTableSection/>
      <ProductSection/>
      <NewArrivalSection/>
      <OurBlogsSection/>
      <OurInstagram/>
    </div>
  )
}

export default page
