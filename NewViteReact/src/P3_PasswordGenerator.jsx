import { useCallback, useEffect, useRef, useState } from 'react'
// import './input.css'

export default function P2_PasswordGenerator(){

    let [length , setLength] = useState(8)
    let [number , setNumber] = useState(false)
    let [character , setCharacter] = useState(false)
    let [password , setPassword] = useState("")

    // Using useRef - 
    let passRef = useRef(null)

    // Using useCallback - is a React Hook that lets you cache a function definition between re-renders. (Optimized , use less space as the function is in the cache and called whenever needed) 
    // generating password
    const passGenerator = useCallback(() => {
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(number) str+= "1234567890"
        if(character) str+= "!@#$%^&*()_+="

        for (let index = 1; index < length; index++) {
            let getChar = [Math.floor(Math.random() * str.length + 1)]
            pass += str.charAt(getChar)
        }
        setPassword(pass)

    },[length, number, character])

    // copying password to clipboard
    const copyPass = useCallback(() => {
        passRef.current?.select()
        passRef.current?.setSelectionRange(0,100)
        window.navigator.clipboard.writeText(password)
    },[password])

    // Using useEffect - re-runs the program if any of the dependencies are changed
    useEffect(() => { 
        passGenerator() 
    } , [length, number, character, passGenerator])

    return(
        <div className="container w-[35%] h-[20vh] bg-gray-700 p-4 m-4 rounded-[20px] mx-auto"> 

            <h1 className='text-xl bold text-slate-200 text-center'>Get your Password:</h1>

            <div className="getpass flex justify-center my-2">
                <input type="text" value={password} className='w-[400px] h-[30px] ml-4 rounded-l-[20px] p-4 text-orange-700 bg-neutral-200' placeholder='Password'readOnly ref={passRef}/>
                <button className='bg-blue-600 h-[32px] px-4 text-slate-200 border-2 rounded-r-[20px]' onClick={copyPass}>Copy</button>
            </div>

            <div className="inputs flex items-center justify-between my-6 px-4 text-orange-500">
                <div className="range  flex items-center gap-x-2">
                    <input type="range" min={6} max={40} onChange={(e) => {setLength(e.target.value)}}/>
                    <label>Length : {length}</label>
                </div>
                <div className="options flex items-center gap-x-2">
                    <label> Character : </label>
                    <input type="checkbox" defaultChecked={character} onChange={() => {setCharacter((prev) => !prev)}}/>
                </div>
                <div className="options flex items-center gap-x-2">
                    <label> Number : </label>
                    <input type="checkbox" defaultChecked={number} onChange={() => {setNumber((prev) => !prev)}}/>
                </div>
            </div>

        </div>
    )
}
