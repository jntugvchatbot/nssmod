//src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Activities from './pages/Activities';
import Team from './pages/Team';
import NssUnit from './pages/NssUnit';
import Gallery from './pages/Gallery';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';

function AppRouter() {
  return (
    <Router>
      <Header /> {/* Include the Header component at the top of the Router */}
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
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import { Link as ScrollLink } from 'react-scroll';
// import Header from './components/Header';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Activities from './pages/Activities';
// import Team from './pages/Team';
// import NssUnit from './pages/NssUnit';
// import Gallery from './pages/Gallery';
// import Downloads from './pages/Downloads';
// import Login from './pages/Login';
// import ContactUs from './pages/ContactUs';

// function AppRouter() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/activities" element={<Activities />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/nss-unit" element={<NssUnit />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/downloads" element={<Downloads />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/contact" element={<ContactUs />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;
