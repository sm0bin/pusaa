import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');


  return (
    <main data-theme={selectedTheme}>
      <Navbar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;