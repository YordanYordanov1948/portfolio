import { styled } from '@mui/system';
import { Button, Paper } from '@mui/material';

export const StyledPaper = styled(Paper)`
  padding: 20px;
  background-color: #fafafa; 
  margin: 20px 0; 
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const ProfileImage = styled('img')`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  data-aos="zoom-in";
`;

export const ProfileInfo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  data-aos="fade-right";
`;

export const StyledButton = styled(Button)`
  background-color: #1976d2;
  color: #fff;
  &:hover {
    background-color: #1565c0;
  }
  data-aos="flip-left";
`;
