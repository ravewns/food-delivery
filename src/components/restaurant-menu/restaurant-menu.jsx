import {MenuCounter} from "./menu-counter/menu-counter.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";

export const RestaurantMenu = ({ restaurant }) => {
    const {state} = useContext(AuthContext);
  return (
    <div>
      <h3>Меню</h3>
      <ul className="restaurant-menu">
        {restaurant.menu.map((dish) => (
          <li key={dish.id} className="restaurant-dish">
            {dish.name}
              {state.isAuth && <MenuCounter />}
          </li>
        ))}
      </ul>
    </div>
  );
};
