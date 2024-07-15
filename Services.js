import React from 'react';

const services = [
  { number: '01', title: 'Web Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
  { number: '02', title: 'Mobile Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
  { number: '03', title: 'UI/UX Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
  { number: '04', title: 'Software Quality Assurance', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
];

const Services = () => {
  return (
    <div className="bg-violet-950 text-white p-10 rounded-lg h-96 w-1/2 mt-10 flex justify-between items-start">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold mb-2">What can we do for you?</h1>
        <p className="text-slate-300 text-base mb-5 mt-10">
          We have some of the best services for you, services carried<br />
          out by professionals in their fields
        </p>
        <h2 className="text-xl text-orange-500 mb-10 mt-10">4 Best services provided for you</h2>

        <div className="flex justify-center mb-10 -mt-10">
          <svg viewBox="10 0 570 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,10 Q100,0 190,10" stroke="#fadd00e6" strokeWidth="4" fill="none" />
          </svg>
        </div>
      </div>

      <div className="ml-96 justify-between absolute">
        <ul className="space-y-4 -mt-5">
          {services.map((service, index) => (
            <li key={index} className="flex">
              <strong className="text-purple-300 mr-2 ml-52">{service.number}</strong>
              <div>
                <p className="font-bold text-black">{service.title}</p>
                <p className="text-slate-300">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
