import React from 'react';
import img1 from '../img/dubai.png';
import img2 from '../img/hero.png';
import img3 from '../img/img1.png';
import img4 from '../img/img2.png';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-violet-950 to-indigo-950 relative">
      <div className="bg-cover bg-center h-screen">
        <div className="absolute top-20 left-20 text-4xl text-white">
          Crafting digital products <br /> 
          for every user’s needs
        </div>
        <div className="absolute top-96 left-20 mt-10 text-slate-400">
          We are a software development agency with more than 10 years of <br /> 
          experience in the agency world. We provide various services for you <br /> 
          to build a software system
        </div>
        <div className="absolute left-20 mt-80">
          <button className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-teal-400">Explore Now</button>
        </div>
        <div className="absolute top-10 right-20">
          <img src={img1} alt="Right Side" className="w-96 h-96" />
        </div>
      </div>   

      <div class="container bg-white h-28 items-center flex">
        <div class="text text-slate-400 ml-5">
          Newest Partner
        </div>
        <img src={img2} alt="Right Side" className="w-96 h-28" />
        <img src={img3} alt="Right Side" className="w-96 h-28" />
        <img src={img4} alt="Right Side" className="w-96 h-28" />
      </div>      
    </div>

  );
};

export default HeroSection;
