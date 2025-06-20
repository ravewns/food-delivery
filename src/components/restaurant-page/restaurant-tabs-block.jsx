import {RestaurantTabs} from "../restaurant-tabs/restaurant-tabs";
import {selectRestaurantIds} from "../../redux/entities/restaurants/slice.js";
import {useSelector} from "react-redux";
import {Outlet, useParams} from "react-router";
import {getRestaurants} from "../../redux/entities/restaurants/get-restaurants.js";
import {useRequest} from "../../redux/hooks/use-request.js";
import {RequestBoundary} from "../request-boundary/request-boundary.jsx";

export const RestaurantTabsBlock = () => {
    const restaurantsIds = useSelector(selectRestaurantIds);
    const {restaurantId} = useParams();

    const requestStatus = useRequest(getRestaurants)

    return (
        <RequestBoundary status={requestStatus}>
            <div>
                {restaurantId === undefined &&
                    <RestaurantTabs restaurantsIds={restaurantsIds} restaurantId={restaurantId}/>}
                <Outlet/>
            </div>
        </RequestBoundary>
    )
};


