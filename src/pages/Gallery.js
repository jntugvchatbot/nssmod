import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nss1 from '../assets/nss1.jpg';
import nss2 from '../assets/nss2.jpg';
// import nss3 from '../assets/nss3.jpg.';
import nss4 from '../assets/nss4.jpg';
import nss5 from '../assets/nss5.jpg';
import nss6 from '../assets/nss6.jpg';
import nss7 from '../assets/nss7.jpg';
import nss8 from '../assets/nss8.jpg';
import './Gallery.css'; // Import the Gallery.css file
import Mobilefooter from '../components/Mobilefooter';

function Gallery() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Display two images at a time
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <section>
      <h2><center><b>Gallery</b></center></h2>
      <Slider {...settings}>
        <div>
          <img src={nss1} alt="Slide 1" className="gallery-image" />
        </div>
        <div>
          <img src={nss2} alt="Slide 2" className="gallery-image" />
        </div>
        {/* <div>
          <img src={nss3} alt="Slide 3" className="gallery-image" />
        </div> */}
        <div>
          <img src={nss4} alt="Slide 4" className="gallery-image" />
        </div>
        <div>
          <img src={nss5} alt="Slide 5" className="gallery-image" />
        </div>
        <div>
          <img src={nss6} alt="Slide 6" className="gallery-image" />
        </div>
        <div>
          <img src={nss7} alt="Slide 7" className="gallery-image" />
        </div>
        <div>
          <img src={nss8} alt="Slide 8" className="gallery-image" />
        </div>
      </Slider>
      <Mobilefooter/>
    </section>
    
  );
}

export default Gallery;
