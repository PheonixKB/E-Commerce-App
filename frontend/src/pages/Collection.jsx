import React, { useContext, useMemo, useState } from 'react'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContextDefinition'

const categoryFilters = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Children', value: 'Kids' },
]

const ageFilters = [
  { label: 'Adults', value: 'Adults' },
  { label: 'Children', value: 'Children' },
]

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedAges, setSelectedAges] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleFilter = (value, selectedValues, setSelectedValues) => {
    setSelectedValues((currentValues) =>
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]
    )
  }

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)

      const productAgeGroup = product.category === 'Kids' ? 'Children' : 'Adults'
      const matchesAge =
        selectedAges.length === 0 || selectedAges.includes(productAgeGroup)

      return matchesCategory && matchesAge
    })

    return [...nextProducts].sort((a, b) => {
      if (sortType === 'price-low-high') {
        return a.price - b.price
      }

      if (sortType === 'price-high-low') {
        return b.price - a.price
      }

      return b.date - a.date
    })
  }, [products, selectedCategories, selectedAges, sortType])

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8  py-12">
      <div className="text-center mb-12">
        <Title text1="ALL" text2="COLLECTIONS" />
        <p className="max-w-2xl mx-auto mt-5 text-center text-gray-500 text-sm sm:text-base xl:translate-x-80 leading-7">
          Filter by audience and age group, then sort by price to find the right style faster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start">
        <aside className="border border-stone-200 rounded-lg p-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-700">
              Category
            </h3>

            <div className="mt-5 space-y-3">
              {categoryFilters.map((filter) => (
                <label key={filter.value} className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(filter.value)}
                    onChange={() => toggleFilter(filter.value, selectedCategories, setSelectedCategories)}
                    className="h-4 w-4 accent-stone-700"
                  />
                  {filter.label}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-200">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-700">
              Age Group
            </h3>

            <div className="mt-5 space-y-3">
              {ageFilters.map((filter) => (
                <label key={filter.value} className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={selectedAges.includes(filter.value)}
                    onChange={() => toggleFilter(filter.value, selectedAges, setSelectedAges)}
                    className="h-4 w-4 accent-stone-700"
                  />
                  {filter.label}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
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
  )
}

export default Collection
