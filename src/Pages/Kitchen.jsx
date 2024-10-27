import React, { useEffect, useState } from 'react';
import BannerImg from '../assets/img/gallery/img7.jpg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Kitchen() {
  const [kitchenItems, setKitchenItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Ensure the path is correct
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        setKitchenItems(data.kitchen);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    
    <Navbar />
    <div className="banner">
        <img
          src={BannerImg}
          alt="Living Room"
          className="img-fluid main-banner"
          style={{  width: '1400px', height: '450px' }}
        />
      </div>
    
    <div className="wrapper">
      {kitchenItems.map(item => (
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
    <Footer />
    </>
  );
}

export default Kitchen;
