import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Login () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2 className="text-3xl text-center pd-3 text-white">Login</h2>
            <br />
            <input 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border 2 border-white rounded-md bg-white text-black-600 "
            type="text" 
            value = {username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username"  />
            <br />
            <br />
            <input type="password" 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border 2 border-white rounded-md bg-white text-black-600 "
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"  />
            <br />
            <br />
            <button onClick={handleSubmit} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">Submit</button>
            <br />
            <br />
        </div>
    )
}


export default Login;