"use client";
import { useParams } from "next/navigation.js";
import { RestaurantMenu } from "../restaurant-menu/restaurant-menu.jsx";

export const RestaurantMenuTab = () => {
  const { id: restaurantId } = useParams();

  return <RestaurantMenu restaurantId={restaurantId} allMenu={false} />;
};

export default RestaurantMenuTab;
