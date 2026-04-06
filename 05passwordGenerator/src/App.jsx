import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [password, setPassword] = useState('')

// ref hook

const passRef = useRef(null)



const passwordGenerator = useCallback( () => {
  let pass = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  if(numberAllowed) {
    str += '0123456789'
  }
  if(charAllowed){
    str += '@!#$*-+<>;'
  }

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)

} , [length, numberAllowed, charAllowed, setPassword])


const copyPasswordToClipboard = useCallback(() => {
  passRef.current?.select();
  passRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password)
}, [password])

useEffect ( () => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator] )

  return (
    <>
      <div className='text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-300 bg-gray-500'>
        <h1 className='text-white text-center py-4 text-3xl my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
           value={password}
            className='outline-none w-full py-1 px-3 bg-white text-black' 
            placeholder='password' 
            readOnly 
            ref={passRef}/> 
            <button 
            className='bg-blue-600 outline-none text-white px-3 py-0.5 shrink-0 cursor-pointer'
            onClick={copyPasswordToClipboard}>
              Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min = {8}
            max = {25}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}/>
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id='numberInput'
            className='cursor-pointer'
            onChange={(e) => {
              setNumberAllowed( (prev) => !prev )
            }}/>
            <label htmlFor='numberInput'>Numbers</label>
            </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked = {charAllowed}
            id='charInput'
            className='cursor-pointer'
            onChange={(e) => {
              setCharAllowed( (prev) => !prev )
            }}/>
            <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
        </div>
    </>
)
}
export default App
