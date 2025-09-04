import { useEffect, useState } from "react";

import style from "./ToggleTheme.module.css";
import Moon from "../../assets/icon-moon.svg";
import Sun from "../../assets/icon-sun.svg";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // apply side-effects whenever theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggle() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <button
      className={style.themeToggle}
      aria-label="Toggle theme"
      onClick={toggle}
    >
      {theme === "light" && <img src={Moon} alt="moon icon" />}
      {theme === "dark" && <img src={Sun} alt="sun icon" />}
    </button>
  );
};

export default ToggleTheme;
