import React from "react";
import SNS from "./SNS";
import gdgpatna from "../../assets/gdgpatna.png";

export default function Footer() {
  return (
    <>
      <hr />

      <div
        style={{
          zIndex: "99",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(5px)",
          transition: "ease .8s",
        }}
        className="w-full text-white font-poppins px-2 py-2 sticky top-0 flex lg:flex-row flex-col justify-between items-center navbar my-0"
      >
        <div className="flex ml-2 items-center justify-start">
          <img src={gdgpatna} alt="GDG Patna" className="w-[60px]" />
          <h1 className="ml-2 lg:text-[28px] text-[18px] w-full">
            Google Developers Group Patna
          </h1>
        </div>
        <div className="lg:w-1/4 w-full flex lg:flex-row flex-col items-center">
          <span className="mr-2">Connect with us</span>
          <SNS />
        </div>
      </div>
    </>
  );
}
