import { Card, Col, Row } from "antd";
import Image from "next/image";
import { mainServices } from "@/constants";
// import { visaImg } from "/img1.jpg";
const ServicesPage = () => {
  return (
    <>
      <section className='bg-gray-100'>
        <div
          className='relative h-screen bg-cover bg-center'
          style={{ backgroundImage: "url(/travelBanner.jpg)" }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h4 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>
              What We Offer
            </h4>
          </div>
        </div>

        <main className='m-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4'>
            {mainServices.map((services) => {
              const { id, name, img, desc } = services;
              return (
                <Card
                  style={{ width: "fit-content", padding: "10px" }}
                  className='min-h-[350px] '
                  key={id}
                >
                  <div className='flex flex-col justify-between items-center gap-4 w-full'>
                    <Image
                      src={img}
                      alt={name}
                      width={200}
                      height={200}
                      className='rounded-[10%]'
                    />

                    <div className='text-center'>
                      <h2 className='font-semibold text-black text-[18px] mb-3'>
                        {name}
                      </h2>
                      <p className='text-left text-[16px] w-full '>{desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
};

export default ServicesPage;
