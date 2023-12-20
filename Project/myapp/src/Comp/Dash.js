import React from 'react'
import Home from '../Page/Home'
// import { LogIn } from 'lucide-react';
function Dash() {
  return (
    <div className='Dash hv-100 wv-100 flex-col'>
      <div className='appbar hv-5 wv-95 flex  justify-center'>Bar</div>
      <div className='bar wv-5 flex theme-bg items-right justify-start'></div>
      <div className='content-container hv-100 wv-20 flex flex-row'></div>z
        <div className='theme-secondary leftbar theme-bg marginzero hv-20 wv-20 display flex'>
        <button value='Login' style={{height:'2cm',width:'4cm'}} onClick={Home}></button>
        <button value='About' onClick={Home} style={{height:'2cm',width:'4cm'}}></button>
        <button value='Home' onClick={Home} style={{height:'2cm',width:'4cm'}}></button>
      </div>
      <div className='item-center justify-center '>content</div>
      </div>  
  )
}
export default Dash