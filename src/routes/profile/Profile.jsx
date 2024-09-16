import { BsStars } from "react-icons/bs"; 
import { RxAvatar } from "react-icons/rx"; 
import React from 'react'
import { useGetProfileQuery } from '../../redux/api/profile'


const Profile = () => {

  const {data}=useGetProfileQuery()
  console.log(data)

  return (
    <div className='w-[600px] m-auto mt-12 shadow-xl p-4 '>
      <div>
      {
        data ? (<div>
          
          <div className='flex flex-col items-center gap-8 p-5'>
            <p className='font-bold text-[28px] uppercase  text-blue-800'>{data.payload.first_name}</p>
            <img className='w-[400px] rounded-md' src={data.payload.photo_url} alt="" />
          <div className="flex items-center gap-4">
          <BsStars /><BsStars /><BsStars /><BsStars /><BsStars />
          <p className="text-[20px]">{data.payload.username}</p>
          </div>
         <div className="flex items-center gap-4">
          <BsStars /><BsStars /><BsStars /><BsStars /><BsStars />
          <div className="flex gap-2 items-center">
          <RxAvatar className="text-[24px] shadow-xl  " />
          <p>{data.payload.role}</p>
          </div>
         </div>
          
          </div>

          </div>
          ) : (
          <p>Loading...</p>
          )
      }
      
    </div>
    </div>
  )
}


export default Profile