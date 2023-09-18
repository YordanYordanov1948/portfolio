import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@mui/material';
import HeaderComponent from './components/HeaderComponent';
import AboutComponent from './components/AboutComponent';
import PortfolioComponent from './components/PortfolioComponent';
import Experience from './components/ExperienceComponent';
import ContactComponent from './components/ContactComponent';
import HomeComponent from './components/HomeComponent';
import ProjectsComponent from './components/ProjectsComponet';
import './styles/main.css'; 
import AOS from 'aos';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can change the value as per your preference
      once: true, 
    });
  }, []);

  return (
    <Router>
      <div className='layout'>
        <Container maxWidth={false} sx={{ padding: 0, margin: 0 }}>
          <HeaderComponent />
          <div id="home">
            <HomeComponent />
          </div>
          <div id="about">
            <AboutComponent />
          </div>
          <div id="skills">
            <PortfolioComponent />
          </div>
          <div id="projects">
            <ProjectsComponent />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="contact">
            <ContactComponent />
          </div>
          {/* Other components will go here */}
        </Container>
      </div>
    </Router>
  );
}


export default App;
