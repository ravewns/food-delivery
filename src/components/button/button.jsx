"use client";

import styles from "./button.module.css";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../theme-context/index.jsx";

export const Button = ({ children, className, ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={clsx(styles.button, className, theme === "light" && styles.light, theme === "dark" && styles.dark)}
      {...props}
    >
      {children}
    </button>
  );
};
