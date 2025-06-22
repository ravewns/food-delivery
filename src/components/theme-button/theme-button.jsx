"use client";

import { useContext } from "react";
import { ThemeContext } from "../theme-context/index.jsx";
import { Button } from "../button/button.jsx";
import styles from "./theme-button.module.css";

export const ThemeButton = () => {
  const { setTheme } = useContext(ThemeContext);
  const handleClick = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <Button className={styles.themeButton} onClick={handleClick}>
      Изменить тему
    </Button>
  );
};
