import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NotificationBar from '../pages/NotificationBar'; // Import the NotificationBar component
import NewsEvents from '../pages/NewsEvents'; // Import the NewsEvents component
import image1 from '../assets/image1.jpg';
// import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import JntukNssTeam from './JntukNssTeam';
import Notifications from './Notifications';

const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000, // Adjust slide transition speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    pauseOnHover: true, // Pause auto-play on hover
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image3} alt="Slide 2" />
        </div>
        {/* <div >
          <img src={image2} alt="Slide 3" />
        </div> */}
        {/* Add more slides as needed */}
      </Slider>
      <div>
        <NotificationBar message="dsffhbsdjkvahvaldv" />
        <NewsEvents />
        <JntukNssTeam/>
        <Notifications/>
      </div>
    </div>
  );
};

export default Home;
