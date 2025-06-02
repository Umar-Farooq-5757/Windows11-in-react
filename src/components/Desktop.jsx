import React from "react";
import github from "../images/desktop/github.png";
import explorer from "../images/desktop/explorer.png";
import store from "../images/desktop/store.png";

const Desktop = () => {
  const desktopIcons = [
    { logo: explorer, text: "Explorer", link: "#", target: "" },
    { logo: store, text: "Store", link: "#", target: "" },
    {
      logo: github,
      text: "Github",
      link: "https://github.com/Umar-Farooq-5757/Windows11-in-react",
      target: "_blank",
    },
  ];
  return (
    <section className="pl-3 pt-2 cursor-default flex flex-col flex-wrap gap-4 items-start grow justify-start">
      {desktopIcons.map((icon) => {
        return (
          <div
            key={icon.text}
            className="transition-all hover:bg-[#b4cfe2] py-2 px-3 active:scale-75 flex flex-col items-center justify-between gap-1"
          >
            <a href={icon.link} target={icon.target}>
              <img className="w-10 h-10" src={icon.logo} alt={icon.text} />
            </a>
            <span className="text-white text-xs">{icon.text}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Desktop;
