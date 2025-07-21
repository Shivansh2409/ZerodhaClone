import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = React.useContext(GeneralContext);

  const handleBuyClick = async() => {
    console.dir("Buy button clicked");
    const user= await axios.get("http://localhost:3000/dashboard/user", { withCredentials: true })
    // .then(response => response.data)
    // .catch(error => {
    //   console.error("Error fetching user data:", error);
    //    // Handle error appropriately
    // });
    const user_id = user.data; // Assuming the user ID is available in the response
    console.log("User ID:", user_id._id);
    axios.post("http://localhost:3000/dashboard/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
      authUser: user_id._id // Include the user ID in the request
    });

    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65<div><span>Stock name -- {uid}</span></div></span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
