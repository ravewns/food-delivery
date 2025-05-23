import { RestaurantMenu } from "../restaurant-menu/restaurant-menu";
import { RestaurantReview } from "../restaurant-review/restaurant-review";

export const RestaurantBlock = ({ restaurant }) => {
  return (
    <div>
      <RestaurantMenu restaurant={restaurant} />
      <RestaurantReview restaurant={restaurant} />
    </div>
  );
};
