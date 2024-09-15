import React from "react";

const BookingLayout = ({ children }) => {
  return (
    <div className='App  md:w-[70%] w-full mx-auto bg-slate-200 rounded-[8px] shadow-md p-0 md:p-8'>
      <div className='App-header m-8 md:m-0'>{children}</div>
    </div>
  );
};

export default BookingLayout;
