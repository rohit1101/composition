import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function Fancy(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

export function App() {
  return (
    <div className="App">
      <Fancy color="blue">
        <h1>Welcome</h1>
        <p>Thank you visiting our spacecraft</p>
      </Fancy>
    </div>
  );
}
