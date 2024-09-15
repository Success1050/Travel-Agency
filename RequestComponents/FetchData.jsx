import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [countries, setCountries] = useState([]);
  const [records, setRecords] = useState([]);
  // console.log(countries);

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

  return { countries, setCountries, records, setRecords };
};

export default FetchData;
