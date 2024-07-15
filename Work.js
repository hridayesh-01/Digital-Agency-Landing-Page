import React from "react";
import img1 from '../img/img3.png';
import img2 from '../img/img4.png';
import img3 from '../img/iceland.png';
import img4 from '../img/Niagara Falls.jpeg';
import img5 from '../img/patagonia.png';
import img6 from '../img/Person.jpeg'; // Adjusted to the uploaded image path

const Work = () => {
    return (
        <div className="text-center text-4xl mt-16">
            <h1>Work that we can be proud of</h1>
            <div className="flex">
                <img src={img1} alt="Left Side" className="w-1/2 mt-10 ml-10" />
                <img src={img2} alt="Right Side" className="w-1/2 mt-10 ml-10" />
            </div>

            <div className="flex mb-10">
                <img src={img3} alt="Left Side" className="h-72 w-1/3 mt-10 ml-10" />
                <img src={img4} alt="Center" className="h-72 w-1/3 mt-10 ml-10" />
                <img src={img5} alt="Right Side" className="h-72 w-1/3 mt-10 ml-10" />
            </div>

            <div className="mb-10 text-3xl">
                <button className="rounded-2xl text-white bg-orange-400 hover:bg-amber-600 p-3 text-2xl">View All Work</button>
            </div>

            <div className="text-left bg-indigo-950 mt-10 p-10">
                <h2 className="text-white">Testimonials from our service users</h2>
                <div className="flex items-center mt-10">
                    <img src={img6} alt="Left Side" className="h-72 w-1/3 mt-10 ml-10" />
                    <div className="text-white ml-20">
                        <p className="text-xl mt-10">
                            “This is the second time I've ordered a system build here, and the
                            results have always been great. I would not doubt to recommend
                            this to my friends. This is so amazing!”
                        </p>
                        <p className="text-xl mt-10">
                            <u>Mark Andre Batistuta</u><br />
                            <p class="text-slate-400 mt-3">CEO Smackup.org</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
