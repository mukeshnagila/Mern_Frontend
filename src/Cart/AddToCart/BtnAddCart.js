
// AddToCartButton.js
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./cartActions";
import axios from "axios";

const AddCardBtn = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Item Added Successfully");
    
    // Log the userId
    const userId = localStorage.getItem("userId");
    console.log("User ID:", userId);

    // Log the productId
    const productId = product.id;
    console.log("Product ID:", productId);

    const data = { userId, productId };

    // Log the entire request payload
    console.log("Request Payload:", data);

    const token = localStorage.getItem("token");
    console.log("TOKEN" ,token);
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    axios.get('http://localhost:8008/api/addcart', data, config)
      .then(res => {
        console.log(res.data, "by add cart btn");
        // if(res.data.code == 200){
        //   setRefresh(!refresh)
        // }
      })
      .catch(err => {
        console.error("Error adding to cart:", err);
        // alert(`Error adding to cart. ${err.response ? err.response.data.message : "Please try again."}`);
      })
  };

  return (
    <>
      {localStorage.getItem("token") ? (

            <button className="logoBtn1" onClick={handleAddToCart}>Add To Cart</button>

      ) : (
        <Link to="/login">
            <button className="logoBtn1">Add To Cart</button>
        </Link>
      )}
    </>
  );
};

export default AddCardBtn;
