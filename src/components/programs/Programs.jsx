import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='programs'id='programs'>
        <div className="header-programs">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="contant-program">
          {programsData.map((program)=>(
            <div className="contant">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                       <div className="joun-now">
                         <span>Join_Now</span><img src={rightArrow}/>
                       </div>
                    
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Programs
