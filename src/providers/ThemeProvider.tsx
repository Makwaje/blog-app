"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeContext();

  const [mounted, setMounted] = useState(false);

  useEffect(function () {
    setMounted(true);
  }, []);

  if (mounted) return <div className={theme}>{children}</div>;
}

export default ThemeProvider;
