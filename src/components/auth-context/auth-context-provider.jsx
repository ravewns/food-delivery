"use client";

import { useReducer } from "react";
import { AuthContext } from "./index.jsx";
import { initialState, reducer } from "./auth-reducer.js";

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (name) => {
    dispatch({ type: "SET_AUTH", payload: true });
    dispatch({ type: "SET_NAME", payload: name });
  };

  const logout = () => {
    dispatch({ type: "SET_AUTH", payload: false });
    dispatch({ type: "SET_NAME", payload: null });
  };

  return <AuthContext value={{ state, dispatch, login, logout }}>{children}</AuthContext>;
};
