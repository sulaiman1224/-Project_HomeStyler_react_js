import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function Navbar() {
  return (
   <div id="nav">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex main_nav">
        <Link className="navbar-brand me-5" to="/">Logo</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Design Style
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/living_room">Living Room</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/kitchen">Kitchen</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/bedroom">Bedroom</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/elegant">Elegant</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </Link>
              <ul className="dropdown-menu">
                <li className="nav-item dropend">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Furniture
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/sofa">Sofas and Couches</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/chairs">Chairs and Recliners</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tables">Tables Dining, Coffee, Side</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/storage">Storage ,Cabinets, Shelves, Dressers</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropend">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lighting
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/ceilinglight">Ceiling Lights</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/lamps">Floor Lamps</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/outdoorlighting">Outdoor Lighting</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropend">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kitchen
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/cabinets">Cabinets and Pantries</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/countertop">Countertops</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/backsplashes">Backsplashes</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact_us">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allproducts">All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
  );
}

export default Navbar;
