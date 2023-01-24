import React from 'react'
import LOGO from "../assets/COVIDOLOGY.png"
import styles from "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <img src={LOGO} className="logo" />
        <h1 className='title'>COVIDOLOGY</h1> 
        <a href="#home" className='link'>Home</a>
        <a href="#home" className='link'>Countries</a>
        <a href="#home" className='link'>Map</a>
        <a href="#news" className='link'>Sign up</a>
        <a href="#contact" className='link'>Sign in</a>
    </div>
  )
}

export default Navbar