import React from 'react';
import { StyledPaper, ProfileImage, ProfileInfo, StyledButton } from './StyledAboutComponent';
import { Grid, Typography } from '@mui/material';


function AboutComponent() {
  return (
    <StyledPaper data-aos="fade-up">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3}>
        <ProfileInfo>
        <ProfileImage src="https://imgur.com/vyIE1bF.jpg" alt="Profile Picture" /> 
          <Typography variant="h5" gutterBottom data-aos="fade-down"> 
            Yordan Yordanov
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom data-aos="fade-down" data-aos-delay="100">
            Front End Developer
          </Typography>
          <StyledButton variant="contained" component="a" href="https://www.dropbox.com/scl/fi/f3xdzcbh17oa88rccdlmv/YYCV.pdf?rlkey=dgou3up70892cyclxknukf8fb&dl=1" download>
            Download Resume
          </StyledButton>
        </ProfileInfo>
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Typography variant="h6" gutterBottom style={{ fontSize: '2rem', textAlign: 'center' }}>
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
