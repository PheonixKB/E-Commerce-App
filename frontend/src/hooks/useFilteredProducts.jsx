import { useMemo } from "react";

const normalizeWord = (word) => {
  let w = word.toLowerCase().trim();

  // Remove apostrophes
  w = w.replace(/'/g, "");

  // Normalize gender words
  if (["man", "men", "mens"].includes(w)) return "men";
  if (["woman", "women", "womens"].includes(w)) return "women";

  // Singularize common plurals
  if (w.endsWith("ies")) return w.slice(0, -3) + "y";

  if (w.endsWith("es") && w.length > 4) return w.slice(0, -2);

  if (w.endsWith("s") && w.length > 3) return w.slice(0, -1);

  return w;
};

const useFilteredProducts = (
  products,
  searchQuery,
  selectedCategories,
  selectedSubcategories,
  sortType
) => {
  return useMemo(() => {
    const searchTerms = searchQuery
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .map(normalizeWord);

    const filtered = products.filter((product) => {
      const searchableWords = `
        ${product.name}
        ${product.description}
        ${product.category}
        ${product.subCategory}
      `
        .toLowerCase()
        .replace(/-/g, "")
        .replace(/[^\w\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .map(normalizeWord);

      const matchesSearch =
        searchTerms.length === 0 ||
        searchTerms.every((term) =>
          searchableWords.some((word) => word.startsWith(term))
        );

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesSubcategory =
        selectedSubcategories.length === 0 ||
        selectedSubcategories.includes(product.subCategory);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubcategory
      );
    });

    return [...filtered].sort((a, b) => {
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
};

export default useFilteredProducts;