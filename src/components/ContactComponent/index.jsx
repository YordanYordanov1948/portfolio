import React from 'react';
import { Paper, Typography, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledPaper = styled(Paper)`
  padding: 20px;
  background-color: #fafafa; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  max-width: 500px;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  align-self: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
`;

const SocialIcons = styled('div')`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ContactComponent = () => {
  return (
    <StyledPaper>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <StyledForm>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
        <StyledButton variant="contained" color="primary">
          Send
        </StyledButton>
      </StyledForm>
      <SocialIcons>
      <IconButton color="primary" component="a" href="https://www.linkedin.com/in/yordan-yordanov-19185a223/" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" component="a" href="https://github.com/YordanYordanov1948?tab=repositories/" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton color="primary" component="a" href="https://www.facebook.com/Yordan1948/" target="_blank">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" component="a" href="https://www.instagram.com/y_yordanov1/" target="_blank">
          <InstagramIcon />
        </IconButton>
      </SocialIcons>
    </StyledPaper>
  );
};

export default ContactComponent;
