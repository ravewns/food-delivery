"use client";

import { Button } from "../button/button.jsx";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <Button onClick={decrement}>-</Button>
      {value}
      <Button onClick={increment}>+</Button>
    </div>
  );
};
