import React from "react";
import Laptop from "../assets/laptop.jpg";

export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="" className="w-[500px] mx-auto my-4" />
        <div className="flx flex-col jusitify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur aut error saepe rem unde nulla repudiandae ea quod
            provident reprehenderit, quidem in eaque possimus necessitatibus
            nemo cum? Ipsum, quod inventore?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
