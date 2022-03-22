import React, { createContext } from "react";

export const myContext = createContext();

export default function Store(props) {
  const store = {
    burger: false,
    setBurger: (val) => (store.burger = val),
  };

  return (
    <myContext.Provider value={store}>{props.children}</myContext.Provider>
  );
}
