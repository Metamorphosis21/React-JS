
import { useState } from 'react'
import './input.css'

function P1_BgChanger() {
    
    const [color, setColor] = useState("gray")

    return(
        <div className= 'h-screen w-full flex justify-center' style={{backgroundColor:color}}>
            <div className='sticky top-10 h-[80px] w-[80%] p-4 bg-white rounded-full flex flex-wrap justify-between'>
                <button onClick= {() => setColor("red")} className='p-3 bg-red-600 rounded-full text-white'>Red</button>
                <button onClick= {() => setColor("blue")} className='p-3 bg-blue-600 rounded-full text-white'>Blue</button>
                <button onClick= {() => setColor("green")} className='p-3 bg-green-700 rounded-full text-white'>Green</button>
                <button onClick= {() => setColor("pink")} className='p-3 bg-pink-300 rounded-full text-white'>Pink</button>
                <button onClick= {() => setColor("black")} className='p-3 bg-black rounded-full text-white'>black</button>
                <button onClick= {() => setColor("orange")} className='p-3 bg-orange-400 rounded-full text-white'>orange</button>
                <button onClick= {() => setColor("violet")} className='p-3 bg-violet-500 rounded-full text-white'>Violet</button>
                <button onClick= {() => setColor("yellow")} className='p-3 bg-yellow-400 rounded-full text-white'>Yellow</button>
                <button onClick= {() => setColor("olive")} className='p-3 bg-green-900 rounded-full text-white'>Olive</button>
            </div>
        </div>
    )
}

export default P1_BgChanger