"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "light" | "dark";

interface ColorPalette {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  cardBg: string;
  cardBorder: string;
  headerBg: string;
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: ColorPalette;
}

const lightColors: ColorPalette = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  muted: "var(--muted)",
  cardBg: "var(--card-bg)",
  cardBorder: "var(--card-border)",
  headerBg: "var(--header-bg)",
};

const darkColors: ColorPalette = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  muted: "var(--muted)",
  cardBg: "var(--card-bg)",
  cardBorder: "var(--card-border)",
  headerBg: "var(--header-bg)",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [colors, setColors] = useState<ColorPalette>(lightColors);

  // Update colors when theme changes
  useEffect(() => {
    setColors(theme === "light" ? lightColors : darkColors);

    // Apply theme class to document element
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Initialize based on user preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as ThemeType | null;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (savedTheme) {
        setTheme(savedTheme);
      } else if (prefersDark) {
        setTheme("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
