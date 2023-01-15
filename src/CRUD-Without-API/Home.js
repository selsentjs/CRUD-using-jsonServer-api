import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({
  data,
  setData,
  setTitle,
  setDescription,
  setPrice,
  viewData,
  setEditID,
  setIsEdit,
}) => {
  // ================== delete data ==========================
  const deleteData = (id) => {
    const result = data.filter((item) => {
      return item.id !== id;
    });
    console.log("deleted result: ", result);
    setData(result);
  };

  //==============================================================

  // ========  getSingleData =====================================

  const getSingleData = (id) => {
    const result = data?.find((item) => {
      return item.id === id;
    });
    setIsEdit(true);
    setEditID(id);
    setTitle(result.title);
    setDescription(result.description);
    setPrice(result.price);
  };

  //=================================================================

  return (
    <div>
      <NavLink to="/add">
        <button>Add Data </button>
      </NavLink>
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
                        <button onClick={() => getSingleData(item.id)}>
                          Edit
                        </button>
                      </NavLink>
                      <button onClick={() => deleteData(item.id)}>
                        Delete
                      </button>
                      <NavLink to={`/view/${item.id}`}>
                        <button onClick={() => viewData(item)}>View</button>
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
