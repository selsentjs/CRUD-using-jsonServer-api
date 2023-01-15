import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const User = () => {
  // useSelector
  const { userData } = useSelector((state) => state.user);

  // useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  // dispatch
  const dispatch = useDispatch();

  return (
    <div>
     
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData?.length > 0 ? (
            userData?.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
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

export default User;
