import React from "react";
import TestUserReducer from "./components/TestUserReducer";
import TestUseReducerAndUseContext from "./components/TestUseReducerAndUseContext";
import DataFetch from "./components/DataFetch";
import DataFetchUseReducer from "./components/DataFetchUseReducer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <TestUserReducer /> */}
      {/* <TestUseReducerAndUseContext /> */}
      {/* <DataFetch /> */}
      <DataFetchUseReducer />
    </div>
  );
}
