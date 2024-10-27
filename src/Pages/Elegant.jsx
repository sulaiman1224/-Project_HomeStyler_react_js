import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BannerImg from '../assets/img/living room/banner_image.jpg'; // Adjust the path as needed

const Elegant = () => {
  const [elegantItems, setElegantItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Ensure the path is correct
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        setElegantItems(data.elegant); // Adjust according to your JSON structure
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="living_room">
        <div className="banner">
          <img
            src={BannerImg}
            alt="Elegant Living Room"
            className="img-fluid main-banner"
            style={{width: '100%', height: '450px', objectFit: 'cover' }}
          />
        </div>

        <div className="wrapper">
          {elegantItems.map(item => (
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
};

export default Elegant;
