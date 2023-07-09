import React,{useState} from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'


const Testimonials = () => {
    const [selected , setSelected] = useState(0);
    const tlength = testimonialsData.length;
    const transition = {type: 'spring', duration : 3}
  return (
    <div className='testimonials'>
        {/* left */}
        <div className="left-t">
          <span>Testimonials</span>
          <span className='stroke-text'>WHAT THEY</span>
          <span>say about us</span>
        <motion.span
          key={selected}
          initial={{opacity:0,x:-100}}
          animate={{opacity:1 ,x:0 }}
          exit={{opacity:0 , x:100}}
          transition={{transition ,duration:1}}
        
        
        
        >
            {testimonialsData[selected].review}
          </motion.span>
          <span>
            <span style={{color:'var(--orange)',fontSize:'1rem'}}>
                {testimonialsData[selected].name}
            </span>{""}
            - {testimonialsData[selected].status}
          </span>
        </div>
        {/* left */}
       
        {/* right */}
        <div className="right-t">
            <motion.div
                 initial={{opacity:0 , x:-100}}
                 whileInView={{opacity:1,x:0}}
                 transition={{...transition, duration:2}}     
            ></motion.div>
            <motion.div
              initial={{opacity:0 , x:100}}
              whileInView={{opacity:1,x:0}}
              transition={{...transition, duration:2}}
            
            
            
            >

            </motion.div>
                   
            <motion.img 
            key={selected}
            initial={{opacity:0,x:100}}
            animate={{opacity:1 ,x:0 }}
            exit={{opacity:0 , x:-100}}
            transition={{transition ,duration:1}}
            
            
            
            
            
            src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img 
                onClick={()=>{
                     selected ===0
                     ? setSelected(tlength -1)
                     : setSelected((prev)=> prev -1)
                }}

                src={leftArrow} alt="" />
                <img 
                 onClick={()=>{
                    selected === tlength - 1
                    ? setSelected(0)
                    : setSelected((prev)=> prev +1)
                }}
                
                
                src={rightArrow} alt="" />
            </div>



        </div>
        {/* right */}
      
    </div>
  )
}

export default Testimonials
