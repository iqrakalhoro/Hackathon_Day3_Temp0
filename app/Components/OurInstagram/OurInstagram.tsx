import Image from 'next/image';

export default function OurInstagram() {
  return (
    <section className="relative flex lg:items-center justify-center lg:h-[450px] ">
  
      <div className="absolute inset-0">
        <Image
          src="/Rectangle 17.png"
          alt="Background"
          height={450}
          width={1440}
        />
      </div>

      <div className="relative z-10 text-center px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-4">
          Our Instagram
        </h2>
        <p className="text-lg sm:text-xl text-[#000000] mb-6">
          Follow our store on Instagram 
        </p>
        <button className="inline-block px-14 py-3 text-[#000000]  text-lg rounded-full shadow-lg bg-[white] transition"
        >
          Follow Us
        </button>
      </div>
    </section>
  );
}
