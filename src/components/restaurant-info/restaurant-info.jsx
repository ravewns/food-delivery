import {NavLink, Outlet, useParams} from "react-router";
import styles from "./restaurant-info.module.css"
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice.js";

export const RestaurantInfo = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))

    return (
        <div>
            <h1 className={styles.title}>{restaurant.name}</h1>

            <div className={styles.tabs}>
                <NavLink to={'menu'} className={styles.tab}>Меню</NavLink>
                <NavLink to={'reviews'} className={styles.tab}>Отзывы</NavLink>
            </div>

            <div className="container">
                <Outlet />
            </div>

        </div>
    )
}