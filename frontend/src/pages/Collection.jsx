import React, { useContext, useState } from "react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContextDefinition";
import useFilteredProducts from "../hooks/useFilteredProducts";
import { useSearchParams } from "react-router-dom";

const categoryFilters = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
  { label: "Kids", value: "Kids" },
];

const subCategoryFilters = [
  { label: "Topwear", value: "Topwear" },
  { label: "Bottomwear", value: "Bottomwear" },
  { label: "Winterwear", value: "Winterwear" },
];

const Collection = () => {
  const [searchParams] = useSearchParams();
  
  const initialCategory = searchParams.get("category");
  const { products, searchQuery } = useContext(ShopContext);

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const [showAudience, setShowAudience] = useState(false);
  const [showWearType, setShowWearType] = useState(false);

  const toggleFilter = (value, setSelectedValues) => {
    setSelectedValues((currentValues) =>
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value],
    );
  };

  const filteredProducts = useFilteredProducts(
    products,
    searchQuery,
    selectedCategories,
    selectedSubcategories,
    sortType,
  );

  return (
    <section className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <Title text1="ALL" text2="COLLECTIONS" />

        <p className="max-w-8xl mx-auto mt-5 text-center text-gray-500 text-sm sm:text-base leading-7">
          Filter by audience and wear type, then sort by price to find the
          perfect style faster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start">
        {/* Sidebar */}
        <aside className="flex flex-col gap-6 border border-stone-200 rounded-lg p-8 translate-x-2">
          <h2 className="text-lg font-bold text-stone-700">Filters</h2>

          {/* Audience */}
          <div className="border-t border-stone-200 pt-8">
            <button
              type="button"
              onClick={() => setShowAudience(!showAudience)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-700">
                Audience
              </h3>

              <div className="sm:hidden">
                <img
                  src={assets.dropdown_icon}
                  alt=""
                  className={`h-3 transition-transform duration-300 ${
                    showAudience ? "rotate-90" : ""
                  }`}
                />
              </div>
            </button>

            <div
              className={`${showAudience ? "block" : "hidden"} sm:block mt-5`}
            >
              <div className="flex flex-col gap-4">
                {categoryFilters.map((filter) => (
                  <label
                    key={filter.value}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(filter.value)}
                      onChange={() =>
                        toggleFilter(filter.value, setSelectedCategories)
                      }
                      className="h-4 w-4 accent-stone-700"
                    />

                    {filter.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Wear Type */}
          <div className="border-t border-stone-200 pt-8">
            <button
              type="button"
              onClick={() => setShowWearType(!showWearType)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-700">
                Wear Type
              </h3>

              <div className="sm:hidden">
                <img
                  src={assets.dropdown_icon}
                  alt=""
                  className={`h-3 transition-transform duration-300 ${
                    showWearType ? "rotate-90" : ""
                  }`}
                />
              </div>
            </button>

            <div
              className={`${showWearType ? "block" : "hidden"} sm:block mt-5`}
            >
              <div className="flex flex-col gap-4">
                {subCategoryFilters.map((filter) => (
                  <label
                    key={filter.value}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubcategories.includes(filter.value)}
                      onChange={() =>
                        toggleFilter(filter.value, setSelectedSubcategories)
                      }
                      className="h-4 w-4 accent-stone-700"
                    />

                    {filter.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <p className="text-sm text-gray-500 translate-x-10">
              Showing {filteredProducts.length} products
            </p>

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="w-full sm:w-56 border border-stone-300 rounded-md px-4 py-3 text-sm text-gray-700 outline-none focus:border-stone-700 -translate-x-8 -translate-y-2"
            >
              <option value="relevant">Sort by: Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {filteredProducts.map((product) => (
                <ProductItem
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <div className="border border-stone-200 rounded-lg py-16 text-center text-gray-500">
              No products match the selected filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Collection;
