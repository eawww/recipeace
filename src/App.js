import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Controller from "./components/Controller";
import Display from "./components/Display";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact={true}
        render={() => (
          <div className="App">
            <h1 className="App-header">Home!</h1>
            <Link to={"/display"}>
              <h2>Display</h2>
            </Link>
            <Link to={"/controller"}>
              <h2>Controller</h2>
            </Link>
          </div>
        )}
      />
      <Route path="/controller" component={Controller} />
      <Route path="/display" component={Display} />
    </Router>
  );
}

export default App;
