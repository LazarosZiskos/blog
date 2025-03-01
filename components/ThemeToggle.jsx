import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Import icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`relative w-14 h-8 flex items-center justify-between rounded-full px-1 cursor-pointer transition-colors
        ${theme === "dark" ? "bg-gray-800" : "bg-gray-400"}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Sun Icon (Left Side) */}
      <Sun size={14} className="text-white" />

      {/* Toggle Knob */}
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
      />

      {/* Moon Icon (Right Side) */}
      <Moon size={14} className="text-white" />
    </div>
  );
};

export default ThemeToggle;
