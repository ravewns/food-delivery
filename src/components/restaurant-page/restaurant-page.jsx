import {useState} from "react";
import {restaurants} from "../../../materials/mock";
import {RestaurantTabs} from "../restaurant-tabs/restaurant-tabs";
import {RestaurantBlock} from "../restaurant-block/restaurant-block";

export const RestaurantPage = () => {
    const [selectedId, setSelectedId] = useState(restaurants[0].id);
    const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === selectedId);

    return (
        <div>
            <RestaurantTabs restaurants={restaurants} onSelect={setSelectedId}/>
            <RestaurantBlock restaurant={selectedRestaurant}/>
        </div>
    );

};
