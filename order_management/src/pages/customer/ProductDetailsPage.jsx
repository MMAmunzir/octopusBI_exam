import React from "react";
import { useParams } from "react-router-dom";
import products from "./../../assets/product.js";
import Header from "../../components/Header.jsx";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
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
        <div className="col-span-2"></div>

        {/* <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )} */}
      </div>
    </>
  );
};

export default ProductDetailsPage;
