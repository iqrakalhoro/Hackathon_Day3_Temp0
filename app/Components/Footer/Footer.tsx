export default function Footer() {
    return (
      
        <div className="container mx-auto px-4 sm:px-8 text-[#000000] lg:p-20 sm:mt-0">
           
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
           
            <div className=" pr-[50px] mt-20">
            <p className="text-sm  text-[#9F9F9F]">
                400 University Drive Suite 200<br />
                Coral Gables, </p>
                <p className="text-sm  text-[#9F9F9F]">FL 33134 USA
              </p>
            </div>
  

            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 pl-14">
           
              <div>
                <h4 className="lg:text-lg text-[#9F9F9F] mb-2 sm:text-sm">Links</h4>
                <ul className="space-y-10 mt-10 sm:text-sm lg:text-lg">
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">Shop</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
  
           
              <div>
                <h4 className="lg:text-lg text-[#9F9F9F] mb-2 sm:text-sm">Help</h4>
                <ul className="space-y-10 mt-10 lg:text-lg sm:text-sm">
                  <li><a href="#" className="hover:underline">Payment options</a></li>
                  <li><a href="#" className="hover:underline">Return</a></li>
                  <li><a href="#" className="hover:underline">Privacy Policies</a></li>
                </ul>
              </div>
  
            
              <div>
                <h4 className=" text-[#9F9F9F] mb-2 lg:text-lg sm:text-sm">Newsletter</h4>
               
                <form className="mt-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="mt-8 text-[#000000] border-b-[1px] border-[#000000] lg:text-lg sm:text-sm "
                  />
                   </form>
              
              </div>
  
            
              <div>
              
                
                  <button
                    type="submit"
                    className=" mt-[60px] border-b-[1px] border-[#000000] lg:p-2 sm:text-sm"
                  >
                   SUBSCRIBE
                  </button>
               
              </div>
            </div>
          </div> 
          <footer className=" border-t-2 mt-9 p-5 lg:text-lg sm:text-sm">2022 Meubel House. All rights reverved</footer>
        </div>
    );
  }
  