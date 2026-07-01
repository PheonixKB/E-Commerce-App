import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextDefinition'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
    const productImage = Array.isArray(image) ? image[0] : image;
  return (
    <Link className='group w-full max-w-[220px] text-center text-gray-700' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className="w-full aspect-[4/5] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105" src={productImage} alt={name} />
        </div>
        <p className='mt-4 text-sm font-medium line-clamp-2'>{name}</p>
        <p className='mt-1 text-stone-800 font-semibold'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
