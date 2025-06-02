import React from "react";
import { createPortal } from "react-dom";

const NightLightModal = ({ isNightLightOn }) => {
  return createPortal(
    <div
      className={`bg-[#ffd580] fixed top-0 bottom-0 left-0 right-0 pointer-events-none ${
        isNightLightOn ? "opacity-30 z-30" : "-z-30 opacity-0"
      } transition-all`}
    ></div>,
    document.querySelector("#portal")
  );
};

export default NightLightModal;
