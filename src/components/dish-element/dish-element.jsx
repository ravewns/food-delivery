import {useParams} from "react-router";
import {Dish} from "../restaurant-dish/restaurant-dish.jsx";

export const DishElement = () => {
    const {dishId} = useParams();
    let addButton = true

    return (
        <div className="container">
            <Dish dishId={dishId} addButton={addButton}/>
        </div>
    )
}