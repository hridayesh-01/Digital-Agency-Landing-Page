import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">RumahSoftware</div>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-orange-500 cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Work</li>
            <li className="cursor-pointer">Testimonial</li>
          </ul>
        </nav>
        <button className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-lime-500">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
