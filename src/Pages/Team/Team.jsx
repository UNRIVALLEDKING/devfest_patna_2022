import React from "react";
import { TeamList } from "./TeamList";

export default function Team() {
  return (
    <div id="team" className="pt-12">
      <h2 className="text-primary text-5xl">Team</h2>
      <div className=" mt-10 flex items-center w-screen min-h-screen">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          {TeamList.map((item, id) => (
            <h1 key={id}>{item.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}
