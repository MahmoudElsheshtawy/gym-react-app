import React,{useState} from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth<=768 ?true :false
  const [menuOpened ,setMenuOpened]=  useState(false)

  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />
      {(menuOpened === false && mobile===true)?(
      <div
      onClick={()=>setMenuOpened(true)}
      
      
      ><img src={bars} className="bars" alt="" /></div>
      ):
      <ul className= 'header-menu '>
      <li ><Link  onClick={ ()=>setMenuOpened(false)} to='Home' spy={true}smooth={true}duration={500}>Home</Link></li>
      <li ><Link onClick={ ()=>setMenuOpened(false)}to='programs'spy={true}smooth={true} >Programs</Link></li>
      <li ><Link onClick={ ()=>setMenuOpened(false)} to='Why us' spy={true} smooth={true}>Why us</Link></li>
      <li ><Link onClick={ ()=>setMenuOpened(false)} to='plan' spy={true} smooth={true}>Plan</Link></li>
      <li ><Link onClick={ ()=>setMenuOpened(false)}to='testimonials'spy={true} smooth={true} duration={500}>Testimonials</Link></li>
      </ul>
      }
       
      
        












    </div>
  )
}

export default Header
