"use client";
import HeaderComponent from "@/components/HeaderComponent";

import Flight from "./bookings/Flight";
import Hotel from "./bookings/Hotel";
import Tours from "./bookings/Tours";
import { useState } from "react";

const RequestPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const bookingContents = [<Flight />, <Hotel />, <Tours />];
  const bookingHeaders = ["Flights", "Hotel", "Tours"];

  return (
    <>
      <section className=' block w-full overflow-x-auto'>
        <HeaderComponent>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Make a reservation
          </h4>
        </HeaderComponent>

        <section className='container mx-auto px-0 md:px-4 py-12'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-bold mb-6'>Book a reservation</h3>
            <div className='flex flex-col sm:flex-row justify-center lg:gap-8 gap-4 flex-wrap  items-center mb-4'>
              {bookingHeaders.map((headers, index) => {
                return (
                  <h2
                    className={`text-[18px] font-bold mb-4 cursor-pointer transition-all duration-300 ease-in ${
                      activeTab == index
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-600"
                    }`}
                    key={index}
                    onClick={() => setActiveTab(index)}
                  >
                    {headers}
                  </h2>
                );
              })}
            </div>

            {/* START OF FORM */}
            {bookingContents[activeTab]}
            {/* END OF FORM */}
          </div>
        </section>
      </section>
    </>
  );
};

export default RequestPage;
