import React from "react"
import { useState, useContext } from "react"
import UserContext from "../Context/UserContext._01js"

function Login() {
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)

  const submitHandle = (e) => {
    e.preventDefault()
    setUser({userName,password})
  }

  return (
    <div>
      <u className="p-3"><h1>LoginPage</h1></u>
      <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
      <br />
      <br />
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      <br />
      <br />

      <button onClick={submitHandle}>Submit</button>
    </div>
  );
}

export default Login
