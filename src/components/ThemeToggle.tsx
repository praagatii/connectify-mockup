"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-surface transition-colors hover:border-black/25"
    >
      <span className="absolute inset-0 flex items-center justify-center text-foreground transition-opacity" style={{ opacity: dark ? 1 : 0 }}>
        <Sun className="h-4 w-4" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center text-foreground transition-opacity" style={{ opacity: dark ? 0 : 1 }}>
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}