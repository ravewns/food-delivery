import clsx from "clsx";
import styles from "../restaurant-tabs/restaurant-tabs.module.css";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice.js";
import {Link} from "react-router";

export const RestaurantTab = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    return (
        <>
            <div key={restaurant.id} className="restaurant">
                <Link to={restaurant.id} className={clsx(styles.restaurantName)}>
                    {restaurant.name}
                </Link>
            </div>
        </>
    )
}