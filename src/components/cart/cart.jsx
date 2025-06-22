"use client";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice.js";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <ul>
      {items.map(({ id, amount }) => (
        <li key={id}>
          {id} - {amount}
        </li>
      ))}
    </ul>
  );
};

export default Cart;
