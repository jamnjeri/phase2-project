import React from 'react'
import footer from './footer.css'

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
                        <li><a href="#" className='pages'>Home</a></li>
                        <li><a href="#" className='pages'>About</a></li>
                        <li><a href="#" className='pages'>Services</a></li>
                        <li><a href="#" className='pages'>Contact</a></li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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