import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App";
import "./css/style.scss";

ReactDOM.render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
);
