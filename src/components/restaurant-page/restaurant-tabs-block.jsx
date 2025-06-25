"use client";

import { useGetRestaurantsQuery } from "../../redux/api/index.js";
import styles from "../restaurant-tabs/restaurant-tabs.module.css";
import clsx from "clsx";
import Link from "next/link.js";

export const RestaurantTabsBlock = ({ children }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: {isError.message}</div>;

  return (
    <div>
      <div className={clsx(styles.restaurantsList)}>
        {data.map(({ id, name }) => {
          return (
            <div key={id} className="restaurant">
              <Link href={`/restaurants/${id}`} className={styles.restaurantName}>
                {name}
              </Link>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default RestaurantTabsBlock;
