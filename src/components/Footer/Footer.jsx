import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Our user-friendly platform makes it easy to explore menus, customize orders, and track deliveries in real-time. Thank you for choosing us to satisfy your cravings—your satisfaction is our top priority.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="img" />
                    <img src={assets.twitter_icon} alt="img" />
                    <img src={assets.linkedin_icon} alt="img" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN  TOUCH</h2>
                <ul>
                    <li>+91 2312345667</li>
                    <li>contact@tomoto.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 @ Tonoto.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer