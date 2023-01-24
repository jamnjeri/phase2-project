import React from 'react'
import footer from './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h4>Contact Us</h4>
                    <p>123 Main St</p>
                    <p>Anytown, Kenya</p>
                    <p>+254 -xxx- xxx</p>
                    <p>info@covidology.co.ke</p>
                </div>

                <div className='col-md-4'>
                    <h4>Links</h4>
                    <ul>
                        <li><Link to={'/'} className='pages'>Home</Link></li>
                        <li><Link to={'countries'} className='pages'>Countries</Link></li>
                        <li><Link to={'map'} className='pages'>Map</Link></li>
                        <li><Link to={'sign-up'} className='pages'>Sign-Up</Link></li>
                        <li> <Link to={'sign-in'} className='pages'>Sign-In</Link></li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://github.com/jamnjeri/phase2-project"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2023 COVIDOLOGY Inc.</p>
            </div>
        </div>
    </div>

  )
}

export default Footer