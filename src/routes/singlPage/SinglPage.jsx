import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSinglePageQuery } from '../../redux/api/singlePage'

const SinglPage = () => {

    const{id}=useParams()
    const{data}=useGetSinglePageQuery(id)
    console.log(data)

    const product=data?.payload

  return (
    <div className='w-[600px] mt-16 rounded-2xl shadow-2xl p-6 m-auto '>
        <div>
        {
            product? (<div>
                <p className='font-bold text-[28px] text-blue-600 text-center'>{product.product_name}</p>
                <div className='flex items-center mt-8'>
                <img className='max-w-[300px]' src={product.product_images[1]} alt="" />
                <div className='flex flex-col gap-4'>
                <p>{product.description}</p>
                <strong className=''>${product.sale_price}</strong>
                </div>
                </div>
                
                
            </div>) : (<p>loading</p>)
        }
    </div>
    </div>
  )
}

export default SinglPage