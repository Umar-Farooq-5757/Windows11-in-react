import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import wifi from "../images/modal/wifi.png";
import bluetooth from "../images/modal/bluetooth.png";
import airplane from "../images/modal/airplane.png";
import saver from "../images/modal/saver.png";
import sun from "../images/modal/sun.png";
import moon from "../images/modal/moon.png";
import nightlight from "../images/modal/nightlight.png";
import { Battery50Icon } from "@heroicons/react/24/outline";

const Modal = ({
  areQuickSettingsOpen,
  setAreQuickSettingsOpen,
  isDark,
  setIsDark,
  isNightLightOn,
  setIsNightLightOn,
}) => {
  const wifiRef = useRef();
  const bluetoothRef = useRef();
  const airplaneRef = useRef();
  const saverRef = useRef();
  const themeRef = useRef();
  const nightLightRef = useRef();

  const [isWifiOn, setIsWifiOn] = useState(false);
  const [isBluetoothOn, setIsBluetoothOn] = useState(false);
  const [isSaverOn, setIsSaverOn] = useState(false);
  const [isAirplaneOn, setIsAirplaneOn] = useState(false);

  const makeEveryThingDark = () => {
    isWifiOn ? () => {} : (wifiRef.current.style.backgroundColor = "#313131");
    isBluetoothOn
      ? () => {}
      : (bluetoothRef.current.style.backgroundColor = "#313131");
    isAirplaneOn
      ? () => {}
      : (airplaneRef.current.style.backgroundColor = "#313131");
    isSaverOn ? () => {} : (saverRef.current.style.backgroundColor = "#313131");
    isDark ? () => {} : (themeRef.current.style.backgroundColor = "#313131");
    isNightLightOn
      ? () => {}
      : (nightLightRef.current.style.backgroundColor = "#313131");
    isWifiOn
      ? () => {}
      : (wifiRef.current.querySelector("img").style.filter = "invert(1)");
    isBluetoothOn
      ? () => {}
      : (bluetoothRef.current.querySelector("img").style.filter = "invert(1)");
    isAirplaneOn
      ? () => {}
      : (airplaneRef.current.querySelector("img").style.filter = "invert(1)");
    isSaverOn
      ? () => {}
      : (saverRef.current.querySelector("img").style.filter = "invert(1)");
    isDark
      ? () => {}
      : (themeRef.current.querySelector("img").style.filter = "invert(1)");
    isNightLightOn
      ? () => {}
      : (nightLightRef.current.querySelector("img").style.filter = "invert(1)");
  };
  const makeEveryThingLight = () => {
    isWifiOn ? () => {} : (wifiRef.current.style.backgroundColor = "#fbfbfb");
    isBluetoothOn
      ? () => {}
      : (bluetoothRef.current.style.backgroundColor = "#fbfbfb");
    isAirplaneOn
      ? () => {}
      : (airplaneRef.current.style.backgroundColor = "#fbfbfb");
    isSaverOn ? () => {} : (saverRef.current.style.backgroundColor = "#fbfbfb");
    isDark ? () => {} : (themeRef.current.style.backgroundColor = "#fbfbfb");
    isNightLightOn
      ? () => {}
      : (nightLightRef.current.style.backgroundColor = "#fbfbfb");
    isWifiOn
      ? () => {}
      : (wifiRef.current.querySelector("img").style.filter = "invert(0)");
    isBluetoothOn
      ? () => {}
      : (bluetoothRef.current.querySelector("img").style.filter = "invert(0)");
    isAirplaneOn
      ? () => {}
      : (airplaneRef.current.querySelector("img").style.filter = "invert(0)");
    isSaverOn
      ? () => {}
      : (saverRef.current.querySelector("img").style.filter = "invert(0)");
    isDark
      ? () => {}
      : (themeRef.current.querySelector("img").style.filter = "invert(0)");
    isNightLightOn
      ? () => {}
      : (nightLightRef.current.querySelector("img").style.filter = "invert(0)");
  };

  const handleWifi = () => {
    if (isWifiOn) {
      if (isDark) {
        wifiRef.current.style.backgroundColor = "#313131";
        wifiRef.current.querySelector("img").style.filter = "invert(1)";
      } else {
        wifiRef.current.style.backgroundColor = "#fbfbfb";
        wifiRef.current.querySelector("img").style.filter = "invert(0)";
      }
    } else {
      wifiRef.current.style.backgroundColor = "#0067c0";
      wifiRef.current.querySelector("img").style.filter = "invert(1)";
    }
    setIsWifiOn(!isWifiOn);
  };
  const handleBluetooth = () => {
    if (isBluetoothOn) {
      if (isDark) {
        bluetoothRef.current.style.backgroundColor = "#313131";
        bluetoothRef.current.querySelector("img").style.filter = "invert(1)";
      } else {
        bluetoothRef.current.style.backgroundColor = "#fbfbfb";
        bluetoothRef.current.querySelector("img").style.filter = "invert(0)";
      }
    } else {
      bluetoothRef.current.style.backgroundColor = "#0067c0";
      bluetoothRef.current.querySelector("img").style.filter = "invert(1)";
    }
    setIsBluetoothOn(!isBluetoothOn);
  };
  const handleAirplane = () => {
    if (isAirplaneOn) {
      if (isDark) {
        airplaneRef.current.style.backgroundColor = "#313131";
        airplaneRef.current.querySelector("img").style.filter = "invert(1)";
      } else {
        airplaneRef.current.style.backgroundColor = "#fbfbfb";
        airplaneRef.current.querySelector("img").style.filter = "invert(0)";
      }
    } else {
      airplaneRef.current.style.backgroundColor = "#0067c0";
      airplaneRef.current.querySelector("img").style.filter = "invert(1)";
      if (isWifiOn) handleWifi();
      if (isBluetoothOn) handleBluetooth();
    }
    setIsAirplaneOn(!isAirplaneOn);
  };
  const handleSaver = () => {
    if (isSaverOn) {
      if (isDark) {
        saverRef.current.style.backgroundColor = "#313131";
        saverRef.current.querySelector("img").style.filter = "invert(1)";
      } else {
        saverRef.current.style.backgroundColor = "#fbfbfb";
        saverRef.current.querySelector("img").style.filter = "invert(0)";
      }
    } else {
      saverRef.current.style.backgroundColor = "#0067c0";
      saverRef.current.querySelector("img").style.filter = "invert(1)";
    }
    setIsSaverOn(!isSaverOn);
  };
  const handleTheme = () => {
    if (isDark) {
      themeRef.current.style.backgroundColor = "#fbfbfb";
      themeRef.current.querySelector("img").style.filter = "invert(0)";
      makeEveryThingLight();
    } else {
      themeRef.current.style.backgroundColor = "#0067c0";
      themeRef.current.querySelector("img").style.filter = "invert(1)";
      makeEveryThingDark();
    }
    setIsDark(!isDark);
  };

  const handleNightLight = () => {
    if (isNightLightOn) {
      if (isDark) {
        nightLightRef.current.style.backgroundColor = "#313131";
        nightLightRef.current.querySelector("img").style.filter = "invert(1)";
      } else {
        nightLightRef.current.style.backgroundColor = "#fbfbfb";
        nightLightRef.current.querySelector("img").style.filter = "invert(0)";
      }
    } else {
      nightLightRef.current.style.backgroundColor = "#0067c0";
      nightLightRef.current.querySelector("img").style.filter = "invert(1)";
    }
    setIsNightLightOn(!isNightLightOn);
  };
  const popupButtons = [
    {
      icon: wifi,
      text: "WiFi",
      handler: handleWifi,
      reference: wifiRef,
    },
    {
      icon: bluetooth,
      text: "Bluetooth",
      handler: handleBluetooth,
      reference: bluetoothRef,
    },
    {
      icon: airplane,
      text: "Flight Mode",
      handler: handleAirplane,
      reference: airplaneRef,
    },
    {
      icon: saver,
      text: "Battery Saver",
      handler: handleSaver,
      reference: saverRef,
    },
    {
      icon: isDark ? moon : sun,
      text: "Theme",
      handler: handleTheme,
      reference: themeRef,
    },
    {
      icon: nightlight,
      text: "Night Light",
      handler: handleNightLight,
      reference: nightLightRef,
    },
  ];

  return createPortal(
    <div
      onClick={() => setAreQuickSettingsOpen(false)}
      className={`fixed top-0 bottom-0 right-0 left-0 ${
        areQuickSettingsOpen ? "" : "hidden"
      }`}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={`${
          isDark ? "bg-[#242424] shadow-2xl text-white" : "bg-[#e6edf8] text-black"
        } py-4 px-5 overflow-hidden rounded-lg fixed right-4 h-90 w-90 transition-all ${
          areQuickSettingsOpen ? "bottom-[56px]" : "-bottom-96"
        }`}
      >
        <div className="buttons flex flex-wrap justify-between">
          {popupButtons.map((button) => {
            return (
              <div
                key={button.text}
                className="box flex flex-col justify-between items-center gap-2 mb-4 select-none"
              >
                <div
                  ref={button.reference}
                  onClick={button.handler}
                  className={`button ${
                    isDark ? "bg-[#313131]" : "bg-[#fbfbfb]"
                  } rounded-sm px-10 py-4 cursor-pointer transition-all`}
                >
                  <img
                    className={`w-4 h-4`}
                    src={button.icon}
                    alt={button.text}
                  />
                </div>
                <span className="text-xs cursor-default select-none">
                  {button.text}{" "}
                </span>
              </div>
            );
          })}
        </div>
        <div
          className={`absolute bottom-0 left-0 select-none border-t-[1px] border-gray-300 right-0 ${
            isDark ? "bg-[#1c1c1c]" : "bg-[#dae2f2]"
          } flex items-center justify-start gap-2 pl-5 py-3`}
        >
          <Battery50Icon className="w-5 h-5" />
          <span className="text-xs">50%</span>
        </div>
      </section>
    </div>,
    document.querySelector("#portal")
  );
};

export default Modal;
