import React from 'react'
import Image from '../assets/img/hero.jpg'
function Footer() {
  return (
    <div>
       <div className="container-fluid bg-dark pt-5 pb-5">
        <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
                <img src={Image} alt="" style={{height: "190px", width: "50%", borderRadius: "50%"}} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
                <ul>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">Home Page</a></li>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">Gallery</a></li>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">About Us</a></li>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">Contact Us</a></li>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">Feedback</a></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12" >
                <ul>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}} href="#">Living room</a></li>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">Kitchen</a></li>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">Bedroom</a></li>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">Contemporary</a></li>
                    <li><a style={{textDecoration: "none", color: "aliceblue"}}  href="#">Elegant</a></li>
                </ul>
            </div>                             
        </div>
    </div>
    </div>
  )
}

export default Footer
