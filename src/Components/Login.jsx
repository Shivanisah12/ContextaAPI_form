import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <>
            <h2 className='p-5 font-bold text-2xl'>Login</h2>
            <input className='text-black rounded p-1 ' type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            {" "}
            <input className='text-black rounded p-1 ' type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button className='text-black m-3' onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login
