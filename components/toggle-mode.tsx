"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  // Prevent SSR flicker and hydration mismatch
  if (!mounted) {
    return <Button size="icon" className="rounded-full" />;
  }
  return (
    <Button
      size="icon"
      className="rounded-full bg-transparent text-foreground hover:bg-transparent"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
