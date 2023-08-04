import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
const ProductUpdatePage = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [colorVariation, setColorVariation] = useState("");

  const Product = useSelector((state) => state.product.selectedProduct);
  console.log("update page ", Product);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const discountedPrice = (price * (100 - discountPercent)) / 100;

    console.log({
      productName,
      description,
      price,
      discountPercent,
      discountedPrice,
      colorVariation,
    });
  };

  const colorOptions = [
    "Silver",
    "Gold",
    "Black",
    "White",
    "Purple",
    "Red",
    "Green",
    "Blue",
  ];
  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];
  const editorStyles = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "200px",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "black",
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-2xl font-bold px-5 text-[#1f1e1f]  mb-4">
        Product Update
      </h1>
      <form className="max-w-md mx-auto bg-[#fbfbfb] shadow-md rounded px-8 py-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={Product.productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <ReactQuill
            id="description"
            Value={Product.description.split("")}
            onChange={setDescription}
            theme="snow"
            modules={quillModules}
            formats={quillFormats}
            placeholder="Update product description..."
            style={editorStyles}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={Product.price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="colorVariation"
          >
            Color Variation
          </label>
          <select
            id="colorVariation"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={Product.colorVariation}
            onChange={(e) => setColorVariation(e.target.value)}
          >
            <option value="">Select Color Variation</option>
            {colorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="discountPercent"
          >
            Discount Percentage
          </label>
          <input
            type="number"
            id="discountPercent"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={Product.discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="discountedPrice"
          >
            Discounted Price
          </label>
          <input
            type="number"
            id="discountedPrice"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={(price - (price * discountPercent) / 100).toFixed(2)}
            readOnly
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="border px-10 py-2 rounded text-[#fff]  bg-[#3a393a]  hover:bg-[#1f1e1f] flex items-center gap-2 duration-125 transition-all ease"
            type="submit"
            onClick={handleFormSubmit}
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdatePage;
