import React, { useContext, useMemo, useState } from "react";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContextDefinition";

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
  const { products, searchQuery } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [showFilters, setShowFilters] = useState(false);
  const [showAudience, setShowAudience] = useState(false);
  const [showWearType, setShowWearType] = useState(false);

  const toggleFilter = (value, selectedValues, setSelectedValues) => {
    setSelectedValues((currentValues) =>
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value],
    );
  };

  const filteredProducts = useMemo(() => {
    const normalizeWord = (word) => {
      let w = word.toLowerCase().trim();

      // Remove apostrophes
      w = w.replace(/'/g, "");

      // Normalize gender words
      if (["man", "men", "mens"].includes(w)) return "men";
      if (["woman", "women", "womens"].includes(w)) return "women";

      // Singularize simple plurals
      if (w.endsWith("ies")) return w.slice(0, -3) + "y";

      if (w.endsWith("es") && w.length > 4) return w.slice(0, -2);

      if (w.endsWith("s") && w.length > 3) return w.slice(0, -1);

      return w;
    };

    const searchTerms = searchQuery
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .map(normalizeWord);

    const nextProducts = products.filter((product) => {
      const searchableWords = `
      ${product.name}
      ${product.description}
      ${product.category}
      ${product.subCategory}
    `
        .toLowerCase()

        // tshirt == t-shirt
        .replace(/-/g, "")

        // remove punctuation
        .replace(/[^\w\s]/g, " ")

        .split(/\s+/)

        .filter(Boolean)

        .map(normalizeWord);

      const matchesSearch =
        searchTerms.length === 0 ||
        searchTerms.every((term) =>
          searchableWords.some((word) => word.startsWith(term)),
        );

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesSubcategory =
        selectedSubcategories.length === 0 ||
        selectedSubcategories.includes(product.subCategory);

      return matchesSearch && matchesCategory && matchesSubcategory;
    });

    return nextProducts.sort((a, b) => {
      switch (sortType) {
        case "price-low-high":
          return a.price - b.price;

        case "price-high-low":
          return b.price - a.price;

        default:
          return b.date - a.date;
      }
    });
  }, [
    products,
    searchQuery,
    selectedCategories,
    selectedSubcategories,
    sortType,
  ]);

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Title text1="ALL" text2="COLLECTIONS" />
        <p className="max-w-2xl mx-auto mt-5 text-center text-gray-500 text-sm sm:text-base lg:translate-x-[260px] xl:translate-x-80 leading-7">
          Filter by audience and age group, then sort by price to find the right
          style faster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start">
        <aside className="border border-stone-200 rounded-lg p-8 flex flex-col gap-6">
          {/* Filters Heading */}
          <h2 className="text-lg font-bold text-stone-700">Filters</h2>

          {/* ================= Audience ================= */}
          <div className="border-t border-stone-200 rounded-lg pt-8">
            <button
              type="button"
              onClick={() => setShowAudience(!showAudience)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-700">
                Audience
              </h3>

              {/* Hidden on Desktop */}
              <div className="sm:hidden flex items-center">
                <img
                  src={assets.dropdown_icon}
                  alt=""
                  className={`h-3 -translate-x-2 transition-transform duration-300 ${
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
                        toggleFilter(
                          filter.value,
                          selectedCategories,
                          setSelectedCategories,
                        )
                      }
                      className="h-4 w-4 accent-stone-700"
                    />
                    {filter.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* ================= Wear Type ================= */}
          <div className="border-t border-stone-200 rounded-lg pt-8">
            <button
              type="button"
              onClick={() => setShowWearType(!showWearType)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-700">
                Wear Type
              </h3>

              {/* Hidden on Desktop */}
              <div className="sm:hidden flex items-center">
                <img
                  src={assets.dropdown_icon}
                  alt=""
                  className={`h-3 -translate-x-2 transition-transform duration-300 ${
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
                        toggleFilter(
                          filter.value,
                          selectedSubcategories,
                          setSelectedSubcategories,
                        )
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

        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 xl:-translate-y-1">
            <p className="text-sm text-gray-500">
              Showing {filteredProducts.length} products
            </p>

            <select
              value={sortType}
              onChange={(event) => setSortType(event.target.value)}
              className="w-full sm:w-56 border border-stone-300 rounded-md px-4 py-3 text-sm text-gray-700 outline-none focus:border-stone-700"
              aria-label="Sort products"
            >
              <option value="relevant">Sort by: Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {filteredProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
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
