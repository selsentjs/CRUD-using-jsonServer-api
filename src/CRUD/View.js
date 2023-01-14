import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const View = ({ data, setData, setTitle, setDescription, setPrice }) => {
  const { id } = useParams();
  // get single data

  useEffect(() => {
    getSingleData();
  }, []);
  const getSingleData = async () => {
    const response = await axios.get(`http://localhost:8000/data/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setPrice(response.data.price);
    setData(response.data);
    console.log("view data:", response.data);
  };

  return (
    <div>
      <h1>Book Detail</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td>{data.price}</td>
          </tr>
        </tbody>
      </table>
      <NavLink to="/">
    
        <button>Go Back</button>
      </NavLink>
    </div>
  );
};

export default View;
