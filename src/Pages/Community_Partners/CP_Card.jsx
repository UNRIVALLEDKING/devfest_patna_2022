import React from "react";
import website from "../../assets/Icons/website.svg";
import twitter from "../../assets/Icons/twitter.svg";
import linkedin from "../../assets/Icons/linkedin.svg";
import instagram from "../../assets/Icons/instagram.png";

export default function CP_Card({ item }) {
  return (
    <>
      <div className="bg-zinc-900 p-4 w-[90%] min-h-[200px] my-4 lg:w-2/5 flex items-center flex-col lg:flex-row justify-center rounded shadow-md">
        <div className="w-2/5 lg:w-2/5 rounded relative bg-transparent mr-2">
          <img
            src={item.logo}
            alt={item.name}
            className="rounded bg-white shadow-lg"
          />
        </div>
        <div>
          <h1 className="mt-3 text-3xl">{item.name}</h1>
          <div className="flex justify-center lg:justify-start content-baseline gap-2">
            {item.url ? (
              <a target="_blank" href={item.url}>
                <img
                  src={website}
                  alt="community page"
                  className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
            {item.linkedin ? (
              <a target="_blank" href={item.linkedin}>
                <img
                  src={linkedin}
                  alt="community page"
                  className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
            {item.twitter ? (
              <a target="_blank" href={item.twitter}>
                <img
                  src={twitter}
                  alt="community page"
                  className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
            {item.instagram ? (
              <a target="_blank" href={item.instagram}>
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-8 hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
