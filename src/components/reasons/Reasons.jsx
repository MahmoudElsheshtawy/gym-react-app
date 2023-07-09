import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'

import nb from '../../assets/nb.png'
import nike from '../../assets/nike.png'
import adidas from '../../assets/adidas.png'
const Reasons = () => {
  return (
    <div className='reasons'>
        <div className='left-r'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className='right-r'>
            <span>Some reasons</span>
            
            <div>
                <span className='stroke-text'>Why</span>
                <span>choose us?</span>
            </div>
            {/* tikt */}
         
         <div className='tickt'>
                <img src={tick} alt="" />
                <span>Over 140+ Export Coatchs</span>
            </div> 
            <div className='tickt'>
                <img src={tick} alt="" />
                <span>Train Samarter and Faster than member</span>
            </div>
             <div className='tickt'>
                <img src={tick} alt="" />
                <span> 1 Free Program for new before</span>
            </div>
             <div className='tickt'>
                <img src={tick} alt="" />
                <span> Remhafy Preary</span>
            </div>
            <span style={{color:'#aaa',fontWeight:'bold',fontSize:'16px',}}>Sabah elfole</span>
       
              <span className='bartenar'>
                <img src={nb} alt="" />
                <img src={nike} alt="" />
                <img src={adidas} alt="" />
              </span>



            {/* tikt */}
        </div>
      
    </div>
  )
}

export default Reasons
