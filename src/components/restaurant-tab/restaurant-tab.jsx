import {Button} from "../button/button.jsx";
import clsx from "clsx";
import styles from "../restaurant-tabs/restaurant-tabs.module.css";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice.js";

export const RestaurantTab = ({restaurantId, onSelect}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    return (
        <>
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
        </>
    )
}