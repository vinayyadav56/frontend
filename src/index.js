import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App";
import {AuthProvider} from "./Services/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider >
            <App />
    </AuthProvider>
);
