import React from "react";

export default function Nav() {
  return (
    <>
      <div className="w-full fixed top-0">
        <ul className="flex w-full justify-evenly">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#partners">Partners</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#speakers">Speakers</a>
          </li>
        </ul>
      </div>
    </>
  );
}
