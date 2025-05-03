
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






  return (
    <div>Profile</div>
  )
}

export default Profile

