import React from "react";
import { useState } from "react";
import taskManager from "../../images/windowsApps/taskmanager.png";
import close from "../../images/windowsApps/close.png";
import maximize from "../../images/windowsApps/maximize.png";
import minimize from "../../images/windowsApps/minimize.png";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaWaveSquare } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaGaugeHigh } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import apps from "./apps.js";

const TaskManager = ({ isTaskManagerOn, setIsTaskManagerOn }) => {
  const tabNames = [
    { title: "Processes", icon: <FaTableCellsLarge /> },
    { title: "Performance", icon: <FaWaveSquare /> },
    { title: "App history", icon: <FaClockRotateLeft /> },
    { title: "Startup apps", icon: <FaGaugeHigh /> },
    { title: "Users", icon: <FaUser /> },
    { title: "Details", icon: <FaList /> },
    { title: "Services", icon: <FaPuzzlePiece /> },
    { title: "Settings", icon: <FaGear /> },
  ];
  const [isActive, setIsActive] = useState("Processes");
  const Processes = () => {
    const powerUsage = ["Very low", "Low", "Moderate", "High", "Very High"];
    return (
      <>
        <h1 className="font-bold text-xl mb-4">Processes</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>Disk</th>
              <th>Network</th>
              <th>GPU</th>
              <th>Power Usage</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((app) => {
              return (
                <tr key={app}>
                  <td>{app}</td>
                  <td>{(Math.random()*10).toFixed(2)}%</td>
                  <td>{(Math.random()*100).toFixed(2)} MB</td>
                  <td>{(Math.random()*50).toFixed(2)} MB/s</td>
                  <td>{(Math.random()*50).toFixed(2)} MBps</td>
                  <td>{(Math.random()*10).toFixed(2)}%</td>
                  <td>{powerUsage[Math.floor(Math.random()*powerUsage.length)]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };
  const Performance = () => {
    return <h1 className="font-bold text-xl">Performance</h1>;
  };
  const AppHistory = () => {
    return <h1 className="font-bold text-xl">App history</h1>;
  };
  const StartupApps = () => {
    return <h1 className="font-bold text-xl">Startup apps</h1>;
  };
  const Users = () => {
    return <h1 className="font-bold text-xl">Users</h1>;
  };
  const Details = () => {
    return <h1 className="font-bold text-xl">Details</h1>;
  };
  const Services = () => {
    return <h1 className="font-bold text-xl">Services</h1>;
  };
  const Settings = () => {
    return <h1 className="font-bold text-xl">Settings</h1>;
  };

  return (
    <div
      className={`bg-[#eff4f9] overflow-y-scroll fixed h-[calc(100vh-44px)] w-screen top-0 left-0
    ${isTaskManagerOn ? "" : "hidden"}`}
    >
      <header className="flex justify-between items-center mb-2 absolute top-0 left-0 right-0">
        <div className="left flex justify-start items-center gap-2 ml-4">
          <img width={13} src={taskManager} alt="Task manager" />
          <span className="text-[11px]">Task Manager</span>
        </div>
        <div className="right flex items-center justify-center gap-0">
          <div className="hover:bg-[#dbdde1] px-4 py-[6px]">
            <img width={14} src={minimize} alt="minimize" />
          </div>
          <div className="hover:bg-[#dbdde1] px-4 py-[6px]">
            <img width={14} src={maximize} alt="maximize" />
          </div>
          <div
            onClick={() => setIsTaskManagerOn(false)}
            className="hover:bg-red-500 px-4 py-[6px]"
          >
            <img width={14} src={close} alt="close" />
          </div>
        </div>
      </header>
      <main className="flex mt-7">
        <aside className="w-[19vw] min-h-[calc(100vh-35px-44px)]">
          {tabNames.map((t) => {
            return (
              <div
                key={t.title}
                onClick={() => setIsActive(t.title)}
                className="hover:bg-[#e4e7ea] flex items-center justify-start gap-3 pl-4 my-[2px] py-[6px] text-[16px]"
              >
                {t.icon}
                <p>{t.title}</p>
              </div>
            );
          })}
        </aside>
        <section className="information w-[81vw] min-h-[calc(100vh-35px-44px)] bg-[#fff] pt-4 pb-4 pl-4 rounded-md shadow-sm">
          {isActive == "Processes" && <Processes />}
          {isActive == "Performance" && <Performance />}
          {isActive == "App history" && <AppHistory />}
          {isActive == "Startup apps" && <StartupApps />}
          {isActive == "Users" && <Users />}
          {isActive == "Details" && <Details />}
          {isActive == "Services" && <Services />}
          {isActive == "Settings" && <Settings />}
        </section>
      </main>
    </div>
  );
};

export default TaskManager;
