import { RestaurantDish } from "../restaurant-dish/restaurant-dish";
import { RestaurantReview } from "../restaurant-review/restaurant-review";

export const RestaurantBlock = ({ restaurant }) => {
  return (
    <div>
      <RestaurantDish restaurant={restaurant} />
      <RestaurantReview restaurant={restaurant} />
    </div>
  );
};
