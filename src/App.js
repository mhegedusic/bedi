import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './languageswitcher';
import Navbar from './navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Home from './pages/home';
import Footer from './footer';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className='ms-4 mt-2 mb-2 me-4 bg-light'>
        <LanguageSwitcher />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Početna stranica */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
      
    </Router>
  );
}

export default App;
