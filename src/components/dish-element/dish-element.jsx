import {useParams} from "react-router";
import {Dish} from "../restaurant-dish/restaurant-dish.jsx";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getDish} from "../../redux/entities/dish/get-dish.js";

export const DishElement = () => {
    const {dishId} = useParams();

    const requestStatus = useRequest(getDish, dishId);


    if (requestStatus === "rejected") {
        return <div>Ошибка получения блюда</div>
    }

    if (requestStatus === "pending" || requestStatus === "idle" || !dishId) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <Dish dishId={dishId} addButton={true}/>
        </div>
    )
}