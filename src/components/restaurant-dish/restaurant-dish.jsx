import styles from "../restaurant-menu/restaurant-menu.module.css";
import {MenuCounter} from "../restaurant-menu/menu-counter/menu-counter.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/slice.js";

export const Dish = ({dishId}) => {
    const {state} = useContext(AuthContext);
    const dish = useSelector((state) => selectDishById(state, dishId))
    return (
        <>
            <ul className={styles.restaurantMenu}>
                    <li key={dish} className={styles.restaurantDish}>
                        {dish.name}
                        {state.isAuth && <MenuCounter/>}
                    </li>
            </ul>
        </>
    )
}