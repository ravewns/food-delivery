export const Counter = ({ value, increment, decrement }) => {
    return (
        <div>
            <button onClick={decrement}>-</button>
            {value}
            <button onClick={increment}>+</button>
        </div>
    );
};
