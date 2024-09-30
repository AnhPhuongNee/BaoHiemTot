import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import Home from './pages/Home';
import PersonalInsurance from './pages/PersonalInsurance';
import BusinessInsurance from './pages/BusinessInsurance';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header1/>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<PersonalInsurance />} />
          <Route path="/business" element={<BusinessInsurance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
