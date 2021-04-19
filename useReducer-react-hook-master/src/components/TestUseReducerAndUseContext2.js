import React, { useContext } from "react";
import { CountContext } from "./TestUseReducerAndUseContext";

const TestUseReducerAndUseContext2 = () => {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      <div>
        <p>first counter: {count.value}</p>
        <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default TestUseReducerAndUseContext2;
