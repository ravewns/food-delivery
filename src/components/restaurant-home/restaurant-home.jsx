"use client";

import Link from "next/link";
import styles from "./restaurant-home.module.css";

export const RestaurantHome = () => {
  return (
    <div className="container">
      <Link href="/restaurants" className={styles.title}>
        Рестораны
      </Link>
    </div>
  );
};

export default RestaurantHome;
