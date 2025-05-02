import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RatesCard from './Pages/RatesCard'
import VehicleCard from './Pages/VehicleCard'
import ServiceNetworkMap from './Pages/ServiceNetwork'
import PrivacyandPolicy from './Pages/PrivacyandPolicy'
import ContactUs from './components/ContactUs'
import Home from './Pages/Home'
import FeedBack from './components/FeedBack'
import EnquiryPage from './Pages/EnquiryPage'
import AboutUs from './Pages/AboutUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatBot from './components/Chatbot'
import Call from './components/CallNow'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ChatBot />
        <Call/>
        <div className='pt-16 bg-black'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rates" element={<RatesCard />} />
            <Route path="/vehicles" element={<VehicleCard />} />
            <Route path="/service-network" element={<ServiceNetworkMap />} />
            <Route path="/privacy-policy" element={<PrivacyandPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;