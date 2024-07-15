import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container ml-14 mt-10 flex">
        <div className="flex flex-col">
          <h1 className='text-2xl'><strong>RumahSoftware</strong></h1>
          <p className='mt-10'>
            A place where you can order software creation <br /> 
            that is very systematic and neat. Assisted by <br /> 
            professionals in their field
          </p>
        </div>
        <div className="flex ml-36">
          <ul className="mr-10">
            <li className='mb-4'><strong>Menu</strong></li>
            <li className='mb-4 text-slate-500'>Home</li>
            <li className='mb-4 text-slate-500'>Services</li>
            <li className='mb-4 text-slate-500'>About</li>
            <li className='mb-4 text-slate-500'>Work</li>
            <li className='mb-4 text-slate-500'>Testimonials</li>
          </ul>

          <ul className="ml-10 mr-10 list-gap">
            <li className='mb-4'><strong>Portfolio</strong></li>
            <li className='mb-4 text-slate-500'>Dribble</li>
            <li className='mb-4 text-slate-500'>Behance</li>
            <li className='mb-4 text-slate-500'>Uplabs</li>
            <li className='mb-4 text-slate-500'>Instagram</li>
          </ul>

          <ul className="ml-10 list-gap">
            <li className='mb-4'><strong>Support</strong></li>
            <li className='mb-4 text-slate-500'>+62 0010 4494 1104</li>
            <li className='mb-4 text-slate-500'>support@rumahsoftware.com</li>
            <li className='mb-4 text-slate-500'>FAQ</li>
            <li className='mb-4 text-slate-500'>Help Center</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-indigo-950 p-4 mt-16 text-center text-white">
        © Copyright RumahSoftware. All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
