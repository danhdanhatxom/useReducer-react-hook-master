import React, { useState, useEffect } from "react";
import axios from "axios";

const DateFetch = () => {
  const [state, setState] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res =>
        setState({
          loading: false,
          user: res.data,
          error: ""
        })
      )
      .catch(err =>
        setState({
          loading: false,
          user: [],
          error: err.message
        })
      );
  }, []);
  return (
    <div>
      {state && state.user && <p>{state.user.name}</p>}
      {state && state.error && <p>{state.error}</p>}
    </div>
  );
};

export default DateFetch;
