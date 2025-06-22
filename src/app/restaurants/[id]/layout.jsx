"use client";

import RestaurantInfo from "../../../components/restaurant-info/restaurant-info";
import { useParams } from "next/navigation";

const Layout = ({ children }) => {
  const { id: restaurantId } = useParams();

  return <RestaurantInfo restaurantId={restaurantId}>{children}</RestaurantInfo>;
};

export default Layout;
