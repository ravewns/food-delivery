import {Link, useParams} from "react-router";
import {useGetRestaurantDishByIdQuery} from "../../redux/api/index.js";
import styles from "../restaurant-menu/restaurant-menu.module.css";
import {MenuCounter} from "../restaurant-menu/menu-counter/menu-counter.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";

export const DishElement = () => {
    const {dishId} = useParams();
    const {state} = useContext(AuthContext);
    const {data: dish, isLoading, isError} = useGetRestaurantDishByIdQuery(dishId)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Ошибка получения блюда</div>
    }

    return (
        <div className="container">
            <ul key={dish.id} className={styles.restaurantMenu}>
                <Link to={'/dish/' + dish.id} className={styles.restaurantDish}>
                    {dish.name}
                    {state.isAuth && <MenuCounter dishId={dish.id}/>}
                </Link>
            </ul>
        </div>
    )
}