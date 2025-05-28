import {MenuCounter} from "./menu-counter/menu-counter.jsx";

export const RestaurantMenu = ({ restaurant }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul className="restaurant-menu">
        {restaurant.menu.map((dish) => (
          <li key={dish.id} className="restaurant-dish">
            {dish.name}
            <MenuCounter />
          </li>
        ))}
      </ul>
    </div>
  );
};
