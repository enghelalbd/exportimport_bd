import React from "react";

const AddExport = () => {
  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div>
          {" "}
          <h1 className="text-2xl font-bold mb-5 text-center"> ADD Form </h1>
          <form>
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
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price"
              >
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
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExport;
