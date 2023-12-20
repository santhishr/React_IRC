import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Users from './Pages/Users';
import Adduser from './Pages/Adduser'
import Edituser from './Pages/Edituser'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/add' element={<Adduser/>}/>
      <Route path='/edit' element={<Edituser/>}/>
    </Routes>
    </>
  );
}
export default App;