import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'




function App() {
  let newObject = {
    anotherName : "Sahil",
    age: 21
  }  
  return (
    <>
    <div className="flex justify-center mt-10">
      <h1 className="bg-green-500 inline-block text-black text-6xl px-6 py-2 leading-none rounded-lg mb-4">
        Tailwind Test
      </h1>
    </div>
    <Card username = 'chirag bansal' age = 'click me' test = {newObject} />
    <br />
    <Card username = 'jaya'  />
    </>
  )
}

export default App
