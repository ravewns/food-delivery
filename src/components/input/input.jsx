"use client";

import styles from "./input.module.css";
import clsx from "clsx";

export const Input = ({ children, ...props }) => {
  return (
    <input className={clsx(styles.input)} {...props}>
      {children}
    </input>
  );
};
