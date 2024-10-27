import React, { useEffect, useState } from 'react';
import BannerImg from '../assets/img/gallery/img6.jpg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import '../assets/css/products.css';


function LivingRoom() {
  const [livingRoomItems, setLivingRoomItems] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setLivingRoomItems(data.living_Room);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <Navbar />
    <section className="living_room">
      <div className="banner">
        <img
          src={BannerImg}
          alt="Living Room"
          className="img-fluid main-banner"
          style={{  width: '1400px', height: '450px' }}
        />
      </div>

      <div className="wrapper">
        {livingRoomItems.map(item => (
          <div className="single-card" key={item.id}>
            <div className="img-area">
              <img src={item.imageSrc} alt={item.title} />
            </div>
            <div className="info">
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}

export default LivingRoom;
