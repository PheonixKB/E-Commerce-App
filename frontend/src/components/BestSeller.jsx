import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextDefinition'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);
    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);
  return (
    <section>

        {/* ===========================
            Section Heading
        =========================== */}
        <div className="max-w-3xl mx-auto lg:translate-x-48 xl:translate-x-96 text-center mb-12">

            <Title
                text1="BEST"
                text2="SELLERS"
            />

            <p className="max-w-3xl mx-auto mt-5 text-center text-gray-500 text-sm sm:text-base leading-7">
                Explore our best-selling collection of men's, women's, and children's fashion.
                Handpicked by our customers for style, comfort, and quality.
            </p>

        </div>

        {/* ===========================
            Best Seller Products
        =========================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(4,220px)] xl:grid-cols-[repeat(5,220px)] justify-center gap-8 justify-items-center lg:translate-x-16 xl:translate-x-24">

            {bestSeller.map((item) => (
                <ProductItem
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                />
            ))}

        </div>

    </section>
)
}

export default BestSeller
