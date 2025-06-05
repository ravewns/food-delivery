import {useState} from "react";
import {RestaurantTabs} from "../restaurant-tabs/restaurant-tabs";
import {RestaurantBlock} from "../restaurant-block/restaurant-block";
import {selectRestaurantById, selectRestaurantIds} from "../../redux/entities/restaurant/slice.js";
import {useSelector} from "react-redux";

export const RestaurantPage = () => {
    const restaurantsIds = useSelector(selectRestaurantIds);
    const [selectedId, setSelectedId] = useState(restaurantsIds[0]);
    const selectedRestaurant = useSelector((state) => selectRestaurantById(state, selectedId))

    return (
        <div>
            <RestaurantTabs restaurantsIds={restaurantsIds} onSelect={setSelectedId}/>
            <RestaurantBlock restaurant={selectedRestaurant}/>
        </div>
    )};


