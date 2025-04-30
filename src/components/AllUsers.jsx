import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/features/users/UserSlice";
const AllUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);
  console.log("selectors data", users.users);
 
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  console.log("useer tttttt data ", users);
  return (
    
 <>

    <div style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>All Users Details</h1>
      <div>
        <table
          style={{
            width: "60%",
            border: "1px solid black",
            margin: "20px auto",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                Id
              </th>

              <th
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                Full Name
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                    Role
                
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
            CreatedAt
              </th>
            </tr>
          </thead>
          <tbody>
         {users?.map((user)=>(
               <tr key={user.id}>
               <td
                 style={{
                   padding: "10px",
                   border: "1px solid black",
                   textAlign: "center",
                 }}
               >
                    {user.id}
               </td>
               <td
                 style={{
                   padding: "10px",
                   border: "1px solid black",
                   textAlign: "center",
                 }}
               >
               {user.full_name}
               </td>
               <td
                 style={{
                   padding: "10px",
                   border: "1px solid black",
                   textAlign: "center",
                 }}
               >
            {user.email}
               </td>
               <td
                 style={{
                   padding: "10px",
                   border: "1px solid black",
                   textAlign: "center",
                 }}
               >
            {user.role}
               </td>
               <td
                 style={{
                   padding: "10px",
                   border: "1px solid black",
                   textAlign: "center",
                 }}
               >
            {user.created_at}
               </td>
             </tr>
         ))}
          </tbody>
        </table>
      </div>
    </div>
 </>
  );
};

export default AllUsers;
