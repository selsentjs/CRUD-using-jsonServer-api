import React, { useState } from "react";
import Data from "./Data/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";
import View from "./View";

const Main = () => {
  const [data, setData] = useState(Data);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // ============ view data ===========================
  const [displayData, setDisplayData] = useState([]);
  const viewData = (item) => {
    setDisplayData(item);
  };

  //===================================================
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                setData={setData}
                setTitle={setTitle}
                setDescription={setDescription}
                setPrice={setPrice}
                viewData={viewData}
              />
            }
          />
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
          <Route path="/edit/:id" element={<Edit />} />
          <Route
            path="/view/:id"
            element={
              <View data={data} setData={setData} displayData={displayData} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
