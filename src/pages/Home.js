import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NotificationBar from './NotificationBar'; // Assuming NotificationBar is in the same directory as Home.js
import NewsEvents from './NewsEvents'; // Assuming NewsEvents is in the same directory as Home.js
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';
import JntukNssTeam from './JntukNssTeam';
import Notifications from './Notifications';
import './Home.css'; 
import Mobilefooter from '../components/Mobilefooter';
const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" / >
        </div>
        <div>
          <img src={image3} alt="Slide 2" />
        </div>
      </Slider>
      <NotificationBar message="dsffhbsdjkvahvaldv" />
      <div>
        <NewsEvents />
        <JntukNssTeam />
        <Notifications />
        <Mobilefooter />
      </div>
    </div>
    
  );
};

export default Home;
