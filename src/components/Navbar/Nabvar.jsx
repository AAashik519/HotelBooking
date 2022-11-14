import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Nabvar = () => {
  return (
    <div className='navbar'> 
    <div className="navbarContainer">
      <Link to='/' style={{color:"inherit", textDecoration:"none"}}>
        <span className='logo'>lamabooking</span>
      </Link>
        <div className="navItems">
            <button className='navButton'>Register</button>
            <button className='navButton'> Login</button>
        </div>

    </div>
         
    </div>
  )
}

export default Nabvar