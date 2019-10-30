import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/bort").then(async result => console.log(await result.text()));
    return () => {};
  }, []);
  return (
    <div className="App">
      <header className="App-header">This is a thing</header>
    </div>
  );
}

export default App;
