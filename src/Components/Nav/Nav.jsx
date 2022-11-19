import React, { useEffect, useState } from "react";
import Menu from "./Menu.json";
import DevFest from "../../assets/DevFest.svg";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <div
        className={`w-full fixed top-0 flex items-center justify-between p-2 border-b-[1px] z-50 ${
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
          <span className="font-googleBold text-2xl lg:text-4xl ml-2">
            | Patna
          </span>
        </div>
        <ul className="hidden lg:flex justify-evenly">
          {Menu.map((item, id) => (
            <li className="mx-1" key={id}>
              <a
                className={`min-w-full text-white whitespace-nowrap ${
                  id === 0 ? "bg-primary" : ""
                } px-4 py-2 rounded-full hover:bg-secondary`}
                href={item.url}
                target={item.title === "Register Now" ? "_blank" : "_self"}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Responsive Nav for Mobiles */}
        <div
          onClick={() => setToggle(!toggle)}
          className="lg:hidden flex fles-1 justify-end items-center"
        >
          <img src={toggle ? menu : close} className="animate-bounce w-8" />
          <div
            className={`fixed right-1 top-[3rem] p-2 rounded bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] z-50 ${
              toggle ? "hidden" : "flex"
            }`}
          >
            <ul
              className={`list-none relative ${
                toggle ? "hidden" : "flex"
              } flex flex-col justify-center item-end`}
            >
              {Menu.map((item, id) => (
                <li className="mx-1 my-2" key={id}>
                  <a
                    className={`min-w-full text-white whitespace-nowrap ${
                      id === 0 ? "bg-primary" : ""
                    } px-4 py-2 rounded-full hover:bg-secondary`}
                    href={item.url}
                    target={item.title === "Register Now" ? "_blank" : "_self"}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
