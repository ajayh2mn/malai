import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import Header from './components/Header'; // Adjust the path based on your folder structure
import Banner from './components/Banner';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from './components/SeventhSection';
import EighthSection from './components/EighthSection';
import Map from './components/Map';
import QuestionSection from './components/QuestionSection';
import Footer from './components/Footer';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import ImageUpload from './components/ImageUpload';
import VideoUpload from './components/VideoUpload';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Wrap routes inside a single <Routes> element */}
        <Routes>
          {/* Define the route for the home page */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <SixthSection />
                <SeventhSection />
                <EighthSection />
                <Map />
                <QuestionSection />
              </>
            }
          />
          {/* Define the route for the Services page */}
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/ImageUpload" element={<ImageUpload />} />
          <Route path="/VideoUpload" element={<VideoUpload />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
        {/* Exclude Footer for AdminDashboard */}
        {!window.location.pathname.includes("/AdminDashboard") && <Footer />}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918489496930"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp size={40} color="white" />
        </a>
      </div>

      {/* WhatsApp Button CSS */}
      <style>
        {`
          .whatsapp-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #25d366;
            padding: 10px;
            border-radius: 50%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .whatsapp-button:hover {
            background-color: #1ebe57;
          }
        `}
      </style>
    </Router>
  );
}

export default App;
