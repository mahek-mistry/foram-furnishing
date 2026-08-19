import React from "react";
import { Input } from "./input";
import { Button } from "./button";

const FilterSidebar = ({ search, setSearch, category , setCategory ,brand , setBrand, setPriceRange,  allProducts, priceRange }) => {
  // 1. Get Unique Categories (added fallback for Capital 'C')
  const Categories = allProducts.map((p) => p.category || p.Category);
  const UniqueCategory = ["All", ...new Set(Categories)].filter(Boolean);

  // 2. Get Unique Brands (Fixed: mapping over Brands now, not Categories)
  const Brands = allProducts.map((p) => p.brand || p.Brand);
  const UniqueBrand = ["All", ...new Set(Brands)].filter(Boolean); // Changed to UniqueBrand to match JSX



  const handleCategoryClick = (val) => {
  setCategory(val)
}

const handleBrandChange = (e) => {
  setBrand(e.target.value)
}

const handleMinChange = (e) => {
  const value = Number(e.target.value);
  if (value <= priceRange[1]) setPriceRange([value, priceRange[1]])
}

const handleMaxChange = (e) => {
  const value = Number(e.target.value);
  if (value >= priceRange[0]) setPriceRange([priceRange[0], value])
}

const resetFilters = () => {
  setSearch("");
  setCategory("All");
  setBrand("All");
  setPriceRange([0, 999999])
}
  return (
  <div className="hidden md:block w-[280px] mt-10">
    <div className="bg-white rounded-2xl shadow-md p-5 h-fit sticky top-24">

      {/* Search */}
      <Input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />

      {/* Category */}
      <h1 className="mt-6 font-semibold text-gray-700">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {UniqueCategory.map((item, index) => (
          <label
            key={index}
            htmlFor={`cat-${index}`}
            className="flex items-center gap-2 cursor-pointer text-sm"
          >
            <input
              type="radio"
              checked={category === item}
              onChange={() => handleCategoryClick(item)}
              name="category"
              id={`cat-${index}`}
              className="accent-blue-600"
            />
            {item}
          </label>
        ))}
      </div>

      {/* Brand */}
      <h1 className="mt-6 font-semibold text-gray-700">Brand</h1>
      <select
        className="w-full mt-2 border rounded-lg px-3 py-2"
        value={brand}
        onChange={handleBrandChange}
      >
        {UniqueBrand.map((item, index) => (
          <option key={index} value={item}>
            {item ? item.toUpperCase() : "UNKNOWN"}
          </option>
        ))}
      </select>

      {/* Price Range */}
      <h1 className="mt-6 font-semibold text-gray-700">Price Range</h1>

      <p className="text-sm text-gray-500 mt-1">
        ₹{priceRange[0]} - ₹{priceRange[1]}
      </p>

      <div className="flex gap-2 mt-3">
        <input
          type="number"
          value={priceRange[0]}
          onChange={handleMinChange}
          className="w-full border rounded-lg px-2 py-1 text-sm"
        />
        <input
          type="number"
          value={priceRange[1]}
          onChange={handleMaxChange}
          className="w-full border rounded-lg px-2 py-1 text-sm"
        />
      </div>

      {/* Sliders */}
      <input
        type="range"
        min="0"
        max="999999"
        step="100"
        value={priceRange[0]}
        onChange={handleMinChange}
        className="w-full mt-3 accent-blue-600"
      />

      <input
        type="range"
        min="0"
        max="999999"
        step="100"
        value={priceRange[1]}
        onChange={handleMaxChange}
        className="w-full mt-2 accent-blue-600"
      />

      {/* Reset Button */}
      <Button
        onClick={resetFilters}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Reset Filters
      </Button>
    </div>
  </div>
);
};

export default FilterSidebar;
