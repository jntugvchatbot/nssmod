// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotificationBar from './pages/NotificationBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Activities from './pages/Activities';
import Team from './pages/Team';
import NssUnit from './pages/NssUnit';
import Gallery from './pages/Gallery';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import Notifications from './pages/Notifications';
import JntukNssTeam from './pages/JntukNssTeam';

function AppRouter() {
  return (
    <Router>
      <Header />
      <NotificationBar message="gbhbnkjlj jkn kj" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/team" element={<Team />} />
        <Route path="/nss-unit" element={<NssUnit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/notificationbar" element={<NotificationBar />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/jntuknssteam" element={<JntukNssTeam />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
