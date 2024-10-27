import React from 'react'
import './assets/css/style.css'
// import './assets/css/banner.css'
import './assets/css/products.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import LivingRoom from './Pages/LivingRoom'
import Kitchen from './Pages/Kitchen'
import Bedroom from './Pages/Bedroom'
import Elegant from './Pages/Elegant'
import Sofa from './Pages/Sofa'
import Chairs from './Pages/Chairs'
import Tables from './Pages/Tables'
import Storage from './Pages/Storage'
import CeilingLights from './Pages/CeilingLights'
import Lamps from './Pages/Lamps'
import OutDoorLighting from './Pages/OutDoorLighting'
import Cabinets from './Pages/Cabinets'
import Countertop from './Pages/Countertop'
import BackSplashes from './Pages/BackSplashes'
import AllProducts from './Pages/AllProducts'
import ContactForm from './Pages/ContactForm';
import Feedback from './Pages/Feedback';
import Gallery from './Pages/Gallery';
import Sitemap from './Pages/Sitemap';


function Layout() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/living_room" element={< LivingRoom/>} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/sofa" element={<Sofa />} />
  <Route path="/chairs" element={<Chairs />} />
  <Route path="/tables" element={<Tables />} />
  <Route path="/storage" element={<Storage />} />
  <Route path="/kitchen" element={<Kitchen />} />
  <Route path="/bedroom" element={<Bedroom />} />
  <Route path="/feedback" element={<Feedback />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact_us" element={<ContactForm/>} />
  <Route path="/ceilinglight" element={<CeilingLights />} />
  <Route path="/lamps" element={<Lamps />} />
  <Route path="/outdoorlighting" element={<OutDoorLighting />} />
  <Route path="/cabinets" element={<Cabinets />} />
  <Route path="/countertop" element={<Countertop />} />
  <Route path="/backsplashes" element={<BackSplashes />} />
  <Route path="/allproducts" element={<AllProducts />} />
  <Route path="/elegant" element={<Elegant />} />
  <Route path="/sitemap" element={<Sitemap />} />


</Routes>
</BrowserRouter>
</>
  )
}

export default Layout
