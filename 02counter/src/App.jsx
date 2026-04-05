import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // here setCounter is a method

  // let counter = 5

  const addValue = () => {
    if(counter<20){
      setCounter(counter + 1)
    }
    else{
      alert('Exceeds the maximum limit')
      return
    }
  }

  const removeValue = () => {
    if(counter>0){
      counter = counter -1
    setCounter(counter)
    }
    else{
      alert('Value cant go negative')
      return
    }
  }
  
  return (
  <>
    <h1>Chai aur React | ~CB</h1>
    <h2>Counter value: {counter}</h2>
    <br />
    <button onClick={addValue}>Add value </button> 
    <br />
    <button onClick={removeValue}>Remove value </button>
    <br />
    <p>footer: {counter}</p>
  </>
  )
}

export default App
