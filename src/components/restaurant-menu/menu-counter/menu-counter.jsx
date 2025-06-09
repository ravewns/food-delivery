import {Counter} from "../../counter/counter.jsx";
import {useCount} from "../../counter/use-count.js";


export const MenuCounter = ({restaurantId}) => {
    const { value, increment, decrement } = useCount(restaurantId);

    return <Counter value={value} increment={increment} decrement={decrement} />;
};
