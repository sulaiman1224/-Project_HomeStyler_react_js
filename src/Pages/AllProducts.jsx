import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const styles = {
  searchBar: {
    margin: '20px',
  },
  singleCard: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    margin: '10px',
    textAlign: 'center',
  },
  imgArea: {
    maxWidth: '100%',
    height: 'auto',
  },
};

function AllProducts() {
  const [products, setProducts] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setFilteredItems(data.living_Room || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load products');
      });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, category, priceFilter, products]);

  const filterProducts = () => {
    let items = [];

    if (category === 'all') {
      items = Object.values(products).flat();
    } else if (products[category]) {
      items = products[category];
    } else {
      return;
    }

    items = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    items.forEach(item => {
      item.numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    });

    if (priceFilter === 'low') {
      items.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (priceFilter === 'high') {
      items.sort((a, b) => b.numericPrice - a.numericPrice);
    }

    setFilteredItems(items);
  };

  return (
    <>
      <Navbar />
      <section className="living_room">
        {error && <div className="error-message">{error}</div>}

        <div style={styles.searchBar} className="d-flex align-items-center">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="form-control me-2" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <select 
            className="form-select me-2" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Products</option>
            <option value="living_Room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="elegant">Elegant</option>
          </select>
          <select 
            className="form-select" 
            value={priceFilter} 
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">Filter by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        <div className="wrapper d-flex flex-wrap justify-content-center">
          {filteredItems.map(item => (
            <div className="single-card" style={styles.singleCard} key={item.id}>
              <div className="img-area">
                <img src={item.imageSrc} alt={item.title} style={styles.imgArea} />
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

export default AllProducts;
