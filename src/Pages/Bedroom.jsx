import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BannerImg from '../assets/img/gallery/img1.jpg';


const Bedroom = () => {
  const [bedroomItems, setBedroomItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        setBedroomItems(data.bedroom); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ position: 'relative' }}>
        <div className="background-image">
          <img
            src={BannerImg}
            alt="Bedroom Banner"
            style={{ height: '500px', width: '110%', objectFit: 'cover' }}
          />
        </div>
        <div className="overlay" style={overlayStyle}>
          <h2>Bedroom Collection</h2>
          <p>Transform Your Space into a Cozy Retreat!</p>
        </div>

        <div className="wrapper">
          {bedroomItems.map(item => (
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
      </div>
      <Footer />
    </>
  );
};

// Styles for the overlay
const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  zIndex: 1,
};

export default Bedroom;
