import React from "react";
import "./App.css";

import Main from "./CRUD-Without-API/Main";
import MainFile from "./CRUD-API/MainFile";
import User from './CRUD-With-Redux-without-API/components/User';

function App() {
  return (
    <div className="App">
      {/* <MainFile />
      <br />
      <br />
      <h1>CRUD without api </h1>
      <Main /> */}
      <h1>CRUD with Redux</h1>
      <User />
    </div>
  );
}

export default App;
