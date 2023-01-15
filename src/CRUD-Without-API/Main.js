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

  //edit
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  //view
  const [displayData, setDisplayData] = useState([]);

  // ============ view data ===========================
 
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
                setEditID={setEditID}
                setIsEdit={setIsEdit}
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
                editID={editID}
                setEditID={setEditID}
                setIsEdit={setIsEdit}
              />
            }
          />
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
