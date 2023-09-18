import { Grid, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';

export const CenteredContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #121212;
  padding: 20px;
`;

export const SkillsContainer = styled(Grid)`
  margin-top: 20px;
  width: 100%;
  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const SkillItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  data-aos="zoom-in";
  data-aos-delay="${props => props.index * 100}";
`;

export const SkillAvatar = styled(Avatar)`
  background-color: #f0f0f0;
  color: #000;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 50px;
  height: 50px;
`;

export const SkillName = styled(Typography)`
  margin-top: 5px;
  color: #fff; 
`;
