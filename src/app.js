import React from "react";
import ReactDOM from "react-dom";

import "style.css";
import Hello from "./components/hello";
// import Header from "./components/header";

ReactDOM.render(
    <Hello />,
    // <Header />,
    document.querySelector("#app"),
);
