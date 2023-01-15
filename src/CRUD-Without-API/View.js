import React from "react";
import { NavLink } from "react-router-dom";
const View = ({ displayData }) => {
  return (
    <div>
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
            <td>{displayData.id}</td>
            <td>{displayData.title}</td>
            <td>{displayData.description}</td>
            <td>{displayData.price}</td>
          </tr>
        </tbody>
      </table>
      <NavLink to="/">
        <button>Go to Home</button>
      </NavLink>
    </div>
  );
};

export default View;
