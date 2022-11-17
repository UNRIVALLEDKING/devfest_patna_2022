import React, { useEffect, useState } from "react";
import Menu from "./Menu.json";
import DevFest from "../../assets/DevFest.svg";

export default function Nav() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <div
        className={`w-full fixed top-0 flex items-center justify-between p-2 border-b-[1px] ${
          scroll
            ? "bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px]"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="flex items-center justify-start">
          <img
            src={DevFest}
            alt="DevFest Patna 2022"
            className="w-[40%] sm:w-[40%] inline-block"
          />
          <span className="font-googleBold text-4xl ml-2">| Patna</span>
        </div>
        <ul className="hidden lg:flex justify-evenly">
          {Menu.map((item, id) => (
            <li className="mx-1" key={id}>
              <a
                className={`min-w-full text-white whitespace-nowrap ${
                  id === 0 ? "bg-primary" : ""
                } px-4 py-2 rounded-full hover:bg-secondary`}
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
