import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //      .then(response => response.json())
    //      .then(data => {
    //         console.log(data);
    //         setData(data)
    //      })
    // },[])

  return (
    <div className='text-center text-2xl text-black p-3 font-bold'> 
      Github Followers: <span className='text-orange-500'>{data.followers}</span>
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}