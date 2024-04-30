import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Slideshow from "../components/SlideShow.jsx";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    axios.get("/places").then((res) => {
      setPlaces(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("/places-by-name", {
        params: { name: searchName },
      })
      .then((res) => {
        setPlaces(res.data);
      });
  }, [searchName]);
  function searchByName() {
    // console.log(searchName);
    // axios.get("/places-by-name", {
    //     params: { name: searchName }
    //         }).then((res)=>{
    //             setPlaces(res.data);
    //         })
  }

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };
  return (
    <div className="flex justify-center flex-col items-center mx-auto">
      {/* <div className=" m-5 flex  w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 justify-evenly gap-2 border border-gray-300 rounded-full py-1 px-4 shadow-md  shadow-gray-300">
        <input
          className="h-10 "
          type="text"
          value={searchName}   
          onChange={handleChange}
          placeholder="Search by name"
        />
      </div> */}

      <h1 className="text-black text-5xl mt-10 w-full bg-red-400">Trending</h1>

      <div className=" grid   grid-cols-2  gap-x-56 gap-y-10   lg:grid-cols-4 mt-20"> 
      {/* //gap-x-16 gap-y-8 */}
        {places.length > 0 &&
          places.slice(0, 4).map((place) => (
            <Link to={"/place/" + place._id} className="border border-solid border-gray-200 rounded-2xl shadow-lg">
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                {place.photos?.[0] && (
                  <img
                    className="rounded-2xl object-cover aspect-square"
                    src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                    alt=""
                  />
                )}
              </div>
              <h2 className="font-bold">{place.address}</h2>
              <h3 className="text-sm text-gray-500">{place.title}</h3>
              <div className="mt-1">
                <span className="font-bold">${place.price}</span> per day
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
