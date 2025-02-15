import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
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
      </div>
    </Router>
  );
}

export default App;
