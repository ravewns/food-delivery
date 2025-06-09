import {RestaurantTabs} from "../restaurant-tabs/restaurant-tabs";
import {selectRestaurantIds} from "../../redux/entities/restaurant/slice.js";
import {useSelector} from "react-redux";
import {Outlet, useParams} from "react-router";

export const RestaurantPage = () => {
    const restaurantsIds = useSelector(selectRestaurantIds);
    const {restaurantId} = useParams();

    return (
        <div>
            {restaurantId === undefined && <RestaurantTabs restaurantsIds={restaurantsIds} restaurantId={restaurantId}/>}
            <Outlet />
        </div>
    )};


