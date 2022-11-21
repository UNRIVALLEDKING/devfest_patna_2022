import React from "react";
import { TeamList } from "./TeamList";
import git from "../../assets/Icons/git.svg";
import twitter from "../../assets/Icons/twitter.svg";
import linkedin from "../../assets/Icons/linkedin.svg";

export default function Team() {
  return (
    <div id="team" className="pt-12">
      <h2 className="text-primary text-5xl text-center">Meet Our Team</h2>
      <div className="flex items-center w-screen mt-7">
        <div className="container px-8 grid xxs:grid-cols-1 xs:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 ml-auto mr-auto gap-8 items-start">
          {TeamList.map((item, id) => (
            <div key={id} className="flex flex-col justify-center items-center">
              <div className="relative flex justify-center items-center ">
                <div className="absolute w-[104%] aspect-square bg-primary -z-10 rounded-full -translate-x-1 -translate-y-1 overflow-hidden"></div>
                <div className="absolute w-[104%] aspect-square bg-secondary -z-[2] rounded-full translate-x-1 translate-y-1 overflow-hidden"></div>
                <img
                  className="rounded-[100%] aspect-square w-[100%] items-center object-cover z-30"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="mt-3 text-center cursor-default">
                <h3 className="text-xl">{item.name}</h3>
                <h4 className="text-gray-400">{item.desc}</h4>
              </div>
              <div className="flex flex-row justify-evenly w-full mt-2">
                <a href={item.github} target="_blank" rel="noreferrer">
                  <img
                    src={git}
                    alt="twitter"
                    className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                  />
                </a>
                <a href={item.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="twitter"
                    className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                  />
                </a>
                <a href={item.twitter} target="_blank" rel="noreferrer">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
