import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const { user } = useContext(UserContext)

    if (!user) return <div className='p-5 text-2xl'>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
