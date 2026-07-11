import React, { useMemo } from 'react'
import { useProductContext } from '../context/product/ProductContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useProductContext();

    const bestSeller = useMemo(() => {
        return products.filter((item) => item.bestseller).slice(0, 5);
    }, [products]);

  return (
    <section className='max-w-8xl'>

        {/* ===========================
            Section Heading
        =========================== */}
        <div className="mx-auto text-center mb-12">

            <Title
                text1="BEST"
                text2="SELLERS"
            />

            <p className="mx-auto mt-5 text-center text-gray-500 text-sm sm:text-base leading-7">
                Explore our best-selling collection of men's, women's, and children's fashion.
                Handpicked by our customers for style, comfort, and quality.
            </p>

        </div>

        {/* ===========================
            Best Seller Products
        =========================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(4,220px)] xl:grid-cols-[repeat(5,220px)] justify-center gap-8 justify-items-center">

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
