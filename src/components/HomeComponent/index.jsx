import React from 'react';
import { Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)`
  padding: 20px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`;

const Quote = styled(Typography)`
  margin-top: 20px;
  font-style: italic;
  data-aos="fade-right";
`;

const HomeComponent = () => {
  return (
    <StyledPaper
      data-aos="zoom-in"
      sx={{
        '& h1': {
          fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
          marginBottom: '20px',
          transition: 'font-size 0.3s ease-in-out',
        },
        '& h4': {
          fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
          transition: 'font-size 0.3s ease-in-out',
        },
      }}
    >
      <Typography variant="h1" gutterBottom align="center" data-aos="flip-left" data-aos-delay="100">
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h4" align="center" data-aos="flip-right" data-aos-delay="200">
        A journey through my experiences and accomplishments in the tech world.
      </Typography>
      <Quote variant="h6" align="center" data-aos="fade-up" data-aos-delay="300">
        "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while." - Steve Jobs
      </Quote>
    </StyledPaper>
  );
};

export default HomeComponent;
