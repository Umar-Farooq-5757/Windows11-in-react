import React from "react";
import view from "../images/contextMenu/view.png";
import sort from "../images/contextMenu/sort.png";
import refresh from "../images/contextMenu/refresh.png";
import newIcon from "../images/contextMenu/newIcon.png";
import display from "../images/contextMenu/display.png";
import personalize from "../images/contextMenu/personalize.png";
import terminal from "../images/contextMenu/terminal.png";
import info from "../images/contextMenu/info.png";

const ContextMenu = ({ menuPosition, isDark,setIsAboutOn }) => {
  if (!menuPosition.left) return;

  const itemsList = [
    { icon: view, text: "View", handler:()=>{} },
    { icon: sort, text: "Sort by", handler:()=>{} },
    { icon: refresh, text: "Refresh", handler:()=>{} },
    { icon: newIcon, text: "New", handler:()=>{} },
    { icon: display, text: "Display settings", handler:()=>{} },
    { icon: personalize, text: "Personalize", handler:()=>{} },
    { icon: terminal, text: "Open in Terminal", handler:()=>{} },
    { icon: info, text: "About", handler:()=>{setIsAboutOn(true)} },
  ];

  return (
    <div
      onContextMenu={(e) => e.stopPropagation()}
      className={`h-[330px] w-[310px] bg-[#f1f6fa] fixed rounded-md shadow-md p-2 flex flex-col justify-between ${
        isDark ? "bg-[#313131]" : "bg-[#f1f6fa]"
      }`}
      style={{ ...menuPosition }}
    >
      {/* <section className={`${isDark?'bg-[#313131]':'bg-[#f1f6fa]'}`}> */}

      {itemsList.map((item) => {
        return (
          <div
          onClick={item.handler}
            className={`flex items-center justify-start gap-3 hover:bg-[#dae1e5] p-2 rounded-sm cursor-default `}
          >
            <img className="w-4 h-4" src={item.icon} alt={item.text} />
            <span className="text-xs">{item.text}</span>
          </div>
        );
      })}
      {/* </section> */}
    </div>
  );
};

export default ContextMenu;
