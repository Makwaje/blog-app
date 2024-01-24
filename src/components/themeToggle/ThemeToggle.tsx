"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useThemeContext } from "@/context/ThemeContext";

function ThemeToggle() {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <div
      className={styles.container}
      onClick={toggleTheme}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
