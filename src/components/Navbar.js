import React from 'react'
import LOGO from "../assets/COVIDOLOGY.png"
import styles from "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <img src={LOGO} className="logo" />
        <h1 className='title'>COVIDOLOGY</h1> 
        <Link to={'/'}>Home</Link>
        <Link to={'countries'}>Countries</Link>
        <Link to={'map'}>Map</Link>
        <Link to={'sign-up'}>Sign-Up</Link>
        <Link to={'sign-in'}>Sign-In</Link>
    </div>
  )
}

export default Navbar