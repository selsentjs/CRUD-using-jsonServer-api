import React, { useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = ({
  title,
  setTitle,
  data,
  setData,
  description,
  setDescription,
  price,
  setPrice,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // get exisiting data
  useEffect(() => {
    getSingleData();
  }, []);

  const getSingleData = async () => {
    const response = await axios.get(`http://localhost:8000/data/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setPrice(response.data.price);
  };

  const editBook = async () => {
    const response = await axios.put(`http://localhost:8000/data/${id}`, {
      title,
      description,
      price,
    });
    navigate("/");
    setData(response.data);
  };

  return (
    <div>
      <h1>Update Book</h1>
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
        <button onClick={editBook}>Update Book</button>
      </form>
    </div>
  );
};

export default Edit;
