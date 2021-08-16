import * as React from "react"
import ReactDOM from 'react-dom';
import { StrictMode } from "react";

import Chart from './ggchart';

const rootElement = document.getElementById("root");
console.log("render root element!");
ReactDOM.render(
  <StrictMode>
    <Chart/>
  </StrictMode>,
  rootElement
);