import React from 'react';
import LivingRoomBanner from '../assets/img/livingroombanner.jpg';
import KitchenBanner from '../assets/img/kitchenbanner.jpg';
import BedroomRoomBanner from '../assets/img/banner_iamge_styleDesign/bedroombanner.png';
import { Link } from 'react-router-dom';


function Categories() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", paddingTop: "10px" }}>Categories</h1>

      <div className="row" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img 
            src={LivingRoomBanner} 
            alt="" 
            style={{ borderRadius: "10px", height: "300px", width: "500px" }} 
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h2 style={{ textAlign: "center", paddingTop: "100px" }}>Livingroom Interior</h2>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vitae
            corporis optio fugiat alias placeat voluptatem nobis et officiis aspernatur 
            molestiae ex illo consectetur aperiam excepturi delectus dolorum praesentium 
            ratione.
          </p>
          <button className="btn btn-success">
            <Link to="/living_room" style={{ textDecoration: "none", color: "aliceblue" }}>Explore More</Link>
          </button>
        </div>
      </div>

      <div className="row" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h2 style={{ textAlign: "center", paddingTop: "80px" }}>Kitchen Interior</h2>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vitae
            corporis optio fugiat alias placeat voluptatem nobis et officiis aspernatur 
            molestiae ex illo consectetur aperiam excepturi delectus dolorum praesentium 
            ratione.
          </p>
          <button className="btn btn-success">
            <Link to="/kitchen" style={{ textDecoration: "none", color: "aliceblue" }}>Explore More</Link>
          </button>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img 
            src={KitchenBanner}
            alt="" 
            height="300px" 
            width="500px" 
            style={{ borderRadius: "10px" }} 
          />
        </div>
      </div>

      <div className="row" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img 
            src={BedroomRoomBanner}
            height="300px" 
            width="500px" 
            style={{ borderRadius: "10px" }} 
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h2 style={{ textAlign: "center", paddingTop: "80px" }}>Bedroom Interior</h2>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vitae
            corporis optio fugiat alias placeat voluptatem nobis et officiis aspernatur 
            molestiae ex illo consectetur aperiam excepturi delectus dolorum praesentium 
            ratione.
          </p>
          <button className="btn btn-success">
            <Link to="/bedroom" style={{ textDecoration: "none", color: "aliceblue" }}>Explore More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
