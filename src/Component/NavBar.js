import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  
  return (
      <div>
        <div className='container__header'>
                <p>The</p>
                <h1>Siren</h1>
                
    </div>
            <br></br>
            <br></br>
        
        <div className='nav'>
         <ul>
             <h3><li><Link style={{color : "black", textDecoration : "none"}} to ="/">Home</Link></li></h3>
             <h3><li><Link style={{color : "black", textDecoration : "none"}} to="/bollywood" >Bollywood</Link></li></h3>
             <h3><li><Link style={{color : "black", textDecoration : "none"}} to="/technology">Technology</Link></li></h3>
             <h3><li><Link style={{color : "black", textDecoration : "none"}} to="/hollywood">Hollywood</Link></li></h3>
             <h3><li><Link style={{color : "black", textDecoration : "none"}} to="/fitness">Fitness</Link></li></h3>
             <h3><li><Link style={{color : "black", textDecoration : "none"}} to="/food">Food</Link></li></h3>
         </ul>
     </div>
     <br/>
    <hr></hr>
    </div>
  )
}

export default NavBar