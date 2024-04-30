// import React, { useState } from 'react';
import i1 from "../assets/1.jpg"




import React, { useState, useEffect } from 'react';

const i2 = "https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

 

function Slideshow({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden h-[1000px]">

        sarvottam
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* <img
            src={slide.image}
            alt={slide.alt}
            className="w-full   h-[800px] object-cover  transform "
          /> */}
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full   h-[800px] object-cover  transform "
          />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;

// h-[1500px] translate-y-[-800px]

function WisgetForOpacity(   ) {

  var array = [
    {
      name : "savitri pathan",
      img  : "https://www.google.com/imgres?q=avtar%20icnons&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F297%2Fnon_2x%2Fbeautiful-woman-avatar-character-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Favatar-icon&docid=CMSVxtGUyAqFnM&tbnid=61aCzZ2hMrrHgM&vet=12ahUKEwj_m_7KqeWFAxVO-TgGHRV-AskQM3oECBgQAA..i&w=980&h=980&hcb=2&ved=2ahUKEwj_m_7KqeWFAxVO-TgGHRV-AskQM3oECBgQAA",
      age :25,
      loc : "Indian",
      type : "agent"

    
    }
  ];

  return(

    <div className="h-56 w-20">

      <div  className="h-12 w-full">
        <img src={array[0].img} alt="" />
      </div>

      <h1 className="text-xl">{array[0].name}</h1>
      <h1 className="text-xl">{array[0].age}</h1>
      <h1 className="text-xl">{array[0].loc}</h1>
      <h1 className="text-xl">{array[0].type}</h1>





      </div>

  )
  
}