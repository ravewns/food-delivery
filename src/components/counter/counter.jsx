import { useState } from "react";
const MAX = 5;
const MIN = 0;

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          if (count > MIN) setCount(count - 1);
        }}
      >
        -
      </button>

      {count}

      <button
        onClick={() => {
          if (count < MAX) setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
