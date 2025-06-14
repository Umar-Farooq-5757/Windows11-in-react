import React, { useState } from "react";
import { createPortal } from "react-dom";
import board from "../images/startmenu/board.png";
import calendar from "../images/startmenu/calendar.png";
import calculator from "../images/startmenu/calculator.png";
import camera from "../images/startmenu/camera.png";
import discord from "../images/startmenu/discord.png";
import edge from "../images/startmenu/edge.png";
import explorer from "../images/startmenu/explorer.png";
import getstarted from "../images/startmenu/getstarted.png";
import github from "../images/startmenu/github.png";
import mail from "../images/startmenu/mail.png";
import notepad from "../images/startmenu/notepad.png";
import settings from "../images/startmenu/settings.png";
import spotify from "../images/startmenu/spotify.png";
import store from "../images/startmenu/store.png";
import taskmanager from "../images/startmenu/taskmanager.png";
import terminal from "../images/startmenu/terminal.png";
import twitter from "../images/startmenu/twitter.png";
import vb from "../images/startmenu/vb.png";
import power from "../images/startmenu/power.png";
import Umar from "../images/startmenu/Umar.png";

const StartMenu = ({
  isStartMenuOpen,
  setIsStartMenuOpen,
  isDark,
  setIsTaskManagerOn,
  setIsNotepadOn,
}) => {
  const pinnedApps = [
    { icon: board, text: "Whiteboard", handler: () => {} },
    { icon: calendar, text: "Calendar", handler: () => {} },
    { icon: calculator, text: "Calculator", handler: () => {} },
    { icon: camera, text: "Camera", handler: () => {} },
    { icon: discord, text: "Discord", handler: () => {} },
    { icon: edge, text: "Browser", handler: () => {} },
    { icon: explorer, text: "File Explorer", handler: () => {} },
    { icon: getstarted, text: "Get Started", handler: () => {} },
    { icon: github, text: "Github", handler: () => {} },
    { icon: mail, text: "Mail", handler: () => {} },
    {
      icon: notepad,
      text: "Notepad",
      handler: () => {
        setIsNotepadOn(true);
        setIsStartMenuOpen(false);
      },
    },
    { icon: settings, text: "Settings", handler: () => {} },
    { icon: store, text: "Store", handler: () => {} },
    { icon: vb, text: "Dictionary", handler: () => {} },
    { icon: twitter, text: "Twitter", handler: () => {} },
    {
      icon: taskmanager,
      text: "Task Manager",
      handler: () => {
        setIsTaskManagerOn(true);
        setIsStartMenuOpen(false);
      },
    },
    { icon: terminal, text: "Terminal", handler: () => {} },
    { icon: spotify, text: "Spotify", handler: () => {} },
  ];
  const recommendedApps = [
    { icon: mail, text: "Mail" },
    { icon: twitter, text: "Twitter" },
    { icon: terminal, text: "Terminal" },
    { icon: explorer, text: "File Explorer" },
    { icon: github, text: "Github" },
    { icon: spotify, text: "Spotify" },
  ];

  return createPortal(
    <div
      onClick={() => {
        setIsStartMenuOpen(false);
      }}
      className={`${
        isStartMenuOpen ? "" : "hidden"
      } fixed top-0 left-0 bottom-0 right-0`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed select-none overflow-hidden bottom-[56px] left-[50%] p-5 px-10 pt-7 rounded-md shadow-2xl w-[50vw] h-[81vh] -translate-x-[50%] 
          ${isDark ? "bg-[#242424] text-white" : "bg-[#dbe0ef] text-black"}
          '}`}
      >
        <section className="pinned">
          <div className="flex mb-4 items-center justify-between">
            <h2 className="font-semibold">Pinned</h2>
            <button
              className={`${
                isDark ? "bg-[#43505e]" : "bg-[#fdfdfe]"
              } rounded-sm text-[11px] py-[2px] px-2 shadow-md`}
            >
              All apps &gt;
            </button>
          </div>
          <div className="pinned-apps grid grid-cols-6">
            {pinnedApps.map((app) => {
              return (
                <div
                  key={app.text}
                  onClick={app.handler}
                  className={`pinned-app ${
                    isDark ? "hover:bg-[#3a4d61]" : "hover:bg-white"
                  }  rounded-md px-[10px] py-4 transition-all flex flex-col justify-between gap-1 items-center`}
                >
                  <img width={34} src={app.icon} alt={app.text} />
                  <span className="text-xs">{app.text}</span>
                </div>
              );
            })}
          </div>
        </section>
        <section className="recommended select-none absolute bottom-20 left-0 right-0 px-[44px]">
          <h2 className="font-semibold mb-3">Recommended</h2>
          <div className="recommended-apps grid grid-cols-2">
            {recommendedApps.map((app) => {
              return (
                <div
                  key={app.text}
                  className={`pinned-app ${
                    isDark ? "hover:bg-[#3a4d61]" : "hover:bg-white"
                  }  rounded-md px-[10px] py-3 transition-all flex justify-start gap-3 items-center`}
                >
                  <img width={34} src={app.icon} alt={app.text} />
                  <span className="text-sm">{app.text}</span>
                </div>
              );
            })}
          </div>
        </section>
        <section
          className={`footer ${
            isDark ? "bg-[#1c1c1c]" : "bg-[#d4dae7]"
          }  border-t border-gray-400 absolute bottom-0 right-0 left-0 px-[44px] py-2 flex items-center justify-between`}
        >
          <div
            className={`profile ${
              isDark ? "hover:bg-[#3a4d61]" : "hover:bg-white"
            }  px-5 py-2 rounded-sm flex justify-start items-center gap-3`}
          >
            <img
              className="rounded-full max-w-full h-auto"
              width={20}
              src={Umar}
              alt="Profile"
            />
            <span className="text-xs">Umar Farooq</span>
          </div>
          <div
            className={`p-2 ${
              isDark ? "hover:bg-[#3a4d61]" : "hover:bg-white"
            } rounded-sm`}
          >
            <img
              width={20}
              style={isDark ? { filter: "invert(0)" } : { filter: "invert(1)" }}
              src={power}
              alt="Power"
            />
          </div>
        </section>
      </div>
    </div>,
    document.querySelector("#portal")
  );
};

export default StartMenu;
