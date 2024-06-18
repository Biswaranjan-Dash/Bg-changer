import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-500"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div  className="flex flex-wrap bg-white px-4 py-3 rounded-2xl gap-4">
          <button onClick={()=>{setColor("red")}} className="bg-red-600 px-2 py-1 rounded-xl text-3xl text-white" >Red</button>
          <button onClick={()=>{setColor("Blue")}} className="bg-blue-600 px-3 py-2 rounded-xl text-3xl text-white" >Blue</button>
          <button onClick={()=>{setColor("Green")}} className="bg-green-600 px-2 py-1 rounded-xl text-3xl text-white" >Green</button>
          <button onClick={()=>{setColor("Violet")}} className="bg-violet-600 px-2 py-1 rounded-xl text-3xl text-white" >Violet</button>
          <button onClick={()=>{setColor("Black")}} className="bg-black px-2 py-1 rounded-xl text-3xl text-white" >Black</button>
          <button onClick={()=>{setColor("Yellow")}} className="bg-yellow-600 px-2 py-1 rounded-xl text-3xl text-white" >Yellow</button>
          <button onClick={()=>{setColor("orange")}} className="bg-orange-600 px-2 py-1 rounded-xl text-3xl text-white" >Orange</button>

        </div>


      </div>
    </div>
  )
}

export default App
