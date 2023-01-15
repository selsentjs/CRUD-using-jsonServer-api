import React from "react";
import "./App.css";

import Main from "./CRUD-Without-API/Main";
import MainFile from "./CRUD-API/MainFile";

function App() {
  return (
    <div className="App">
      <MainFile />
      <br />
      <br />
      <h1>CRUD without api </h1>
      <Main />
    </div>
  );
}

export default App;
