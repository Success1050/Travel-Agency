"use client";
import HeaderComponent from "@/components/HeaderComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

const RequestPage = () => {
  const [countries, setCountries] = useState([]);

  const [type, settype] = useState("text");
  const [type2, settype2] = useState("text");
  const [isDropdown, setIsdropdown] = useState(false);
  const [flag, setFlag] = useState("");
  const [records, setRecords] = useState([]);
  console.log(records);

  const [code, setCode] = useState("");

  const [details, setDetails] = useState({
    lastname: "",
    firstname: "",
    nationality: "",
    class: "",
    company: "",
    email: "",
    comment: "",
    adult: "",
    child: "",
    infant: "",
    phonenumbers: "",
    from: "",
    to: "",
    depDate: "",
    Airline: "",
    retDate: "",
  });

  // console.log(details.lastname);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const filter = (e) => {
    setRecords(
      countries.filter((country) =>
        country.cca2.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setRecords(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  const toggleTypes = () => {
    settype((prevType) => (prevType === "text" ? "date" : "text"));
  };
  const toggleTypes2 = () => {
    settype2((prevType) => (prevType === "text" ? "date" : "text"));
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
              <h2 className='text-[18px] font-bold mb-4 cursor-pointer'>
                Flight Booking
              </h2>
              <h2 className='text-[18px] font-bold mb-4 cursor-pointer'>
                Hotel Booking
              </h2>
              <h2 className='text-[18px] font-bold mb-4 cursor-pointer'>
                Tours booking
              </h2>
            </div>
            <form action='#'>
              <div>
                <h4 className='mb-3 text-[18px] text-gray-700 font-medium'>
                  Personal details:
                </h4>
                <div className='flex flex-col sm:flex-row gap-4 sm:items-center items-start mb-4'>
                  <label
                    htmlFor='Lastname'
                    className='text-gray-700 mb-2 font-medium text-[16px]'
                  >
                    Lastname:
                  </label>
                  <input
                    type='text'
                    name='lastname'
                    value={details.lastName}
                    className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                    placeholder='Enter your Lastname'
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col sm:flex-row gap-4  mb-4 sm:items-center items-start'>
                  <label
                    htmlFor='firstname'
                    className='text-gray-700 mb-2 font-medium text-[16px]'
                  >
                    Firstname:
                  </label>
                  <input
                    type='text'
                    name='firstname'
                    value={details.firstName}
                    onChange={handleChange}
                    className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                    placeholder='Enter your Firstname'
                  />
                </div>
                <div className='flex flex-col sm:flex-row gap-4  mb-4 sm:items-center items-start'>
                  <label htmlFor='Nationality'>Nationality:</label>
                  <select
                    name='nationality'
                    value={details.nationality}
                    className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                  >
                    {countries.map((country) => {
                      return (
                        <option key={country.cca2} value={country.name.common}>
                          {country.name.common}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 sm:items-center items-start mb-4'>
                  <label
                    htmlFor='Company'
                    className='text-gray-700 mb-2 font-medium text-[16px]'
                  >
                    Company:
                  </label>
                  <input
                    type='text'
                    name='company'
                    onChange={handleChange}
                    className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                    placeholder='Enter your Company'
                  />
                </div>
                <div className='flex flex-col sm:flex-row gap-4 sm:items-center items-start mb-4'>
                  <label
                    htmlFor='Email'
                    className='text-gray-700 mb-2 font-medium text-[16px]'
                  >
                    Email:
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={details.email}
                    onChange={handleChange}
                    className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                    placeholder='Enter your Email'
                  />
                </div>
                <div className='flex flex-col sm:flex-row gap-4 sm:items-center items-start mb-4'>
                  <label
                    htmlFor='Phonenumber'
                    className='text-gray-700 mb-2 font-medium text-[16px]'
                  >
                    Phonenumber:
                  </label>
                  <div className='flex justify-between items-center w-full relative'>
                    <div className='flex flex-row justify-center items-center'>
                      <div
                        className='flex justify-between items-center p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in cursor-pointer'
                        onClick={() => setIsdropdown(!isDropdown)}
                      >
                        {flag ? <h2>{flag}</h2> : "🚩"}

                        <FaArrowDown />
                      </div>

                      {isDropdown && (
                        <div className='dropdown'>
                          <input
                            type='text'
                            className='sticky top-0 '
                            onChange={filter}
                          />
                          {records.map((record) => {
                            console.log(record);

                            return (
                              <div
                                className='flex flex-row justify-between gap-4 items-center cursor-pointer'
                                onClick={() => {
                                  setFlag(
                                    <img
                                      src={record.flags.svg}
                                      alt={record.cca2}
                                      className='w-[30px]'
                                    />
                                  );
                                  setIsdropdown(false);
                                  setCode("+" + record.ccn3);
                                }}
                                key={record.cca2}
                              >
                                <img
                                  src={record.flags.svg}
                                  alt={record.cca2}
                                  className='w-[40px]'
                                />
                                <h2>{record.cca3.toLowerCase()}</h2>

                                <p>
                                  {record.idd.root
                                    ? `${record.idd.root}${record.idd.suffixes[0]}`
                                    : "N/A"}
                                </p>
                              </div>
                            );
                          })}

                          {/* <div className='flex flex-row justify-between gap-4 items-center'>
                            <h2 className='w-[10%] bg-red-500'>🚩</h2>
                            <h2>+234</h2>
                          </div>
                          <div className='flex flex-row justify-between gap-4 items-center'>
                            <h2 className='w-[10%] bg-red-500'>🚩</h2>
                            <h2>+234</h2>
                          </div> */}
                        </div>
                      )}
                    </div>
                    <input
                      type='tel'
                      name='phonenumbers'
                      value={details.phonenumbers}
                      onChange={handleChange}
                      className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                      placeholder={`${code}`}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <h4 className='mb-3 text-[18px] text-gray-700 font-medium'>
                  Itinerary details:
                </h4>
                <div className='flex flex-col sm:flex-row gap-4  mb-4 sm:items-center items-start'>
                  <label
                    htmlFor='class'
                    className='text-gray-700 mb-2 font-medium text-[16px]'
                  >
                    Class:
                  </label>
                  <select
                    name='class'
                    value={details.class}
                    onChange={handleChange}
                    className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                  >
                    <option value='Economy class'>Economy class</option>
                    <option value='Business class'>Business class</option>
                    <option value='Premium Economy'>Premium Economy</option>
                  </select>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 items-start mb-4'>
                  <label
                    htmlFor='Schedules'
                    className='text-gray-700 my-2 font-bold text-[18px]'
                  >
                    Schedules:
                  </label>

                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input
                      type='text'
                      name='from'
                      value={details.from}
                      onChange={handleChange}
                      placeholder='Fly From'
                      className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                    />

                    <input
                      type='text'
                      name='to'
                      value={details.to}
                      onChange={handleChange}
                      placeholder='Fly To'
                      className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                    />

                    <input
                      type={type}
                      value={details.depDate}
                      name='depDate'
                      placeholder='Depature date'
                      onChange={handleChange}
                      className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                      onFocus={toggleTypes}
                    />

                    <input
                      type={type2}
                      name='retDate'
                      value={details.retDate}
                      onChange={handleChange}
                      placeholder='Arrival Date'
                      className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                      onFocus={toggleTypes2}
                    />
                  </div>
                </div>
                <div
                  className='flex
                  flex-col
                  sm:flex-row
                  gap-4
                  mb-4
                  sm:items-center
                  items-start'
                >
                  <label
                    htmlFor='Airlines'
                    className='text-gray-700 my-2 font-bold text-[18px] w-[20%]'
                  >
                    Prefered airline:
                  </label>
                  <input
                    type='text'
                    name='Airline'
                    value={details.Airline}
                    onChange={handleChange}
                    placeholder='specify your prefered airline'
                    className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                  />
                </div>
                <div className='flex flex-col sm:flex-row gap-4 sm:items-center items-start mb-4'>
                  <label
                    htmlFor='passengers'
                    className='text-gray-700 my-2 font-bold text-[18px]'
                  >
                    No. of passengers
                  </label>
                  <table className='table-auto'>
                    <thead>
                      <tr>
                        <th>Adult(Age 12+)</th>
                        <th>Children(2-11)</th>
                        <th>Infant(Under 2)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type='number'
                            name='adult'
                            value={details.adult}
                            onChange={handleChange}
                            placeholder='no. of Adults'
                            className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            name='child'
                            onChange={handleChange}
                            value={details.child}
                            placeholder='no. of children'
                            className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            name='infant'
                            value={details.infant}
                            onChange={handleChange}
                            placeholder='no. of infant'
                            className='w-full p-2 border-[1px] border-gray-300 rounded focus:border-gray-700 transition-all duration-300 ease-in'
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className='flex
                  flex-col
                  sm:flex-row
                  gap-4
                  mb-4
                  sm:items-center
                  items-start'
                >
                  <label htmlFor='comments'>Additional Comments</label>
                  <textarea
                    name='comment'
                    onChange={handleChange}
                    value={details.comment}
                    rows={7}
                    placeholder='Write Message'
                    className='w-full p-2 border border-gray-300 rounded resize-none'
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default RequestPage;
