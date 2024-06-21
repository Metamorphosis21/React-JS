// 2nd Step -
// .jsx file as it overlays over other files

import React from "react"
import UserContext from "./UserContext"
import { useState } from "react"

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}} > 
        {/* the prop value gives the access to the datas to the provider */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider