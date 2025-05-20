import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { Layout } from "../layout/layout";
import { RestaurantBlock } from "../restaurant-block/restaurant-block";

export const App = () => {
  const [selectedId, setSelectedId] = useState(restaurants[0].id);
  const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === selectedId);

  return (
    <Layout>
      <RestaurantTab restaurants={restaurants} onSelect={setSelectedId} />
      <RestaurantBlock restaurant={selectedRestaurant} />
    </Layout>
  );
};
