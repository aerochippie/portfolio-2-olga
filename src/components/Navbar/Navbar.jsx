import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
   <section className='navbar-container'>
    <section className="navbar">
      <div className="navbar-left">
        <Link to='/'> <img src="/logo.png" alt="" /> </Link>
        <Link to='/'> home </Link>
        <Link to='/projects'> projects </Link>
        <Link to='/about'> about </Link>
          
      </div>
      <div className="navbar-right">
    
      </div>
    </section>
   </section>
  )
}
