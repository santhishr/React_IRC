import './Assets/css/home.css'
import './Components/Footer'
// import Footer from "./Components/Footer";
function App()
{
  return(
    <>
    <link href='./Components/Footer.js'></link>
    <button onClick="functionTOExecute" className="login">Login</button>
    <button onClick="functionTOExecute" className='reg'>Register</button>
    </>
  )
}
export default App;