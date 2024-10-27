import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; // Ensure Footer is imported

function Cabinets() {
  const [livingRoomItems, setLivingRoomItems] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setLivingRoomItems(data.cabnit))
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

export default Cabinets;
