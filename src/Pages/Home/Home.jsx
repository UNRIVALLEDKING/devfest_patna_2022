import React from "react";
import "./home.css";
import GDG from "../../assets/GDG.png";
import DevFestCrowd from "../../assets/DevFestCrowd.jpg";

export default function Home() {
  return (
    <div id="home" className="pt-12 h-[100vh] relative bg-[rgba(0,0,0,0.6)]">
      <div
        style={{
          background: `url(${DevFestCrowd})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`h-[100vh] absolute w-full top-0 left-0 -z-10 blur-sm`}
      ></div>
      <div className="flex items-center justify-start">
        <div className="w-[25%] lg:w-[5%]">
          <img src={GDG} alt="Google Developer Groups Patna" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl">Google Developer Groups</h1>
          <p className="text-xl lg:text-2xl">Patna</p>
        </div>
      </div>
    </div>
  );
}
