import styles from "./restaurant-menu.module.css";
import {useSelector} from "react-redux";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getDishesByRestaurantId} from "../../redux/entities/dish/get-dishes.js";
import {Dish} from "../restaurant-dish/restaurant-dish.jsx";
import {RequestBoundary} from "../request-boundary/request-boundary.jsx";
import {selectRestaurantById} from "../../redux/entities/restaurants/slice.js";

export const RestaurantMenu = ({restaurantId, addButton}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

    return (<RequestBoundary status={requestStatus}>
        <div>
            <h3 className={styles.restaurantTitle}>Меню</h3>
            {restaurant.menu.map((dish) => (<Dish key={dish} dishId={dish} allMenu={addButton}/>))}
        </div>
    </RequestBoundary>);
};
