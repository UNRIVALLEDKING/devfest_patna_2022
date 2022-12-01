import React from "react";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

export default function SNS() {
  const SNS = [
    {
      title: "linkedin",
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/company/gdg-patna",
    },
    {
      title: "Telegram",
      icon: <BsTelegram />,
      url: "https://t.me/gdgpatna",
    },
    {
      title: "Facebook",
      icon: <BsFacebook />,
      url: "https://www.facebook.com/gdgpatna",
    },
    {
      title: "Instagram",
      icon: <AiFillInstagram />,
      url: "https://www.instagram.com/gdgpatna",
    },
    {
      title: "Twitter",
      icon: <AiFillTwitterSquare />,
      url: "https://twitter.com/gdgpatna",
    },
    {
      title: "Youtube",
      icon: <AiFillYoutube />,
      url: "https://www.youtube.com/c/GDGPatna",
    },
  ];
  return (
    <div className="flex text-3xl w-full justify-between">
      {SNS.map((item, id) => (
        <a
          className="text-white hover:text-primary transition-all hover:animate-bounce ml-1"
          key={id}
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
