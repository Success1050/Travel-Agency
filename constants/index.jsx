import {
  FaPlane,
  FaUmbrellaBeach,
  FaHotel,
  FaCreditCard,
  FaCcVisa,
} from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    href: "/",
    label: "Home",
  },
  {
    id: "about",
    href: "/about",
    label: "About",
  },
  {
    id: "services",
    href: "/services",
    label: "Services",
  },
  {
    id: "request",
    href: "/requests",
    label: "Request",
  },
  {
    id: "contact",
    href: "/contact",
    label: "Contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaPlane />,
    name: "Flight Booking",
    desc: "We provide quick and easy flight booking services both local and international flights to make your travel hassle free",
  },
  {
    id: 2,
    icon: <FaHotel />,
    name: "Hotel Booking ",
    desc: "Book hotel at the best prices with our exclusive deals and discounts",
  },
  {
    id: 3,
    icon: <FaUmbrellaBeach />,
    name: "Beach Tours",
    desc: "Enjoy relaxing beach tours with all-inclusive packages and guided tours",
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    name: "Visa Processing",
    desc: "We process any kind of visa at very good discount.",
  },
];

export const cities = [
  {
    id: 1,
    img: "/img1.jpg",
    name: "Paris, France",
    desc: "Paris the most popular city in the world. Its is the most visited city in the world. It recently hosted the olympics",
  },
  {
    id: 2,
    img: "/img2.jpg",
    name: "London, England",
    desc: "London is the home to football lovers. One of the most decorated city in the world",
  },
  {
    id: 3,
    img: "/img3.jpg",
    name: "Newyork, USA",
    desc: "Newyork is the largest city in the united state and destination to many tourist",
  },
  {
    id: 4,
    img: "/img4.jpg",
    name: "Tokyo, Japan",
    desc: "Tokyo has grown to be the destination of tourists who wants to see the world latest innovations",
  },
];

export const testimonials = [
  {
    id: 1,
    img: "/cus1.jpg",
    name: "Mr Jones ",
    desc: "This agency has been very deligent in executing their job. They have always given me good fares and prices.",
  },
  {
    id: 2,
    img: "/cus2.jpg",
    name: "Mr Paul Peter",
    desc: "This agency has been very deligent in executing their job. They have always given me good fares and prices.",
  },
  {
    id: 3,
    img: "/cus2.jpg",
    name: "Mrs Lydia Anna",
    desc: "This agency has been very deligent in executing their job. They have always given me good fares and prices.",
  },
];
