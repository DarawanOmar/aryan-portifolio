"use client";

import { useThemeConfig } from "./active-theme";
import { Palette } from "lucide-react";
import { useState } from "react";

export function ThemeSelector() {
  const { setActiveTheme } = useThemeConfig();
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const handleThemeChange = () => {
    const nextIndex = (currentThemeIndex + 1) % DEFAULT_THEMES.length;
    const nextTheme = DEFAULT_THEMES[nextIndex];

    setCurrentThemeIndex(nextIndex);
    setActiveTheme(nextTheme.value);
  };

  const getCurrentTheme = () => {
    return DEFAULT_THEMES[currentThemeIndex];
  };

  const getThemeColor = (themeValue: string) => {
    switch (themeValue) {
      case "default":
        return "text-gray-600";
      case "blue":
        return "text-blue-600";
      case "green":
        return "text-green-600";
      case "amber":
        return "text-amber-600";
      case "ghibli":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={handleThemeChange}
        className="group flex items-center gap-2  backdrop-blur-sm  rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        title={`Current theme: ${getCurrentTheme().name}`}
      >
        <Palette
          size={20}
          className={`${getThemeColor(
            getCurrentTheme().value
          )} group-hover:scale-110 transition-transform duration-300`}
        />
        <span className="text-sm font-medium text-gray-700 hidden sm:block">
          {getCurrentTheme().name}
        </span>
      </button>
    </div>
  );
}

const DEFAULT_THEMES = [
  {
    name: "سەرەکی",
    value: "default",
  },
  {
    name: "شین",
    value: "blue",
  },
  {
    name: "سەوز",
    value: "green",
  },
  {
    name: "بڕتەقاڵی",
    value: "amber",
  },
  {
    name: "گیبلی",
    value: "ghibli",
  },
];
