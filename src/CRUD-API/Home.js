import React, { useEffect } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = ({ data, setData }) => {
  // get all the data
  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await axios.get(`http://localhost:8000/data`);
    setData(response.data);
  };

  // delete data
  const deleteData = async (id) => {
    if (window.confirm("Are you sure want to delete this record?")) {
      const response = await axios.delete(`http://localhost:8000/data/${id}`);

      setData(response.data);
      getAllData();
    } else {
      getAllData();
    }
  };

  return (
    <div>
      <h1>Book Details</h1>
      <NavLink to="/add">
        <button>Add Data</button>
      </NavLink>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <NavLink to={`/edit/${item.id}`}>
                        <button>Edit</button>
                      </NavLink>
                      <button onClick={() => deleteData(item.id)}>
                        Delete
                      </button>
                      <NavLink to={`/view/${item.id}`}>
                        <button>View</button>
                      </NavLink>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <h3>No data available</h3>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
