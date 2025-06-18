import {NavLink, Outlet, useParams} from "react-router";
import styles from "./restaurant-info.module.css"
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/slice.js";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getRestaurant} from "../../redux/entities/restaurants/get-restaurant.js";
import {RequestBoundary} from "../request-boundary/request-boundary.jsx";

export const RestaurantInfo = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))

    const requestStatus = useRequest(getRestaurant, restaurantId)

    return (<RequestBoundary status={requestStatus}>
        <div>
            <h1 className={styles.title}>{restaurant.name}</h1>
            <div className={styles.tabs}>
                <NavLink to={'menu'} className={styles.tab}>Меню</NavLink>
                <NavLink to={'reviews'} className={styles.tab}>Отзывы</NavLink>
            </div>
            <div className="container">
                <h2>{restaurant.description}</h2>
                <img className={styles.image} src={restaurant.img} alt="Restaurant Image"/>
                <Outlet/>
            </div>
        </div>
    </RequestBoundary>)
}