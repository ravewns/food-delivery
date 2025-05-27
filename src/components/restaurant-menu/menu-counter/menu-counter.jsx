import {Counter} from "../../counter/counter.jsx";
import {useCount} from "../../counter/use-count.js";


export const MenuCounter = () => {
    const { value, increment, decrement } = useCount();

    return <Counter value={value} increment={increment} decrement={decrement} />;
};
