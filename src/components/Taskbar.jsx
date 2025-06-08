import React, { useState } from "react";
import img0 from "../images/taskbar/win11logo.png";
import explorer from "../images/taskbar/explorer.png";
import settings from "../images/taskbar/settings.png";
import edge from "../images/taskbar/edge.png";
import store from "../images/taskbar/store.png";
import spotify from "../images/taskbar/spotify.png";
import bluetooth from "../images/taskbar/bluetooth.png";
import {
  ChevronUpIcon,
  MagnifyingGlassIcon,
  WifiIcon,
  Battery50Icon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import Modal from "./Modal";
import NightLightModal from "./NightLightModal";
import StartMenu from "./StartMenu";

const Taskbar = ({
  setMenuPosition,
  isNightLightOn,
  setIsNightLightOn,
  isDark,
  setIsDark,
  setAreQuickSettingsOpen,
  areQuickSettingsOpen,
  setIsTaskManagerOn
}) => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const now = new Date();
  const formattedTime = format(now, "h:mm aa");
  const formattedDate = format(now, "dd/MM/yy");

  const taskbaricons = [
    { src: explorer, alt: "explorer logo" },
    { src: settings, alt: "settings logo" },
    { src: edge, alt: "edge logo" },
    { src: store, alt: "store logo" },
    { src: spotify, alt: "spotify logo" },
  ];

  return (
    <footer
      onClick={() => setAreQuickSettingsOpen(false)}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuPosition({});
      }}
      className={`fixed ${
        isDark ? "bg-[#313131]" : "bg-[#d2def5]"
      } z-10 flex justify-between items-center bottom-0 left-0 right-0 max-h-40 px-2 lg:px-6 py-0 overflow-hidden`}
    >
      <div></div>

      {/* MIDDLE */}
      <div className="flex justify-between items-center gap-3 justify-self-center ml-48">
        <div
          onClick={() => {
            setIsStartMenuOpen(!isStartMenuOpen);

          }}
          className={`py-2 px-1 ${isDark?'hover:bg-[#474747]':'hover:bg-white'}transition-all rounded-sm`}
        >
          <img
            className="h-6 w-6 active:scale-75 transition-all"
            src={img0}
            alt="windows 11 logo"
          />
        </div>
        <MagnifyingGlassIcon
          className={`w-6 h-6 active:scale-75 transition-all ${
            isDark ? "invert-100" : ""
          }`}
        />
        {taskbaricons.map((icon) => {
          return (
            <div
              key={icon.src}
              className={`py-2 px-2 ${isDark?'hover:bg-[#474747]':'hover:bg-white'}  transition-all rounded-sm`}
            >
              <img
                className="h-6 w-6 active:scale-75 transition-all"
                src={icon.src}
                alt={icon.alt}
              />
            </div>
          );
        })}
      </div>

      {/* RIGHT */}
      <div
        className={`flex justify-between items-center gap-1 ${
          isDark ? "text-white" : ""
        }`}
      >
        <div className={`py-2 rounded-sm ${isDark?'hover:bg-[#474747]':'hover:bg-white'} cursor-pointer transition-all`}>
          <ChevronUpIcon className="w-5 h-5" />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setAreQuickSettingsOpen(!areQuickSettingsOpen);
            setIsStartMenuOpen(false)
            setMenuPosition({});
          }}
          className={`flex justify-center items-center gap-2 py-2 px-1 rounded-sm ${isDark?'hover:bg-[#474747]':'hover:bg-white'} cursor-pointer transition-all`}
        >
          <div>
            <WifiIcon className="w-5 h-5" />
          </div>
          <div>
            <img
              className={`${isDark ? "invert-100" : ""} w-5 h-5`}
              src={bluetooth}
              alt="bluetooth"
            />
          </div>
          <div>
            <Battery50Icon className="w-5 h-5" />
          </div>
        </div>
        <div className={`date-time  text-[11px] py-2 rounded-sm ${isDark?'hover:bg-[#474747]':'hover:bg-white'} cursor-pointer transition-all px-1`}>
          <p className="leading-3.5">{formattedTime}</p>
          <p className="leading-3.5">{formattedDate}</p>
        </div>
      </div>
      <Modal
        isDark={isDark}
        setIsDark={setIsDark}
        areQuickSettingsOpen={areQuickSettingsOpen}
        setAreQuickSettingsOpen={setAreQuickSettingsOpen}
        isNightLightOn={isNightLightOn}
        setIsNightLightOn={setIsNightLightOn}
      />
      <NightLightModal isNightLightOn={isNightLightOn} />

      <StartMenu
        isDark={isDark}
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
        setIsTaskManagerOn={setIsTaskManagerOn}
      />
    </footer>
  );
};

export default Taskbar;
