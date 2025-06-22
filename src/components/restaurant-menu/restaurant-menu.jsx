"use client";

import styles from "./restaurant-menu.module.css";
import { MenuCounter } from "./menu-counter/menu-counter.jsx";
import { initialState as state } from "../auth-context/auth-reducer.js";
import { useGetRestaurantDishesQuery } from "../../redux/api/index.js";
import Link from "next/link.js";

export const RestaurantMenu = ({ restaurantId, addButton }) => {
  const { data, isLoading, isError } = useGetRestaurantDishesQuery(restaurantId);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div>
      <ul className={styles.restaurantMenu}>
        {data.map(({ id, name }) => {
          return (
            <Link key={id} href={"/dish/" + id} className={styles.restaurantDish}>
              {name}
              {state.isAuth && addButton && <MenuCounter restaurantId={id} />}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
