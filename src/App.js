import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contacts from './pages/Contacts';





function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Kontaktai" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )


}

export default App;