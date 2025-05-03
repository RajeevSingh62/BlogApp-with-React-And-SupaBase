
import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/features/UsersDetails/UserSlice";


const Profile = () => {
  const user = useSelector((state) => state.users);
  console.log("useer data ", user);

  useEffect(() => {
    const dispatch = useDispatch();
    dispatch(fetchUsers());
  }, []);



<<<<<<< HEAD
const user=useSelector((store)=>store.auth.user)

=======
>>>>>>> 487d999269300b6510f1bfc1e0324ee1f1fc92e4



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

