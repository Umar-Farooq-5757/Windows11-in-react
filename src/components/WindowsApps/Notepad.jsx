import React from 'react'
import notepad from '../../images/windowsApps/notepad.png'
import close from "../../images/windowsApps/close.png";
import maximize from "../../images/windowsApps/maximize.png";
import minimize from "../../images/windowsApps/minimize.png";

const Notepad = ({isNotepadOn, setIsNotepadOn, isDark}) => {
  return (
    <div
        onClick={(e)=>e.stopPropagation()}
          className={`${isDark?'text-white bg-[#282828]':'text-black bg-[#eff4f9]'} fixed h-[calc(100vh-44px)] w-screen top-0 left-0
        ${isNotepadOn ? "" : "hidden"}`}
        >
          <header className={`flex sticky ${isDark?'bg-[#1e2028]':'bg-[#eff4f9]'} justify-between items-center top-0 left-0 right-0`}>
            <div className="left flex justify-start items-center gap-2 ml-2">
              <img width={13} src={notepad} alt="Task manager" />
              <span className="text-[11px]">Untitled - Notepad</span>
            </div>
            <div className="right flex items-center justify-center gap-0">
              <div className={`${isDark?'hover:bg-[#2a2b30]':'hover:bg-[#dbdde1]'} px-4 py-[6px]`}>
                <img className={`${isDark?'invert-100':'invert-0'}`} width={14} src={minimize} alt="minimize" />
              </div>
              <div className={`${isDark?'hover:bg-[#2a2b30]':'hover:bg-[#dbdde1]'} px-4 py-[6px]`}>
                <img className={`${isDark?'invert-100':'invert-0'}`}  width={14} src={maximize} alt="maximize" />
              </div>
              <div
                onClick={() => setIsNotepadOn(false)}
                className="hover:bg-red-500 px-4 py-[6px]"
              >
                <img className={`${isDark?'invert-100':'invert-0'}`} width={14} src={close} alt="close" />
              </div>
            </div>
          </header>
          <div className={`${isDark?'text-white bg-[#1e2028]':'text-black bg-[#eff4f9]'} flex items-center justify-start gap-6 text-xs pt-3 px-2 pb-2`}>
            <button>File</button>
            <button>Edit</button>
            <button>View</button>
          </div>
        </div>
  )
}

export default Notepad
