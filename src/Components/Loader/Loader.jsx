import React from "react";
import devfest from "../../assets/Loader/devfest.gif";
import "./loader.css";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen fixed top-0 left-0 w-full bg-transparent loader-animate">
      <img src={devfest} alt="devfest" className="w-[90%] sm:w-[auto]" />
    </div>
  );
}
