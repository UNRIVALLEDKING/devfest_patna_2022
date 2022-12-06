import React from "react";
import "./home.css";
import GDG from "../../assets/GDG.png";
import DevFestCrowd from "../../assets/DevFestCrowd.jpg";
import DevFest from "../../assets/DevFest.svg";
import Calender from "../../assets/Calender.svg";
import Map from "../../assets/Map.svg";

export default function Home() {
  return (
    <div
      id="home"
      className="pt-12 h-[100vh] flex flex-col items-center justify-center relative bg-[rgba(0,0,0,0.6)]"
    >
      <div
        style={{
          background: `url(${DevFestCrowd})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`h-[100vh] absolute w-full top-0 left-0 -z-10 blur-[1px]`}
      ></div>
      <div className="text-center">
        <div className="flex w-[100%] items-center justify-center p-6">
          <div className="w-[25%] lg:w-[5%]">
            <img src={GDG} alt="Google Developer Groups Patna" />
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl whitespace-nowrap">
              Google Developer Groups
            </h1>
            <p className="text-[18px] lg:text-2xl text-start">Patna</p>
          </div>
        </div>
        <p className="text-center text-xl lg:text-2xl">Presents</p>
        <div className="flex items-center justify-center">
          <img
            src={DevFest}
            alt="DevFest Patna 2022"
            className="w-[50%] lg:w-[600px] inline-block"
          />
          <span className="font-googleBold text-2xl lg:text-8xl ml-2 whitespace-nowrap">
            | Patna
          </span>
        </div>
        <div className="lg:text-4xl">
          <h2>Bihar's most awaited developer conference</h2>
          <div className="flex items-center justify-center text-[14px] lg:text-2xl">
            <img src={Calender} alt="date" className="w-[30px] lg:w-[50px]" />
            <p>24th Dec 2022</p>
            {/* <p>TBA</p> */}
            <span className="w-[20px] aspect-square bg-white m-2 mx-4 rounded-xl"></span>
            <p>9 AM onwards</p>
            {/* <p>TBA</p> */}
          </div>
          <div className="flex justify-center items-center text-[14px] lg:text-2xl">
            <img src={Map} alt="location" className="w-[30px] lg:w-[50px]" />
            <p>Sahu Jain Hall, Bihar Chamber of Commerce, Patna</p>
          </div>
          <a className="text-white" href="#register">
            <button className="bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.5)] mr-3 hover:text-black transition-all ease-in-out duration-500 px-4 py-2 text-lg hover:translate-y-1">
              Register Now
            </button>
          </a>
          <a
            className="text-white"
            target="_blank"
            title="Call For Presentation"
            href="https://sessionize.com/devfest22patna/"
          >
            <button className="bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.5)] hover:text-black transition-all ease-in-out duration-500 px-4 py-2 text-lg hover:translate-y-1">
              CFP
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
