"use client";

import { Counter } from "../../counter/counter.jsx";
import { useCount } from "../../counter/use-count.js";

export const MenuCounter = ({ dishId }) => {
  const { value, increment, decrement } = useCount(dishId);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
