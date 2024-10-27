import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Sitemap = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1 className="mb-4 text-center">Sitemap</h1>

                <div className="sitemap-card card mb-3">
                    <div className="card-header"><Link to="/" className='text-black'>Home</Link></div>
                </div>

                <div className="sitemap-card card mb-3">
                    <div className="card-header">Design Style</div>
                    <div className="card-body">
                        <div className="sub-menu">
                            <p><Link to="/living_room" className='text-black'>Living Room</Link></p>
                            <p><Link to="/kitchen" className='text-black'>Kitchen</Link></p>
                            <p><Link to="/bedroom" className='text-black'>Bedroom</Link></p>
                            <p><Link to="/elegant" className='text-black'>Elegant</Link></p>
                        </div>
                    </div>
                </div>

                <div className="sitemap-card card mb-3">
                    <div className="card-header"><Link to="/gallery" className='text-black'>Gallery</Link></div>
                </div>

                <div className="sitemap-card card mb-3">
                    <div className="card-header">Products</div>
                    <div className="card-body">
                        <div className="sub-menu">
                            <p><Link to="/products/furniture" className='text-black'>Furniture</Link></p>
                            <div className="sub-menu pl-3">
                                <p><Link to="/sofa" className='text-black'>Sofas and Couches</Link></p>
                                <p><Link to="/chairs" className='text-black'>Chairs and Recliners</Link></p>
                                <p><Link to="/tables" className='text-black'>Tables Dining, Coffee</Link></p>
                                <p><Link to="/storage" className='text-black'>Storage ,Cabinets, Shelves, Dressers</Link></p>
                            </div>
                            <p><Link  className='text-black'>Lighting</Link></p>
                            <div className="sub-menu pl-3">
                                <p><Link to="/ceilinglight" className='text-black'>Ceiling Lights</Link></p>
                                <p><Link to="/lamps" className='text-black'>Floor Lamps</Link></p>
                                <p><Link to="/outdoorlighting" className='text-black'>Outdoor Lighting</Link></p>
                            </div>
                            <p><Link to="/kitchen" className='text-black'>Kitchen</Link></p>
                            <div className="sub-menu pl-3">
                                <p><Link to="/cabinets" className='text-black'>Cabinets and Pantries</Link></p>
                                <p><Link to="/countertop" className='text-black'>Countertops</Link></p>
                                <p><Link to="/backsplashes" className='text-black'>Backsplashes</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sitemap-card card mb-3">
                    <div className="card-header"><Link to="/feedback" className='text-black'>Feedback</Link></div>
                </div>

                <div className="sitemap-card card mb-3">
                    <div className="card-header"><Link to="/contact_us" className='text-black'>Contact Us</Link></div>
                </div>

                <div className="sitemap-card card mb-3">
                    <div className="card-header"><Link to="/sitemap" className='text-black'>Site Map</Link></div>
                </div>

                <div className="sitemap-card card mb-3">
                    <div className="card-header"><Link to="/about" className='text-black'>About Us</Link></div>
                </div>

                <div className="sitemap-card card mb-3">
                    <div className="card-header"><Link to="/all_products" className='text-black'>All Products</Link></div>
                </div>

                <style jsx>{`
                    body {
                        background-color: #f8f9fa;
                    }
                    .sitemap-card {
                        transition: transform 0.2s, box-shadow 0.2s;
                    }
                    .sitemap-card:hover {
                        transform: scale(1.05);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }
                    .sub-menu {
                        padding-left: 20px;
                    }
                    .sub-menu p {
                        margin: 0;
                        transition: color 0.2s;
                    }
                    .sub-menu p:hover {
                        color: #007bff;
                    }
                `}</style>
            </div>
            <Footer />
        </>
    );
};

export default Sitemap;
