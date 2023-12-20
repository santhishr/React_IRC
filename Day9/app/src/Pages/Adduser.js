import React, { useState } from 'react'
const Adduser =()=>{
  const[ data,setData]=useState({
    username:'',
    password:'',
  })
  const handleChange =(e)=>{
    setData({...data})
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
  }
}
function Adduser() {
  return (
    <form>
    <input type='text' id='username' placeholder='name'>
    <input type='password' id='password' placeholder='password'></input>
    <button type='submit' className='submit-btn'>Add</button>
    </input>
    </form>
  )
}

export default Adduser