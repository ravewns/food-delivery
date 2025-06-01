import styles from "./restaurant-tabs.module.css";
import clsx from "clsx";
import {Button} from "../button/button.jsx";

export const RestaurantTabs = ({restaurants, onSelect}) => {
    return (
        <div className={clsx(styles.restaurantsList)}>
            {restaurants.map((restaurant) => {
                if (!restaurant.name.length) {
                    return null;
                }
                return (
                    <div key={restaurant.id} className="restaurant">
                        <Button
                            className={clsx(
                                styles.restaurantName,
                            )}
                            onClick={() => {
                                onSelect(restaurant.id);
                            }}
                            >
                            {restaurant.name}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};
