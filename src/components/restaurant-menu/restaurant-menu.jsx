import {MenuCounter} from "./menu-counter/menu-counter.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";
import styles from "./restaurant-menu.module.css";

export const RestaurantMenu = ({restaurant}) => {
    const {state} = useContext(AuthContext);
    return (
        <div>
            <h3 className={styles.restaurantTitle}>Меню</h3>
            <ul className={styles.restaurantMenu}>
                {restaurant.menu.map((dish) => (
                    <li key={dish.id} className={styles.restaurantDish}>
                        {dish.name}
                        {state.isAuth && <MenuCounter/>}
                    </li>
                ))}
            </ul>
        </div>
    );
};
