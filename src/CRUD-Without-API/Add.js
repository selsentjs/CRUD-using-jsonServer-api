import React from "react";

import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Add = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  setData,
  data,
}) => {
  const navigate = useNavigate();

  // add data
  const addData = () => {
    const newData = {
      id: uuid(),
      title,
      description,
      price,
    };
    if (!title || !description || !price) {
      window.confirm("please enter all the fields");
    } else {
      navigate("/");
      setData([...data, newData]);
      setTitle("");
      setDescription("");
      setPrice("");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /> <br />
        <button onClick={addData}>Add Data </button>
      </form>
    </div>
  );
};

export default Add;
