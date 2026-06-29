import {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title'

const LatestCollection = () => {
    const {products}=useContext(ShopContext);

  return (
    <div className="mt-40 text-center">

        <Title
            text1="LATEST"
            text2="COLLECTION"
        />

        <p className="mx-auto mt-6 px-6 text-center text-gray-500 text-base leading-8">
            Discover the latest fashion trends with our carefully curated collection of premium clothing.<br/>
            From everyday essentials to statement pieces, explore styles designed to elevate your wardrobe for every season and occasion.
        </p>

    </div>
  )
}

export default LatestCollection