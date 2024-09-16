import React from 'react'
import { useGetProfileQuery } from '../../redux/api/profile'


const Profile = () => {

  const {data}=useGetProfileQuery()
  console.log(data)

  return (
    <div>
      {
        data ? (<div>
          <img src={data.payload.photo_url} alt="" />
          <p>{data.payload.first_name}</p>
          <p>{data.payload.username}</p>
          <p>{data.payload.role}</p>

          </div>
          ) : (
          <p>Loading...</p>
          )
      }
      
    </div>
  )
}


export default Profile