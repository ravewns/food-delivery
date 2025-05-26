import {useState} from "react";

const MAX = 5;
const MIN = 0;

export const Counter = ({value, onChange}) => {
    const isControlled = value !== undefined && typeof onChange === "function";
    const [internalCount, setInternalCount] = useState(0);

    const count = isControlled ? value : internalCount;

    const setCount = (newCount) => {
        if (isControlled) {
            onChange(newCount);
        } else {
            setInternalCount(newCount);
        }
    };

    const increment = () => {
        if (count < MAX) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > MIN) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
};
