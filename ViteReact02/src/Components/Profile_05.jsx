import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'



function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <i><br/> Please Login</i>

    return <h2>Welcome {user.userName}</h2>
    
}

export default Profile
