import {useContext} from "react";
import styles from "./restaurant-tabs.module.css";
import clsx from "clsx";
import {ThemeContext} from "../theme-context/index.jsx";

export const RestaurantTabs = ({restaurants, onSelect}) => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="restaurants-list" style={{display: "flex", justifyContent: "space-evenly"}}>
            {restaurants.map((restaurant) => {
                if (!restaurant.name.length) {
                    return null;
                }
                return (
                    <div key={restaurant.id} className="restaurant">
                        <button
                            className={clsx(
                                styles.restaurantName,
                                theme === 'light' && styles.light,
                                theme === 'dark' && styles.dark
                            )}
                            onClick={() => {
                                onSelect(restaurant.id);
                            }}
                            >
                            {restaurant.name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
