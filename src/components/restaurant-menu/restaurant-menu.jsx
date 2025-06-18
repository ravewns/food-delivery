import styles from "./restaurant-menu.module.css";
import {useSelector} from "react-redux";
import {selectDishIds} from "../../redux/entities/dish/slice.js";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getDishes} from "../../redux/entities/dish/get-dishes.js";
import {Dish} from "../restaurant-dish/restaurant-dish.jsx";
import {RequestBoundary} from "../request-boundary/request-boundary.jsx";

export const RestaurantMenu = ({restaurantId, addButton}) => {
    const dishIds = useSelector(selectDishIds)

    const requestStatus = useRequest(getDishes, restaurantId);


    return (<RequestBoundary status={requestStatus}>
        <div>
            <h3 className={styles.restaurantTitle}>Меню</h3>
            {dishIds.map((dish) => (<Dish key={dish} dishId={dish} allMenu={addButton}/>))}
        </div>
    </RequestBoundary>);
};
