import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'
const Plans = () => {
  return (
    <div className='plans-container'>
                <div className="plans-header">
                  <div className="blur blur-p"></div>
                  <div className="blur blur-pl"></div>
                        <span className='stroke-text'>READY TO START</span>
                        <span>YOUR JOURNEY</span>
                        <span className='stroke-text'>NOW WITHUS</span>
                    </div>
                <div className="plans">
                  {plansData.map((plans, i)=>(
                            <div className="plan" key={i}>
                                {plans.icon}
                              <span>{plans.name}</span>
                              <span>$ {plans.price}</span>

                              <div className="features">
                                {plans.features.map((features,i)=>(
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={i}>{features}</span>
                                    </div>
                                ))}
                                <div >
                                    <span><i>See More benefite</i> </span>
                                </div>
                                <button className='btn'>Jone now</button>
                                
                                
                                </div> 
                            </div>
                  ))}
                   
                    {/* </div> */}
                </div>
      
    </div>
  )
}

export default Plans
