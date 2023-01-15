import React, { useState } from "react";

import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import View from "./View";

function MainFile() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route
            path="/add"
            element={
              <Add
                data={data}
                setData={setData}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                price={price}
                setPrice={setPrice}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Edit
                data={data}
                setData={setData}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                price={price}
                setPrice={setPrice}
              />
            }
          />
          <Route
            path="/view/:id"
            element={
              <View
                data={data}
                setData={setData}
                setTitle={setTitle}
                setDescription={setDescription}
                setPrice={setPrice}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainFile;
