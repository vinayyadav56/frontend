import React, { useState } from "react";
import "./Additem.css";
import AddIcon from "@mui/icons-material/Add";
// import { avatar } from "../images/avtar.jpg";
const Additem = () => {
  const [item, setItem] = useState([
    {
      id: 0,
      quantity: "",
      dimention: "",
      file: "",
    },
  ]);
  const [quantity, setQuantity] = useState("");
  const [dimention, setDimention] = useState("");
  const [file, setFile] = useState("");

  const updateQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const updateDimention = (event) => {
    setDimention(event.target.value);
  };
  const updateFile = (event) => {
    setFile(event.target.value);
  };

  const handleItemSubmit = (event) => {
    event.preventDefault();
    setItem((prevItem) => [
      ...prevItem,
      { quantity: quantity, dimention: dimention, file: file },
    ]);
  };

  return (
    <div>
      <div className="sender-info d-flex align-items-center justify-content-between">
       <h2>Add Items</h2>
        <h2>Total Items: {item.length -1}</h2>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <AddIcon />
        </button>
      </div>
      <form>
        <div className="form-group row collapse" id="collapseExample">
          <div className="col-md-4">
            <label for="inputphone">Item Quantity</label>
            <input
              type="number"
              name="itemQuantity"
              className="form-control"
              placeholder="Item Quantity"
              value={quantity}
              min="0"
              onChange={updateQuantity}
            />
          </div>
          <div className="col-md-4">
            <label for="inputphone">Item Dimension</label>
            <input
              type="text"
              name="dimension"
              className="form-control"
              placeholder="WW/LL/HH"
              value={dimention}
              onChange={updateDimention}
            />
          </div>
          <div className="col-md-4 img-upload">
            <label for="inputCity">Upload Image</label>
            <input
              type="file"
              name="uploadFile"
              className="form-control"
              id="inputimg"
              value={file}
              onChange={updateFile}
            />
          </div>
          <div className="col-md-12">
            <button
              onClick={handleItemSubmit}
              className="btn btn-primary mx-auto mt-3"
            >
              Save changes
            </button>
          </div>
        </div>
      </form>
      <div className="table-data-list">
        <table class="table table-striped">
          <thead>
            <tr>
              <th className="pl-5">Item Quantity</th>
              <th>Item Dimention</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {item.map((data, id) => {
              return (
                <tr key={id}>
                  <td> {data.quantity} </td>
                  <td> {data.dimention} </td>
                  <td><img src={data.file} alt="" /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Additem;
