import {useState} from "react";
import {RestaurantTabs} from "../restaurant-tabs/restaurant-tabs";
import {RestaurantBlock} from "../restaurant-block/restaurant-block";
import {selectRestaurantIds} from "../../redux/entities/restaurant/slice.js";
import {useSelector} from "react-redux";

export const RestaurantPage = () => {
    const restaurantsIds = useSelector(selectRestaurantIds);
    const [selectedId, setSelectedId] = useState(restaurantsIds[0]);

    return (
        <div>
            <RestaurantTabs restaurantsIds={restaurantsIds} onSelect={setSelectedId}/>
            <RestaurantBlock selectedId={selectedId}/>
        </div>
    )};


