import { Counter } from "../counter/counter";

export const RestaurantMenu = ({ restaurant }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul className="restaurant-menu">
        {restaurant.menu.map((dish) => (
          <li key={dish.id} className="restaurant-dish">
            {dish.name}
            <Counter />
          </li>
        ))}
      </ul>
    </div>
  );
};
