import './login.css'
const login=()=>{
  return(
    <div className='container'>
      <div className='header'>
      <div className='text'>sign up</div>
      <div className='underline'></div>
      </div>
      <div className='inputs'>
      <div className='input'>
      <img src={user_icon}alt=""/>
      <input type='text'/>
      <div className='input'>
      <img src={email_icon}alt=""/>
      <input type='email'/>
      </div>
      </div>
      <div className='submit-container'>
        <div className='submit'>Sign up</div>
      </div>
      </div>
    </div>
  )
}
export default App