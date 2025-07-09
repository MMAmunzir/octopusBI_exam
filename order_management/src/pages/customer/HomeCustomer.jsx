import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import fetchedProduct from "./../../assets/product.js";

const HomeCustomer = () => {
  const [products, setProducts] = useState([]);
  // here i don't have to do this but if i am fetching from api this is how it should be done
  useEffect(() => {
    setProducts(fetchedProduct);
  }, []);

  const allProducts = products.map((item) => (
    <ProductCard key={item.id} details={item} />
  ));

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
        {allProducts}
      </div>
    </>
  );
};

export default HomeCustomer;
