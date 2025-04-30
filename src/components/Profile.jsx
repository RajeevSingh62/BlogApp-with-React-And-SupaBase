import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {



const user=useSelector((store)=>store.auth.user)




console.log("useer data ",user)


  return (
    <div>
<h2>user details</h2>
<p>Email :{user.email}</p>
<p> Role :{user.user_metadata.role}</p>



<p>{user.id}</p>  


    </div>
  )
}

export default Profile