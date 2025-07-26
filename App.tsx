import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import ProposalGenerator from './ProposalGenerator';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/proposals" element={<Layout><ProposalGenerator /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
