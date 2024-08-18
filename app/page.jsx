import { cities, services, testimonials } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className='h-screen bg-cover relative bg-center'
        style={{ backgroundImage: "url(/travelBanner.jpg)" }}
      >
        <div className='absolute flex justify-center items-center inset-0 flex-col'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center md:text-left'>
            Explore The World With Us
          </h1>
          <p className='text-lg md:text-2xl text-white mb-8 text-center md:text-left'>
            Discover Amazing Places At Exclusive Deals
          </p>
          <button
            type='button'
            className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform  transition-all duration-300 hover:scale-105'
          >
            Get Started
          </button>
        </div>
      </section>

      <section className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h3 className='text-3xl font-bold text-center mb-8'>
            Popular Destination
          </h3>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {cities.map((city) => {
              const { id, name, img, desc } = city;
              return (
                <div
                  key={id}
                  className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'
                >
                  <Image
                    src={img}
                    alt={name}
                    width={10}
                    height={10}
                    layout='responsive'
                    className='object-cover transform hover:scale-110 duration-300 cursor-pointer'
                  />
                  <div className='p-4'>
                    <h4 className='text-xl font-bold mb-2'>{name}</h4>
                    <p className='text-gray-600'>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='flex sm:flex-row flex-col justify-between sm:items-start items-center'>
            <h3 className='text-3xl font-bold text-center mb-8'>
              Our Services
            </h3>

            <button
              className='w-fit p-4 rounded-[6px] text-white bg-blue-500 border-[1px] border-blue-500 border-solid text-center sm:mb-0 mb-3 transform transition-all duration-300 active:scale-[0.9]'
              type='submit'
            >
              View All
            </button>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {services.map((service) => {
              const { id, name, icon, desc } = service;
              return (
                <div
                  key={id}
                  className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform motion'
                >
                  <div className=' flex justify-center my-4 text-blue-500 text-4xl'>
                    {icon}
                  </div>

                  <div className='p-2'>
                    <h4 className='text-xl font-bold mb-2 text-center'>
                      {name}
                    </h4>
                    <p className='text-gray-600 text-center'>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='flex sm:flex-row flex-col justify-between sm:items-start items-center'>
            <h3 className='text-3xl font-bold text-center mb-8'>
              What our clients say about us
            </h3>

            <button
              className='w-fit p-4 rounded-[6px] text-white bg-blue-500 border-[1px] border-blue-500 border-solid text-center sm:mb-0 mb-3 transform transition-all duration-300 active:scale-[0.9]'
              type='submit'
            >
              View All
            </button>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {testimonials.map((testimonial) => {
              const { id, name, img, desc } = testimonial;
              return (
                <div
                  key={id}
                  className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform motion py-4'
                >
                  <div className=' flex justify-center my-4  text-4xl'>
                    <Image
                      src={img}
                      alt={name}
                      width={100}
                      height={100}
                      className='rounded-full transform hover:scale-110 duration-300 h-24 w-24 cursor-pointer'
                    />
                  </div>

                  <div className='p-2'>
                    <h4 className='text-xl font-bold mb-2 text-center'>
                      {name}
                    </h4>
                    <p className='text-gray-600 text-center'>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
