import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contacts from './pages/Contacts';
import Offers from './pages/Offers'
import Rent from './pages/Rent';
import AboutUs from './pages/AboutUs';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Slidinėjimo Kelionės" element={<Offers />} />
        <Route exact path="Kontaktai" element={<Contacts />} />
        <Route exact path="Nuoma" element={<Rent />} />
        <Route exact path="Apie Mus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;