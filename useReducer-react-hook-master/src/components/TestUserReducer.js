import React, { useReducer } from "react";
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
const TestUseReducer = () => {
  const [count1, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  // console.log(count1);
  return (
    <div>
      <p>first counter: {count1.value}</p>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>

      <p>second counter: {count2.value}</p>
      <button onClick={() => dispatch2({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch2({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch2({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default TestUseReducer;
