import {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContextDefinition';
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const [latestProducts , setLatestProducts]=useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])
  return (
    <section>

        {/* ===========================
            Section Heading
        =========================== */}
        <div className="max-w-3xl mx-auto lg:translate-x-48 xl:translate-x-96 text-center mb-12">

            <Title
                text1="LATEST"
                text2="COLLECTION"
            />

            <p className="max-w-2xl mx-auto mt-5 text-center text-gray-500 text-sm sm:text-base leading-7">
                Discover the latest fashion trends with our carefully curated collection of premium clothing.
                From everyday essentials to statement pieces, explore styles designed for every season and occasion.
            </p>

        </div>

        {/* ===========================
            Latest Collection Products
        =========================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(4,220px)] xl:grid-cols-[repeat(5,220px)] justify-center gap-8 justify-items-center lg:translate-x-16 xl:translate-x-24">

            {latestProducts.map((item) => (
                <ProductItem
                    key={item._id}
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))}

        </div>

    </section>
)
}

export default LatestCollection
