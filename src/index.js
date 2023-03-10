import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { DataLayer } from "./context/DataLayer";
import reducer, { initialState } from "./context/Reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
