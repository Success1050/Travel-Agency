import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <section className='bg-gray-100'>
        <div
          className='relative h-screen bg-cover bg-center'
          style={{ backgroundImage: "url(/travelBanner.jpg)" }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>
              About Giftnuels travels agency
            </h4>
          </div>
        </div>

        <div className='container mx-auto  px-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='flex items-center justify-center gap-8'>
              <Image
                src='/aboutpage.jpg'
                width={350}
                height={350}
                className='rounded-lg shadow-md w-[70%] h-auto'
              />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-bold mb-4'>Who we are</h3>
              <p className='text-gray-700 mb-4'>
                We are a passionate travel agency commited to providing the best
                travel experiences for our clients. Our team of dedicated
                professionals works tirelessly to ensure your trips are seemless
                and unforgettable.
              </p>

              <h3 className='text-2xl font-bold mb-4'>Our mission</h3>
              <p className='text-gray-700 mb-4'>
                Our mission is to create amazing travel experiences that inspire
                and enrich the lives of our clients. We believe in personalised
                services, attention to details and providing exceptional value
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
