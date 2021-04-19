import React, { useReducer } from "react";
import TestUseReducerAndUseContext2 from "./TestUseReducerAndUseContext2";

const initialState = {
  value: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { value: state.value + action.value };
    case "Decrement":
      return { value: state.value - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

const TestUseReducerAndUseContext = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <div>

    <CountContext.Provider value={{ count, dispatch }}>
      <TestUseReducerAndUseContext2 />
    </CountContext.Provider>
    // </div>
  );
};

export default TestUseReducerAndUseContext;
