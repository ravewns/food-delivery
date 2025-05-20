import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </button>

      {count}

      <button
        onClick={() => {
          if (count < 5) setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
