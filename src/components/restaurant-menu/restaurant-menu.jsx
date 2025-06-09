import styles from "./restaurant-menu.module.css";
import {Dish} from "../restaurant-dish/restaurant-dish.jsx";

export const RestaurantMenu = ({restaurant, addButton}) => {
    return (
        <div>
            <h3 className={styles.restaurantTitle}>Меню</h3>
            {restaurant.menu.map((dish) => (
                <Dish key={dish} dishId={dish} allMenu={addButton}/>
            ))}
        </div>
    );
};
