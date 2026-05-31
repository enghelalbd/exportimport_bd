import React from "react";
import { useLoaderData } from "react-router";

const AllProducts = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <h1 className="text-amber-600  text-center mt-2"> All Products </h1>
      <div className=" w-full max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-gray-600 mb-2">
              Description: {product.description}
            </p>
            <p>Availability: {product.availableQuantity}</p>
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-48 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
