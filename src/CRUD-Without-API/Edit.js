import React from "react";
import { useNavigate } from "react-router-dom";
const Edit = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  data,
  setData,
  editID,
  setEditID,
  setIsEdit,
}) => {
  // navigate==============
  const navigate = useNavigate();

  //================ edit data ====================================================
  const editData = () => {
    if (title && description && price) {
      setData(
        data?.map((item) => {
          if (item.id === editID) {
            return { ...item, title, description, price };
          }
          return item;
        })
      );
      setTitle("");
      setDescription("");
      setPrice("");
      setEditID(null);
      setIsEdit(false);
    }

    navigate("/");
  };

  //=======================================================================================================

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
        <button onClick={editData}>Edit Data </button>
      </form>
    </div>
  );
};

export default Edit;
