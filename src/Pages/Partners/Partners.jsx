import React from "react";
import "./partners.css";
import SponsorsCard from "./SponsorsCard";
import { Sponsors } from "./SponsorsList";

export default function Partners() {
  console.log(Sponsors);
  return (
    <div id="partners" className="pt-12">
      <h1 className="text-white text-center mt-3 mb-5">Sponsors</h1>
      <div className="flex items-center w-screen justify-center flex-wrap flex-col lg:flex-row gap-4">
        {Sponsors.map((item, id) => (
          <SponsorsCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
