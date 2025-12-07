import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import LiveSection from './pages/LiveSection';
import IssuedSection from './pages/IssuedSection';
import RestockedSection from './pages/RestockedSection';
import BookDetails from './components/BookDetails';
import IssuedDetails from './components/IssuedDetails';
import RestockedDetails from './components/RestockedDetails';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="homepage-bg">
        <Navigation />
        <Header />
        <div style={{ marginLeft: '220px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/live" element={<LiveSection />} />
            <Route path="/issued" element={<IssuedSection />} />
            <Route path="/restocked" element={<RestockedSection />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/issued/:id" element={<IssuedDetails />} />
            <Route path="/restocked/:id" element={<RestockedDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
