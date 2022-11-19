import React from "react";
import Speaker from "../../Components/speaker/Speaker";
import "./speakers.css";

export default function Speakers() {
  return (
    <div id="speakers" className="pt-12">
      <h1 className="text-secondary">Speakers</h1>
      <div className=" mt-10 flex items-center w-screen min-h-screen">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <Speaker />
        </div>
      </div>
    </div>
  );
}
