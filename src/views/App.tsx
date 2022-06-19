import React from 'react';
import Dashboard from './components/Dashboard';
import Heading from './components/Heading';
import Landingpage from './components/Landingpage';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Heading />
      <Landingpage />
      <Features />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
