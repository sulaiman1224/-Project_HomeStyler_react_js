import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import '../assets/css/products.css';


function Lamps() {
  const [livingRoomItems, setLivingRoomItems] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setLivingRoomItems(data.lamp)) // Note the spelling correction
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <Navbar />
    <div className="wrapper">
      {livingRoomItems.map(item => (
        <div className="single-card" key={item.title}>
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

export default Lamps;
