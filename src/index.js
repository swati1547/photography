import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from "./App.jsx"
import {BrowserRouter} from "react-router-dom";

// ReactDOM.render(
// <BrowserRouter>
//   {App()}
// </BrowserRouter>,
//   document.getElementById("root"));

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      {App()}
    </BrowserRouter>
)