import styles from "./restaurant-tabs.module.css";
import clsx from "clsx";
import {Tab} from "../restaurant-tab/restaurant-tab.jsx";

export const RestaurantTabs = ({restaurantsIds, onSelect}) => {
    return (
        <div className={clsx(styles.restaurantsList)}>
            {restaurantsIds.map((restaurantId) => {
                if (!restaurantsIds.length) {
                    return null;
                }
                return (
                    <Tab key={restaurantId} restaurantId={restaurantId} onSelect={onSelect}/>
                );
            })}
        </div>
    );
};
