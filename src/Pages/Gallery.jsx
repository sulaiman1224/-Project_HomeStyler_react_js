import React from 'react';
import GalleryImg1 from '../assets/img/banner_iamge_styleDesign/elegantbanner.jfif';
import GalleryImg2 from '../assets/img/banner_iamge_styleDesign/kitchenbanner.webp';
import GalleryImg3 from '../assets/img/banner_iamge_styleDesign/livingroombanner.jpg';
import GalleryImg4 from '../assets/img/banner_iamge_styleDesign/bedroombanner.png';
import Img1 from '../assets/img/gallery/img1.jpg';
import Img2 from '../assets/img/gallery/img2.jpg';
import Img3 from '../assets/img/gallery/img3.jpg';
import Img4 from '../assets/img/gallery/img4.jpg';
import Img5 from '../assets/img/gallery/img5.jpg';
import Img6 from '../assets/img/gallery/img6.jpg';
import Img7 from '../assets/img/gallery/img7.jpg';
import Img9 from '../assets/img/gallery/img9.jpg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Gallery = () => {
    const galleryContainerStyle = {
        backgroundColor: 'rgb(0, 0, 0)',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(3, 300px)',
        gap: '10px',
    };

    const gridItemStyle = {
        backgroundColor: '#333',
    };

    return (
        <div>
            <Navbar />

            <div className="gallery-container" style={galleryContainerStyle}>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '1 / span 4' }}>
                    <img src={GalleryImg1} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '5 / span 4' }}>
                    <img src={GalleryImg2} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '9 / span 4' }}>
                    <img src={GalleryImg3} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '1 / span 6', gridRow: '2 / span 2' }}>
                    <img src={GalleryImg4} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '7 / span 3' }}>
                    <img src={Img1} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '10 / span 3' }}>
                    <img src={Img2} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '7 / span 6' }}>
                    <img src={Img3} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '1 / span 6' }}>
                    <img src={Img4} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '7 / span 6' }}>
                    <img src={Img5} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '1 / span 4' }}>
                    <img src={Img6} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '5 / span 4' }}>
                    <img src={Img7} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid-item" style={{ ...gridItemStyle, gridColumn: '9 / span 4' }}>
                    <img src={Img9} alt="" style={{ height: '100%', width: '100%' }} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Gallery;
