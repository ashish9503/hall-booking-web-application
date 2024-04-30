import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Slideshow from "../components/SlideShow";
import Navbar from "../components/Navbar";

export default function Layout() {
  const slides = [
    {
      image: `https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2`,
      alt: "Slide 1",
    },
    {
      image: `https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      alt: "Slide 2",
    },
    {
      image: `https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      alt: "Slide 2",
    },
  ];
  return (
    <div>
      {/* <div className='py-4 px-8 flex flex-col min-h-screen'> */}
      <div className=" flex flex-col ">
        {/* <Header/> */}
        <Navbar />
        {/* <div className="w-full">
          <Slideshow slides={slides} />
        </div> */}
      </div>

      <Outlet />

      <Footer />
    </div>
  );
}
