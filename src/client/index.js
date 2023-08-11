import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// we import our css
import "./stylesheets/styles.css";

// notice we grab our div with the id root and reassign it to what our app compnent renders
// we are reading ./index.html
ReactDOM.render(<App />, document.getElementById("root"));
