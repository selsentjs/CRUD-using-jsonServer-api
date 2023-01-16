import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, removeUser } from "../redux/userSlice";
import { v4 as uuid } from "uuid";

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

  // add button
  const addData = () => {
    if (!name || !email) {
      window.confirm("please enter all the fields");
    } else {
      dispatch(addUser({ id: uuid(), name, email }));
      setName("");
      setEmail("");
    }
  };

  // edit button
  const handleEdit = (item) => {
    setEditID(item);
    setName(item.name);
    setEmail(item.email);
    setIsEdit(true);
  };

  // update button

  const updateData = () => {
    dispatch(updateUser({ id: editID.id, name, email }));
    setIsEdit(false);
  };

  // delete button
  const handleDelete = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      {/* // form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>User details</h1>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <br />
      {isEdit ? (
        <button onClick={updateData}>Update Data</button>
      ) : (
        <button onClick={addData}>Add Data</button>
      )}
      <br /> <br />
      {/* // table */}
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
                      <button onClick={() => handleEdit(item)}>Edit</button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
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
