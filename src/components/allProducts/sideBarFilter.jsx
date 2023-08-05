import React from "react";

const SideBarFilter = ({
  colors,
  types,
  categories,
  minPrice,
  maxPrice,
  handlePriceChange,
}) => {
  return (
    <div
      className={` hidden md:block col-span-1 z-10 text-black bg-gray-200 p-4 px-10 md:px-4 rounded`}
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2"></h2>
        <ul></ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        <select className="w-full p-2 border rounded">
          <option value="">Select</option>
          {categories?.map((category, index) => (
            <option key={index} value={categories}>
              {categories}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <div>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={minPrice}
            onChange={handlePriceChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={maxPrice}
            onChange={handlePriceChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Sort By</h2>
        <select className="w-full p-2 border rounded">
          <option value="">Select</option>
          <option value="price_low_to_high">Price: Low to High</option>
          <option value="price_high_to_low">Price: High to Low</option>
          <option value="name_a_to_z">Name: A to Z</option>
          <option value="name_z_to_a">Name: Z to A</option>
        </select>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Color Variation</h2>
        <select className="w-full p-2 border rounded">
          <option value="">Select</option>

          {colors?.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Type</h2>
        <select className="w-full p-2 border rounded">
          <option value="">Select</option>

          {types?.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 w-full">
        <button className="text-white py-2 rounded bg-[#1f1e1f] w-full">
          Filter
        </button>
      </div>
    </div>
  );
};

export default SideBarFilter;
