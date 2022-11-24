import React from "react";
import git from "../../assets/Icons/git.svg";
import twitter from "../../assets/Icons/twitter.svg";
import linkedin from "../../assets/Icons/linkedin.svg";

export default function TeamCard({ data, title }) {
  return (
    <>
      <h2 className="text-4xl text-start pl-4 mt-4">{title}</h2>
      <div className="flex items-center w-screen mt-7">
        <div className="container px-8 flex flex-wrap justify-center ml-auto mr-auto gap-8 items-start">
          {data.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center w-1/3 sm:w-2/5 md:w-3/5  lg:w-2/12"
            >
              <div
                className="relative flex justify-center items-center !bg-contain w-full !z-[40] rounded-full"
                style={{ background: `url(${item.image})` }}
              >
                {/* <div className="absolute w-[104%] aspect-square bg-primary -z-10 rounded-full -translate-x-1 -translate-y-1 overflow-hidden"></div> */}
                {/* <div
                  className={`absolute w-[104%] aspect-square -z-[2] rounded-full overflow-hidden bg-[${item.frame}]`}
                ></div> */}
                <img
                  className="rounded-[100%] aspect-square w-[100%] items-center object-cover z-30"
                  src={item.frame}
                  alt={item.name}
                />
              </div>
              <div className="mt-3 text-center cursor-default">
                <h3 className="text-xl">{item.name}</h3>
                <h4 className="text-gray-400">{item.desc}</h4>
              </div>
              <div className="flex flex-row justify-evenly w-full mt-2">
                {item.github ? (
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <img
                      src={git}
                      alt="github"
                      className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                    />
                  </a>
                ) : (
                  <></>
                )}
                <a href={item.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="linkedin"
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
    </>
  );
}
