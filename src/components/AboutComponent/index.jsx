import React from 'react';
import { Grid, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import myself from '../../assets/myself.jpg'

const StyledPaper = styled(Paper)`
  padding: 20px;
  background-color: #fafafa; 
  margin: 20px 0; 
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled('img')`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileInfo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: #1976d2;
  color: #fff;
  &:hover {
    background-color: #1565c0;
  }
`;

function AboutComponent() {
  return (
    <StyledPaper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <ProfileInfo>
            <ProfileImage src={myself} alt="Profile Picture" />
            <Typography variant="h5" gutterBottom>
              Yordan Yordanov
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Front End Developer
            </Typography>
            <StyledButton variant="contained" component="a" href="https://www.dropbox.com/scl/fi/f3xdzcbh17oa88rccdlmv/YYCV.pdf?rlkey=dgou3up70892cyclxknukf8fb&dl=1" download>
              Download Resume
            </StyledButton>
          </ProfileInfo>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h6" gutterBottom style={{ fontSize: '2rem' }}>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            Passionate about coding and with a keen eye for detail, I immerse myself in the dynamic world of web development. As a front-end developer and a software engineering student, my journey in the tech sphere has been nothing short of exciting and fulfilling. With each project, I endeavor to deliver optimal, user-centric solutions.
          </Typography>
          <Typography variant="body1" paragraph>
            In my free time, I enjoy playing video games, listening to music, reading books, and hanging out with friends. I'm looking forward to the new opportunities and challenges that lie ahead!
          </Typography>
        </Grid>
      </Grid>
    </StyledPaper>
  );
}

export default AboutComponent;
