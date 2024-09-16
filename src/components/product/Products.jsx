import { BsStars } from "react-icons/bs"; 
import { BsFillBookmarkStarFill } from "react-icons/bs"; 
import { BiRightArrow } from "react-icons/bi"; 
import React from 'react'
import { useGetProductsQuery } from '../../redux/api/productsApi'
import { Button} from 'antd';
import { Link } from "react-router-dom";

const Products = () => {
  const { data } = useGetProductsQuery();

  console.log(data);
  return (
    <>
      <div className='rounded-lg w-96 m-auto mt-28 '>
        {
          data && data.payload &&
          data.payload.map(product => <Link to={`/singlePage/${product._id}`} className='flex flex-col shadow-2xl p-4 '>
            <p key={product._id} className='text-center font-bold text-[28px] font-serif text-blue-600'>{product.product_type}</p>
            <div className='flex flex-col items-center'>
              <img src={product.product_images[0]} alt="" className='w-72 ' />
              <div className=''>
                <p key={product._id} className="font-bold text-2xl">{product.product_name}</p>

                <div className="flex items-center justify-between mt-4">
                  <BsStars /><BsStars /><BsStars /><BsStars />
                <div className="flex items-center gap-1 justify-end">
                <BiRightArrow  className="text-[20px] text-blue-800"/>  
                <p key={product._id} className="">{product.original_price}$</p>
                </div>  
                </div>          
                <Button type="primary" className="w-full mt-4 text-[20px] p-2">ALL</Button>
              </div>
            </div>

          </Link>)
        }
      </div>
    </>
  )
}
export default Products