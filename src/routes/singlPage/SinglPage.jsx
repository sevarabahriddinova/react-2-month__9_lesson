import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSinglePageQuery } from '../../redux/api/singlePage'

const SinglPage = () => {

    const{id}=useParams()
    const{data}=useGetSinglePageQuery(id)
    console.log(data)

    const product=data?.payload

  return (
    <div>
        {
            product? (<div>
                <p>{product.product_name}</p>
                <strong>${product.sale_price}</strong>
                <img src={product.product_images[1]} alt="" />
                <p>{product.description}</p>
            </div>) : (<p>loading</p>)
        }
    </div>
  )
}

export default SinglPage