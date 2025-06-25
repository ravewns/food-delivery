"use client";

import { useParams } from "next/navigation";
import styles from "./restaurant-info.module.css";
import { useGetRestaurantsQuery } from "../../redux/api/index.js";
import Link from "next/link.js";

export const RestaurantInfo = ({ children }) => {
  const { id: restaurantId } = useParams();

  const {
    data: restaurant,
    isLoading,
    isError,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === restaurantId),
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>{restaurant?.name}</h1>
      <div className={styles.tabs}>
        <Link href={`/restaurants/${restaurantId}/menu`} className={styles.tab}>
          Меню
        </Link>
        <Link href={`/restaurants/${restaurantId}/reviews`} className={styles.tab}>
          Отзывы
        </Link>
      </div>
      <div className="container">
        <h2>{restaurant?.description}</h2>
        <img className={styles.image} src={restaurant?.img} alt="Restaurant Image" />
        {children}
      </div>
    </div>
  );
};

export default RestaurantInfo;
