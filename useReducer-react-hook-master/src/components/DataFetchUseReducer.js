import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  user: "",
  error: ""
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, user: action.payload, error: "" };
    case "FETCH_FAILURE":
      return { loading: false, user: "", error: action.payload };
    default:
      return state;
  }
};

const DateFetchUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/2")
      .then(res => dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
      .catch(err => dispatch({ type: "FETCH_FAILURE", payload: err.message }));
  }, []);
  return (
    <div>
      {state && state.user && <p>{state.user.name}</p>}
      {state && state.error && <p>{state.error}</p>}
    </div>
  );
};

export default DateFetchUseReducer;
