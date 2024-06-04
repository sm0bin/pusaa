import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');
  const location = useLocation();
  const noFooterPaths = ['/login', '/signup', '/forgot-password', '/reset-password'];
  const shouldShowFooter = !noFooterPaths.includes(location.pathname);



  return (
    <main data-theme={selectedTheme}>
      <Navbar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </main>
  );
};

export default App;