import {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const [latestProducts , setLatestProducts]=useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className="my-20">
        <div className='text-center py-8 text-3xl'>
            <Title
                text1="LATEST"
                text2="COLLECTION"
            />

            <p className="mx-auto mt-6 px-6 text-center text-gray-500 text-base leading-8">
                Discover the latest fashion trends with our carefully curated collection of premium clothing.<br/>
                From everyday essentials to statement pieces, explore styles designed to elevate your wardrobe for every season and occasion.
            </p>
        </div>

        <div className="h-6"></div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default LatestCollection