import React from 'react';
import { Container } from '@mui/material';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import PortfolioComponent from './components/PortfolioComponent';
import Experience from './components/ExperienceComponent';
import ContactComponent from './components/ContactComponent';
import './styles/main.css'; 

function App() {
  return (
    <div className='layout'>
        <Container maxWidth="xl" style={{ padding: 0, width: '100%' }}>
          <HeaderComponent />
          <AboutComponent />
          <PortfolioComponent />
          <Experience />
          <ContactComponent />
          {/* Other components will go here */}
        </Container>
      </div>
  );
}

export default App;
