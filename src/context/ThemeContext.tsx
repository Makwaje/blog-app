"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<any | null>(null);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeType = "dark" | "light";

function getFromLocalStorage(): ThemeType {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");

    if (value === null) return "light";
    else if (value === "light") return "light";
    else if (value === "dark") return "dark";
    else return "light";
  } else {
    return "light";
  }
}

type ContextValueType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  toggleTheme: () => void;
};

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(() => getFromLocalStorage());

  function toggleTheme() {
    console.log(theme);
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(
    function () {
      localStorage.setItem("theme", theme);
    },
    [theme],
  );

  const value: ContextValueType = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export default ThemeContextProvider;

export function useThemeContext(): ContextValueType {
  const context = useContext<ContextValueType>(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext was used outside ThemeContextProvider!");
  }

  return context;
}
