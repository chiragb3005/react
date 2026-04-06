import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

//   function changeColor (e){
//     const color = e.target.textContent.toLowerCase()
//     document.body.style.backgroundColor = color
//   } 

//   return (
//     <>
//       <button  onClick={changeColor} >Red</button>
//       <br />
//       <button  onClick={changeColor}>green</button>
//       <br />
//       <button  onClick={changeColor}>black</button>
//       <br />
//       <button  onClick={changeColor}>white</button>
//       <br />
//       <button  onClick={changeColor}>yellow</button>
//       <br />
//     </>
//   )


  let [color, setColor] = useState('olive')

  let changeColor = (e) => {
    let color = e.target.textContent.toLowerCase()
    setColor(color)
  }

  return (
    <div  className='w-full h-screen duration-200'
    style={{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2 text-black'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-pink-500 px-4 py-3 rounded-2xl'>
          <button onClick={changeColor} className='outline-none px-4 py-2 rounded-full text-white shadow-xl cursor-pointer' 
          style = {{backgroundColor: 'red'}} >
            Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-pink-500 px-4 py-3 rounded-2xl'>
          <button onClick={changeColor} className='outline-none px-4 py-2 rounded-full text-purple-950 shadow-xl cursor-pointer' 
          style = {{backgroundColor: 'yellow'}} >
            yellow</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-pink-500 px-4 py-3 rounded-2xl'>
          <button onClick={changeColor} className='outline-none px-4 py-2 rounded-full text-white shadow-xl cursor-pointer' 
          style = {{backgroundColor: 'blue'}} >
            blue</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-pink-500 px-4 py-3 rounded-2xl'>
          <button onClick={changeColor} className='outline-none px-4 py-2 rounded-full text-shadow-purple-900 shadow-xl cursor-pointer' 
          style = {{backgroundColor: 'white'}}>
            white</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-pink-500 px-4 py-3 rounded-2xl'>
          <button onClick={changeColor} className='outline-none px-4 py-2 rounded-full text-white shadow-xl cursor-pointer' 
          style = {{backgroundColor: 'black'}} >
            black</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-pink-500 px-4 py-3 rounded-2xl'>
          <button onClick={changeColor} className='outline-none px-4 py-2 rounded-full text-white shadow-xl cursor-pointer' 
          style = {{backgroundColor: 'orange'}} >
            orange</button>
        </div>
      </div>
    </div>
  )


}
export default App
