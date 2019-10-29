import React, { Component } from "react";
import { Link } from "react-router-dom";

class Controller extends Component {
  render() {
    return (
      <div>
        <h1>Controller!</h1>
        <Link to={"/"}>
          <h2>Home</h2>
        </Link>
      </div>
    );
  }
}

export default Controller;
