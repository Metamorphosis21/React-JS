import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userId} = useParams()

  return (
    <div className='text-black p-3 text-2xl text-center font-bold'>
      User: <span className='text-orange-400'>{userId}</span>
    </div>
  )
}

export default User
