import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutImg from "../assets/img/about/aboutbanner.jpg";
import About1 from "../assets/img/about/about1.jpg";
import About2 from "../assets/img/about/about2.avif";
import About3 from "../assets/img/about/about3.webp";



function About() {
  return (
   <>
   <Navbar />
    <div className="container-fluid">
        <img src={AboutImg} style={{height: "450px", width: "100%"}} />
    </div>
    <div className="container">
        <h1 style={{textAlign: "center", paddingTop: "10px"}}>About Us</h1>
        <div className="row" style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <img src={About1} alt="" height="300px" width="500px"
                    style={{borderRadius: "10px"}} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <p style={{textAlign: "center"}}>At Home Styler, we believe that every space tells a story. With a passion for design and a keen eye for detail, our team of experienced interior designers is dedicated to transforming your vision into reality. We specialize in creating beautiful, functional environments that reflect your unique style and meet your specific needs. From cozy homes to dynamic commercial spaces, our collaborative approach ensures that every project is tailored to you. Let us help you craft a space that inspires and elevates your everyday life.</p>
            </div>
        </div>
        <div className="row" style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <p style={{textAlign: "center"}}>Home Styler, where imagination meets innovation in the world of interior design! We are passionate creators dedicated to infusing life into your spaces with elegance and flair. Our talented team harnesses the power of color, texture, and form to curate stunning environments that captivate and inspire. Whether you're dreaming of a serene sanctuary or a vibrant workspace, we blend functionality with aesthetic charm to elevate your vision. Join us on a journey to transform your surroundings into a masterpiece that reflects your personal style and enhances your lifestyle  </p>
            </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src={About2}
                        style={{borderRadius: "10px", height:"300px", width:"500px"}} />
                </div>
        </div>
        <div className="row" style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <img src={About3}
                    style={{borderRadius: "10px", height:"300px", width:"500px"}}/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <p style={{textAlign: "center"}}>We thrive on turning ordinary spaces into extraordinary experiences. Our dynamic team of designers is committed to exploring innovative concepts and crafting bespoke interiors that resonate with your personal style. With an eye for detail and a passion for aesthetics, we seamlessly blend functionality with beauty, ensuring that each project not only looks stunning but also enhances your everyday life. Let us embark on a creative journey together, where your dreams become the foundation of inspiring, one-of-a-kind environments.</p>
            </div>
        </div>
    </div>
    <Footer />
   </>
  )
}

export default About
