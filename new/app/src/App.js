import './Asset/style.css'
function App(){
return(
<div>
 <form class="container" onclick="Submit()">
             <header id="header"></header>
            <nav class="NAV" id="nav bar">
                <ul>
                    {/* <button <li><a href=basic.html</li>>LOGIN</a> </li> </button> */}
                </ul>
            </nav> 
             <h2>SPORT EPORIUM</h2> 
             <h1 className="r"></h1>
            <div className="r"></div>
            <nav className="r"></nav>
            <input type="Name" placeholder="Name" className="Name" id="name"></input> 
            <input type="Email" placeholder="Email" className="Name" id="Email"></input>
            <input type="Age" placeholder="Age" className="Name"></input> 
            <button className="Submit" onclick="Submit">Register</button>
            {/* <button onclick="function()">click  */}
</form>
</div>
    )
}
export default App