import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import SectorCoverage from './components/SectorCoverage';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { WiseStudio } from './components/products';
import './App.css';

function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <ProductShowcase />
      <Testimonials />
      <SectorCoverage />
      <CallToAction />
      <div className="container" style={{margin: '0 auto', maxWidth: 1200, padding: '2rem 0'}}>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wiseit" element={<HomePage />} />
        <Route path="/wiseit/wisestudio" element={<WiseStudio />} />
        <Route path="/wisestudio" element={<WiseStudio />} />
      </Routes>
    </Router>
  );
}

export default App;
