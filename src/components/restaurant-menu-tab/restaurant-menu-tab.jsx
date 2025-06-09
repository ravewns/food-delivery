import {RestaurantMenu} from "../restaurant-menu/restaurant-menu.jsx";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice.js";

export const RestaurantMenuTab = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    let addButton = false

    return <RestaurantMenu restaurant={restaurant} allMenu={addButton}/>
}