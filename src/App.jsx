import "./App.css";
import ContextMenu from "./components/ContextMenu";
import Desktop from "./components/Desktop";
import Taskbar from "./components/taskbar";
import { useState } from "react";

function App() {
  const [menuPosition, setMenuPosition] = useState({});
  const [isDark, setIsDark] = useState(false);
  const [areQuickSettingsOpen, setAreQuickSettingsOpen] = useState(false);
  const [isNightLightOn, setIsNightLightOn] = useState(false);

  return (
    <main
      className="h-screen select-none"
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
      />
      <ContextMenu
        menuPosition={menuPosition}
        isDark={isDark}
      />
    </main>
  );
}

export default App;
