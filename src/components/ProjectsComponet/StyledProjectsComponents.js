// StyledProjectsComponents.js

import { Card } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
  background-image: url('https://imgur.com/T2NFDb9.jpg');
  background-size: cover;
  background-position: center;
  color: #000; 
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  .description {
    color: #000; 
  }
  
  @media (max-width: 600px) {
    background-image: url('https://imgur.com/lnITW5Q.jpg');
    background-size: contain;
    padding: 10px;
  }
`;

export default StyledCard;
