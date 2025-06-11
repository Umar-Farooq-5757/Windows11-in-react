import React from "react";

const About = ({isAboutOn,setIsAboutOn, isDark}) => {
  return (
    <div onClick={(e)=>e.stopPropagation()} className={`pt-4 px-5 h-[450px] w-[400px] ${isDark?'bg-[#2c2c2c] text-white':'bg-white text-black'}  fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded-md shadow-lg ${isAboutOn?'':'hidden'}`}>
      <h1 className="font-semibold mb-4 text-xl">About</h1>
      <p className="text-sm mb-7">
        Windows 11 in React is an open-source project that aims to emulate the
        Windows 11 desktop experience with common web technologies like React,
        CSS, and JavaScript.
      </p>
      <p className="text-sm mb-7">
        It is critical to note that the project has no connection with Microsoft
        and must not be used to refer to Microsoft's official operating system,
        products, or the <span className={`${isDark?'text-[#4cc2ff]':'text-[#0067c0]'}  font-semibold`}><a href="https://www.microsoft.com/en-in/windows-365" target="_blank">Windows 365 cloud PC.</a></span>
      </p>
      <p className="text-sm mb-7">
        All trademarks shown herein, including Microsoft and Windows, are
        property of the Microsoft group of companies.
      </p>
      <div className={`absolute bottom-0 left-0 right-0 ${isDark?'bg-[#1d202d]':'bg-[#f3f3f3]'} py-7 border-t border-gray-300`}>
        <button onClick={()=>setIsAboutOn(false)} className={`${isDark?'bg-[#4cc2ff] text-black':'bg-[#0067c0] text-white'}   rounded-sm py-1 text-sm cursor-pointer absolute right-2 top-[50%] -translate-y-[50%] px-2 font-semibold`}>
          OK, I understand
        </button>
      </div>
    </div>
  );
};

export default About;
