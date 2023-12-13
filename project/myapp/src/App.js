import React from 'react'
import { BrowserRouter as Router, Routes, Switch ,Route } from 'react-router-dom'
import head from './Comp/head'
import Showcase from './Comp/Showcase'
import loc from './Comp/loc.js'
import f from './Comp/f'
import Login from './Comp/login.js'
import signUp from './Comp/signup'
import position from './Comp/position'
function App() {
  return (
    <Route>
      <head />  
      <Switch>
        <Route exact path='/'>
          <Showcase />
          <loc/>
        </Route>
        <Route path='/login'>
          <login />
        </Route>
        <Route path='/signup'>
          <signUp />
        </Route>
        <Route path='*'>
          <position />
        </Route>
      </Switch>
      <f />
    </Route>
  )
}
export default App