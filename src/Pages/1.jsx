import React, { useState } from "react";

const AddExport = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productImage: "",
    price: "",
    originCountry: "",
    rating: "",
    quantity: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      rating: parseFloat(formData.rating),
      quantity: parseInt(formData.quantity),
      createdAt: new Date(),
    };

    console.log("Submitted Product:", newProduct);

    // 👉 Send to backend (example)
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product Added Successfully!");
        setFormData({
          productName: "",
          productImage: "",
          price: "",
          originCountry: "",
          rating: "",
          quantity: "",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Export Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="productImage"
          placeholder="Product Image URL"
          value={formData.productImage}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="originCountry"
          placeholder="Origin Country"
          value={formData.originCountry}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Available Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Export/Product
        </button>

      </form>
    </div>
  );
};

export default AddExport;