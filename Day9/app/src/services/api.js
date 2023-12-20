import axios from 'axios'
const URL = 'http://localhost:3000'
const getUser =()=> axios.get(`${URL}/user`)
const GetUserID =(id)=> axios.get(`${URL}/user/${id}`)
const addUser =(data)=> axios.post(`${URL}/users/` , data)
const EditUser =(id,data)=> axios.put(`${URL}/users/$(id)`,data)
const deleteUser =(id)=> axios.delete(`${URL}/users/$(id)`)
export {getUser ,GetUserID, addUser, EditUser, deleteUser}