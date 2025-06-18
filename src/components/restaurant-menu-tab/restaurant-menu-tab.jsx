import {RestaurantMenu} from "../restaurant-menu/restaurant-menu.jsx";
import {useParams} from "react-router";

export const RestaurantMenuTab = () => {
    const {restaurantId} = useParams();
    return <RestaurantMenu restaurantId={restaurantId} allMenu={false}/>
}