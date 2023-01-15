import React from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
const Add = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  data,
  setData,
}) => {
  const navigate = useNavigate();
  // add books

  const addBooks = async () => {
    if (!title || !description || !price) {
      window.confirm("please enter all the fields");
    } else {
      const response = await axios.post(`http://localhost:8000/data`, {
        id: uuid(),
        title,
        description,
        price,
      });
      console.log("post data:", response.data);
      setTitle("");
      setDescription("");
      setPrice("");
      navigate("/");
      setData([...response.data, data]);
    }
  };

  //=================================================
  return (
    <div>
      <h1>Add Books</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button onClick={addBooks}>Add Book</button>
      </form>
    </div>
  );
};

export default Add;
