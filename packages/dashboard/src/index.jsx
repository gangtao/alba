import * as React from "react"
import ReactDOM from 'react-dom';
import { StrictMode } from "react";

import App from "./main/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);