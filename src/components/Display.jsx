import React, { Component } from "react";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3000/display",
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("controllerUrl", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        <h1>Display!</h1>
        <Link to={"/"}>
          <h2>Home</h2>
        </Link>
        <p>Go here to enter a recipe URL: {response}</p>
      </div>
    );
  }
}

export default Display;
