import React from 'react'
import { deleteUser, getUser } from '../services/api'
import { useEffect, useState } from 'react'
function Users() {
  const [user, setUser] = useState([])
  const fetchData = async () => {
    try {
      const res = await getUser()
      // console.log(res.data)
      setUser(res.data)
    }
    catch (e) {
      console.log(e);
    }
  }
  const handleDelete = async(id)=>{
    try{
      const res=await deleteUser(id)
      if(res.status ==200){
        alert('deleted')
      }
    }
    catch(e){
      console.log(e)
  }
}
}
  console.log(user);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={()=>{}}>Delete</button>
              </td>
              <td>
                <button>edit</button>
              </td>
            </tr>
          )
          )
          }
        </tbody>
      </table>
    </>
  );
export default Users