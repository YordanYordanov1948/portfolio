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
`;

const HomeComponent = () => {
  return (
    <StyledPaper>
      <Typography variant="h1" gutterBottom align="center">
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h4" align="center">
        A journey through my experiences and accomplishments in the tech world.
      </Typography>
      <Quote variant="h6" align="center">
        "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while." - Steve Jobs
      </Quote>
    </StyledPaper>
  );
};

export default HomeComponent;
