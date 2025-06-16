import styles from "../restaurant-menu/restaurant-menu.module.css";
import {MenuCounter} from "../restaurant-menu/menu-counter/menu-counter.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/slice.js";
import {Link} from "react-router";

export const Dish = ({dishId, addButton}) => {
    const {state} = useContext(AuthContext);
    const dish = useSelector((state) => selectDishById(state, dishId))
    return (
        <>
            <ul className={styles.restaurantMenu}>
                    <Link to={'/dish/' + dishId} className={styles.restaurantDish}>
                        {dish.name}
                        {state.isAuth && addButton && <MenuCounter restaurantId={dishId}/>}
                    </Link>
            </ul>
        </>
    )
}