import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer-container'>
      <hr/>
      <div className="blur bulr-1"></div>
      <div className="blur bulr-2"></div>
      <div className="footer">

        <div className="socail-links">
            <img src={github} alt="" />
            <img src={instagram}alt="" />
            <img src={linkedin} alt="" />
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
      </div>
     
     
      
    </div>
  )
}

export default Footer
