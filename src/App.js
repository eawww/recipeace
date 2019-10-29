import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact={true}
        render={() => (
          <div className="App">
            <header className="App-header">We're HOME</header>
            <Link to={"/display"}>
              <h1>Display</h1>
            </Link>
            <Link to={"/controller"}>
              <h1>Controller</h1>
            </Link>
          </div>
        )}
      />
      <Route path="/controller" component={null} />
      <Route path="/display" component={null} />
    </Router>
  );
}

export default App;
