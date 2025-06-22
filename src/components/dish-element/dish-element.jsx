"use client";

import { useGetRestaurantDishByIdQuery } from "../../redux/api/index.js";
import styles from "../restaurant-menu/restaurant-menu.module.css";
import { MenuCounter } from "../restaurant-menu/menu-counter/menu-counter.jsx";
import { useContext } from "react";
import { AuthContext } from "../auth-context/index.jsx";
import Link from "next/link.js";
import { useParams } from "next/navigation.js";

export const DishElement = () => {
  const { id: dishId } = useParams();
  const { state } = useContext(AuthContext);
  const { data: dish, isLoading, isError } = useGetRestaurantDishByIdQuery(dishId);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Ошибка получения блюда</div>;
  }

  return (
    <div className="container">
      <ul key={dish.id} className={styles.restaurantMenu}>
        <Link href={"/dish/" + dish.id} className={styles.restaurantDish}>
          {dish.name}
          {state.isAuth && <MenuCounter dishId={dish.id} />}
        </Link>
      </ul>
    </div>
  );
};

export default DishElement;
