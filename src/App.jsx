import "./App.css";
import ContextMenu from "./components/ContextMenu";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import { useEffect, useState } from "react";
import TaskManager from "./components/WindowsApps/TaskManager";

function App() {
  const [menuPosition, setMenuPosition] = useState({});
  const [isDark, setIsDark] = useState(false);
  const [areQuickSettingsOpen, setAreQuickSettingsOpen] = useState(false);
  const [isNightLightOn, setIsNightLightOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isTaskManagerOn, setIsTaskManagerOn] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    if (document.readyState == "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Your adventure is about to begin
          </p>
        </div>
      ) : (
        <>
          <main
            className="desktop h-screen select-none hidden md:block"
            onContextMenu={(e) => {
              e.preventDefault();
              setMenuPosition({ left: e.clientX, top: e.clientY });
              setAreQuickSettingsOpen(false);
            }}
            onClick={() => setMenuPosition({})}
          >
            <Desktop />
            <Taskbar
              isDark={isDark}
              setIsDark={setIsDark}
              setMenuPosition={setMenuPosition}
              areQuickSettingsOpen={areQuickSettingsOpen}
              setAreQuickSettingsOpen={setAreQuickSettingsOpen}
              isNightLightOn={isNightLightOn}
              setIsNightLightOn={setIsNightLightOn}
              setIsTaskManagerOn={setIsTaskManagerOn}
            />
            <ContextMenu menuPosition={menuPosition} isDark={isDark} />

            <TaskManager
              isTaskManagerOn={isTaskManagerOn}
              setIsTaskManagerOn={setIsTaskManagerOn}
            />
          </main>
          <div className="mobile-message block md:hidden text-3xl text-red-500 font-bold fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center w-screen">
            Only for desktop screen.
          </div>
        </>
      )}
    </>
  );
}

export default App;
