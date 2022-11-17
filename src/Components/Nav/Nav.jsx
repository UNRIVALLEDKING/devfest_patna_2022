import React from "react";
import Menu from "./Menu.json";

export default function Nav() {
  return (
    <>
      <div className="w-full fixed top-0">
        <div>
          <img src="" alt="" />
        </div>
        <ul className="flex w-full justify-evenly">
          {Menu.map((item, id) => (
            <li className="w-full" key={id}>
              <a className="min-w-full" href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
