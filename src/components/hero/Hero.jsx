import React from 'react'
import Header from '../header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from"../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from '../../assets/calories.png' 
import {motion} from 'framer-motion'
import './Hero.css'
import CountUp from 'react-countup'
  




function Hero() {
  const transition = { type: 'spring', duration: 3 }
  return (
    <div className='hero Home'>
      <div className="blur bulr-h"></div>

      <div className="left-h">
        <Header />


        <div className="the-best-ad">
          <motion.div
            initial={{ left: '220px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>the best fitness claub in the town</span>
        </div>
        {/* hero section */}

        <div className="hero-text">
          <div>
            <span className='stroke-text'>shape </span>
            <span>your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>In dolor sit, amet consectetur adipisicing elit. Architecto unde
              velit temporibus. Odi asperiores. Ab, alias fugiat!</span>
          </div>
        </div>

        {/* figers*/}

        <div className="figures">

          <div>
            <span>
              +
             
              <CountUp
                end={140}
                duration={3} />
            </span>
            <span>expert coachs</span>
          </div>

          <div>
            <span>+
            <CountUp
                end={987}
                duration={3} /></span>
            <span>members joined</span>
          </div>

          <div>
            <span>+
            <CountUp
                end={1500}
                duration={3} />
              </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero button */}
        <div className="hero-buttons">
          <button className='btn'>Get Started</button>
          <button className='btn'>learn more</button>
        </div>




      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div
          initial={{ right: '30px' }}
          whileInView={{
            left: '50px'
          }}
          transition={transition}



          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero_img */}

        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
          initial={{ right: '200px' }}
          whileInView={{ right: '350px' }}
          transition={transition}

          src={hero_image_back} alt="" className='hero-image-back' />

        {/* coltes img */}

        <motion.div

          initial={{ right: '100px' }}
          whileInView={{ right: '490px' }}
          transition={transition}




          className="calorise">
          <img src={Calories} alt="" />
          <div>
            <span>calorise Bruand</span>
            <span>220 klcl...</span>
          </div>
        </motion.div>



      </div>

    </div>
  )
}

export default Hero
