"use client";
import HeaderComponent from "@/components/HeaderComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Flight from "./bookings/Flight";
import Hotel from "./bookings/Hotel";
import Tours from "./bookings/Tours";

const RequestPage = () => {
  const [change, setChange] = useState("flight");

  const changeFunc = () => {
    switch (change) {
      case "flight":
        return <Flight />;

      case "hotel":
        return <Hotel />;

      case "tours":
        return <Tours />;

      default:
        return <Flight />;
    }
  };

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
              <h2
                onClick={() => setChange("flight")}
                className='text-[18px] font-bold mb-4 cursor-pointer'
              >
                Flight Booking
              </h2>
              <h2
                onClick={() => setChange("hotel")}
                className='text-[18px] font-bold mb-4 cursor-pointer'
              >
                Hotel Booking
              </h2>
              <h2
                onClick={() => setChange("tours")}
                className='text-[18px] font-bold mb-4 cursor-pointer'
              >
                Tours booking
              </h2>
            </div>

            {/* START OF FORM */}
            {changeFunc()}
            {/* END OF FORM */}
          </div>
        </section>
      </section>
    </>
  );
};

export default RequestPage;
