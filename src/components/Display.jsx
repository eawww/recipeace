import React, { Component } from "react";
import { Link } from "react-router-dom";

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Display!</h1>
        <Link to={"/"}>
          <h2>Home</h2>
        </Link>
      </div>
    );
  }
}

export default Display;
