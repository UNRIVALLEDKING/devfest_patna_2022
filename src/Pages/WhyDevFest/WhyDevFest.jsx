import React from "react";
import "./whydevfest.css";
import dvbaroda from "../../assets/dvbaroda.jpg"

export default function WhyDevFest() {
  return (
    <div id="why-DevFest" className="pt-12 m-0.5">
      <div class="m-4">
        <h3 className="text-3xl font-extrabold dark:text-white">Why DevFest?</h3>

      </div>




      <div className="md:flex p-3">
        <div
          class="flex justify-center p-3 my-4 mx-2 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
        >
          <img src={dvbaroda} alt="" />
        </div>
        <div
          class="flex justify-center p-3 my-4  mx-2 text-base border-2 border-gray-300 rounded-xl"
        >
          DevFest is an annual decentralized tech conference hosted by the Google Developer Groups (GDG) community. GDGs host these events around the globe. DevFest 2022 marks the 11th year of DevFest.
          <br />
          DevFest Patna is an initiative of GDG Patna bringing in the


          1st edition


          🤩 to people of Bihar with knowledge exchange,learning and networking opportunities!!
        </div>
      </div>
    </div>
  );
}
