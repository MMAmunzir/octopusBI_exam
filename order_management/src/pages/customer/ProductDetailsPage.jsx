import React from "react";
import { useParams } from "react-router-dom";
import products from "./../../assets/product.js";
import Header from "../../components/Header.jsx";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  function handleOrder() {
    alert("order submitted");
  }
  return (
    <>
      <Header />
      <div className="grid grid-cols-5">
        <div className="w-full rounded-2xl overflow-hidden col-span-3 ">
          <img src={product.img} alt={product.name} />
          <div className="p-4">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
        <div className="col-span-2 mx-5 border-1 rounded-2xl p-5 bg-[#E8E7E7]">
          <h1 className="font-semibold text-4xl">Order Details</h1>
          <div className="flex justify-between text-2xl">
            <p>Total Price:</p>
            <p>{product.price}</p>
          </div>
          <button
            onClick={handleOrder}
            className="bg-blue-950 text-white p-2 rounded-xl cursor-pointer"
          >
            Place the order
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
