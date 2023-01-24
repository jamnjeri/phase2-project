import React from 'react'
import LOGO from "../assets/COVIDOLOGY.png"
import styles from "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <img src={LOGO} className="logo" />
        <h1 className='title'>COVIDOLOGY</h1> 
        <a href='./'>Home</a>
        <a href='./countries'>Countries</a>
        <a href='./map'>Map</a>
        <a href='./sign-up'>Sign-Up</a>
        <a href='./sign-in'>Sign-In</a>
    </div>
  )
}

export default Navbar