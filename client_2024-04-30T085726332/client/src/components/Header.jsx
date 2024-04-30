import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../others/userContext'
import hallImg from '../assets/hall.png'

export default function Header() {

  // const {user} = useContext(UserContext);

  return (
    <header className="  flex justify-between  ">
    {/* <Link to={"/"} className="flex items-center gap-1">
      

      <img className=' h-6' src={hallImg}  alt=""   />
      <span className="font-bold text-xl ">Bookify</span>
    </Link> */}
   
   <div class="bg-cover bg-center bg-no-repeat h-screen" style={"background-image: url('https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2')"}>

    <Link  to="/port5/" className="text-black font-semibold text-[3rem]">WedHall<span className="text-blue-600">.</span></Link>



          <div className="  space-x-12 hidden  md:flex">
            {/* <Link to="/" className="  text-[1.1rem] font-medium   bg-gradient-to-r button1">
              Home
            </Link> */}
            {/* <a href="#" className="text-gray-400 text-[1.1rem] font-medium hover:text-gray-300">
              About
            </a> */}
            <Link to="/port5/blogs" className="text-gray-400 text-[1.1rem] font-medium hover:text-gray-300">
              Halls
            </Link>
            <a href="#" className="text-gray-400 text-[1.1rem] font-medium hover:text-gray-300">
              About
            </a>
            <Link to={"/port5/contact"} className="text-gray-400 text-[1.1rem] font-medium hover:text-gray-300">
              Contact
            </Link>


{/* ----------------------------------------- */}
            <Link  className=" flex gap-2 items-center border border-gray-300 rounded-full py-2 px-4 ">
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

      {/* {!!user &&(
        <div>{user.name}</div>
      )} */}
    </Link>
          </div>
          </div>

   

   
  </header>
  )
}

// export default Header;