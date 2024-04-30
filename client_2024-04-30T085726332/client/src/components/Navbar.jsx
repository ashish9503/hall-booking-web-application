import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../others/userContext';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(UserContext);


    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (

    <nav className="relative  h-[900px]">
      <img
        className="absolute c-0 w-full h-full bg-no-repeat object-cover"
        src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2"
        alt="Sample image"
      />

<div className="absolute inset-0 bg-black opacity-25">

  
</div>
<div className="absolute inset-0 flex flex-col  justify-center pl-60  h-[900px]  ">
        <h1 className="text-white   text-7xl font-normal ">Royalty Wedding</h1>
        <p className="text-white text-4xl font-normal mt-7 ">explore lowest wedding destination.</p>
      <button className='w-48 h-11 rounded-xl bg-pink-600  text-xl mt-[95px] text-white hover:bg-white hover:text-black '>Explore</button>
      </div>

<div className='absolute flex justify-between w-full  text-white h-32  items-center px-24'>
<Link  to="/port5/" className="text-white font-semibold text-[3rem]">WedHall<span className="text-blue-600">.</span></Link>



<div className="  space-x-12    md:flex">
 
  <Link to="/port5/blogs" className="  text-[1.1rem] font-medium hover:text-gray-300">
    Halls
  </Link>
  <a href="#" className="  text-[1.1rem] font-medium hover:text-gray-300">
    About
  </a>
  <Link to={"/port5/contact"} className="  text-[1.1rem] font-medium hover:text-gray-300">
    Contact
  </Link>


{/* ----------------------------------------- */}
<Link to={ user? 'account' :'/login'} className=" flex gap-2 items-center border border-gray-300 rounded-full px-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div className=" bg-gray-500 text-white rounded-full border border-gray-400  overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 relative top-1 "
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {!!user &&(
        <div>{user.name}</div>
      )}
    </Link>
  

</div>




</div>





      {/* <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-4xl font-bold">Overlay Text</p>
      </div> */}
      {/* <div className=" mx-auto px-4"> */}
        {/* <div className="flex justify-between   items-center"> */}


























         

           {/* <div className="flex md:space-x-8 space-x-2 "> */}
           {/* <a href='https://github.com/Sarvottam999' target='_blank' className="[&>svg]:h-5 [&>svg]:w-5 hover:bg-black p-2 rounded-full hover:[&>svg]:fill-[#fcfcfc] [&>svg]:fill-[#101010] bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a> */}

            {/* linkedin */}

            {/* <a href='https://www.linkedin.com/in/sarvottam-sharma/' target='_blank' className="[&>svg]:h-5 [&>svg]:w-5  hover:bg-black p-2 rounded-full hover:[&>svg]:fill-[#fcfcfc] [&>svg]:fill-[#101010] bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a> */}

            {/* twitter */}
            {/* <a href={"https://twitter.com/sarvottam999"} target={'_blank'} className="me-2 [&>svg]:h-5 [&>svg]:w-5 hover:bg-black p-2 rounded-full hover:[&>svg]:fill-[#fcfcfc] [&>svg]:fill-[#101010] bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>
            </a> */}

            {/* <!-- Instagram --> */}
            {/* <span className="[&>svg]:h-5 [&>svg]:w-5  bg-black p-1   rounded-full [&>svg]:fill-[#fcfcfc]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span> */}

              {/* Dropdown menu for small screens */}
          {/* <div className="md:hidden  ">
            <button onClick={toggleDropdown} className=" ite">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>

            </button>
          
          </div> */}
          {/* </div> */}
        {/* </div> */}

        {/* {isOpen && (
              <div className=" w-full md:hidden bg-gray-800 p-2 rounded-xl shadow-lg flex flex-col ">
                <Link to={"/port5/blogs"} className="block text-white py-2">Blogs</Link>
                <Link to={"/port5/#"} className="block text-white py-2">Shop</Link>

                <Link to="/port5/contact" className="block text-white py-2">Contact</Link>
              </div>
            )} */}
      {/* </div> */}

    
    </nav>
  );
}


