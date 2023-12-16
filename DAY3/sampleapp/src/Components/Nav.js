import React from 'react';
// import App from './App';
import '../Assets/css/home.css'
function Nav()
{
    return(
        <div className='d1'>
        <>
        <input className='log' placeholder='name'></input>
        <input className='log' placeholder='email'></input>
        <button className='btn'>Login</button>
        </>
        </div>
    );
}
export default Nav