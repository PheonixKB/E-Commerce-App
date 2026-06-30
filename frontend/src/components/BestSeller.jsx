import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
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
    <div className='m-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='mx-auto mt-6 px-6 text-center text-gray-500 text-base leading-8'>
                Explore our best-selling collection of men's, women's, and children's fashion. Handpicked by our customers for style, comfort, and quality.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default BestSeller