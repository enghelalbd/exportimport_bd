import React from "react";

const MyExports = () => {
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = {
      productName: e.target.productName.value,
      productImage: e.target.productImage.value,
      price: parseFloat(e.target.price.value),
      originCountry: e.target.originCountry.value,
      rating: parseFloat(e.target.rating.value),
      availableQuantity: parseInt(e.target.availableQuantity.value),
      created_at: new Date(),
    };
    console.log(formData);
  };

  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold mb-5 text-center">
        {" "}
        Product Exports Form{" "}
      </h1>
      <form onSubmit={handelSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Enter product name"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="productImage"
          >
            Product Image URL
          </label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            placeholder="Enter product image URL"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="originCountry"
          >
            Origin Country
          </label>
          <input
            type="text"
            id="originCountry"
            name="originCountry"
            placeholder="Enter origin country"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder="Enter rating"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Available Quantity
          </label>
          <input
            type="number"
            placeholder="Quantity"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-center text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
            type="submit"
          >
            Add Export
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyExports;
