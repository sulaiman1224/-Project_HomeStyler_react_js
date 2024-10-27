import React from 'react'
import Banner from '../assets/img/banner.jpg';

function Hero() {
  return (
   <>
   <div>
        <div className="container-fluide" style={{position: "relative",top: "0px"}}>
            <img src={Banner} alt="" className="background-image" />
            <div className="overlay">
                <h1>Home Styler</h1>
                <p>Transform Your Space, Ignite Your Style!</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Hero
