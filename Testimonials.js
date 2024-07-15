import React from 'react';
import img from '../img/Digital Agency.jpeg';


const testimonials = [
  { quote: 'Amazing service!', author: 'Client A' },
  { quote: 'Highly recommend.', author: 'Client B' },
];

const Testimonials = () => {
  return (
    // <section className="py-16 bg-gray-100">
    //   <div className="container mx-auto text-center">
    //     <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
    //     <div className="space-y-8">
    //       {testimonials.map(testimonial => (
    //         <div key={testimonial.author} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
    //           <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
    //           <p className="text-lg font-bold">{testimonial.author}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    

    <div class="bg-gradient-to-b from-blue-950 to-blue-950 text-white">
      <div class="container mx-auto py-12">
          <div class=" text-black -mt-96">
              <section className="py-16">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-semibold mb-8">Let's get to know about us</h2>
                  <div className="flex justify-center space-x-8">
                    <img src={img} alt="Right Side" className="w-96 h-96" />
                  </div>
                </div>
              </section>           
              <div class="text-center flex space-x-10 text-white">
                <h2 class="text-2xl font-bold mb-4">RumahSoftware</h2>
                <div class="flex justify-center space-x-8 mb-4">
                  <span class="text-3xl font-bold">100+</span>
                    <p class="mt-2">Total Projects</p>
                  <span class="text-3xl font-bold">250+</span>
                    <p class="mt-2">Total Clients</p>
                  <span class="text-3xl font-bold">15</span>
                    <p class="mt-2">Years of Experiences</p>   
                </div>
              </div>

              <div class="flex text-slate-400">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Testimonials;
