import React,{useState} from "react"
function App() {
  const [color,setColor] = useState("rgba(122, 118, 118, 0.47)")
  return (
    <div className="w-full h-screen "
    style={{backgroundColor:color}}
    >
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>setColor("Red")}
          className="outline-2 px-5 py-1.5 rounded-full shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={()=>setColor("Blue")}
          className="outline-2 px-5 py-1.5 rounded-full shadow-lg"
          style={{backgroundColor:"lightblue"}}
          >Blue</button>
          <button
          onClick={()=>setColor("green")}
          className="outline-2 px-5 py-1.5 rounded-full shadow-lg"
          style={{backgroundColor:"lightgreen"}}
          >Green</button>
          <button
          onClick={()=>setColor("yellow")}
          className="outline-2 px-5 py-1.5 rounded-full shadow-lg"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button
          onClick={()=>setColor("black")}
          className="outline-2 px-5 py-1.5 rounded-full shadow-lg"
          style={{backgroundColor:"grey"}}
          >Black</button>
          <button
          onClick={()=>setColor("Orange")}
          className="outline-2 px-5 py-1.5 rounded-full shadow-lg"
          style={{backgroundColor:"Orange"}}
          >Orange</button>
          <button
          onClick={()=>setColor("Pink")}
          className="outline-2 px-5 py-1.5 rounded-full shadow-lg"
          style={{backgroundColor:"pink"}}
          >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
