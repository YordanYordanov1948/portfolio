import React, {useState} from 'react';
import { StyledPaper, StyledForm, StyledButton, SocialIcons } from './StyledContactComponents';
import {Typography, TextField, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from 'emailjs-com';


const ContactComponent = () => {

  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const resetForm = () => {
    setFormValues({
      user_name: '',
      user_email: '',
      user_phone: '',
      message: ''
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7q22ofc', 'template_jq6t8dd', e.target, 'JwH7jCDy-zsmYM2k5')
      .then((result) => {
          console.log(result.text);
          resetForm(); // Reset form values on success
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <StyledPaper data-aos="fade-up">
      <Typography variant="h4" gutterBottom style={{ marginTop: '1rem' }}>
        Contact Me
      </Typography>
      <StyledForm onSubmit={sendEmail}>
        <TextField 
          name="user_name" 
          label="Name" 
          variant="outlined" 
          fullWidth 
          value={formValues.user_name} 
          onChange={handleChange} 
          required // This field is required
        />
        <TextField 
          name="user_email" 
          label="Email" 
          variant="outlined" 
          fullWidth 
          value={formValues.user_email} 
          onChange={handleChange} 
          required // This field is required
          type="email" // This field requires a valid email
        />
        <TextField 
          name="user_phone" 
          label="Phone" 
          variant="outlined" 
          fullWidth 
          value={formValues.user_phone} 
          onChange={handleChange} 
          pattern="\d*" // This field only accepts digits
          title="Please enter a valid phone number" // Tooltip to display when the pattern is not matched
        />
        <TextField 
          name="message" 
          label="Message" 
          variant="outlined" 
          fullWidth 
          multiline 
          rows={4} 
          value={formValues.message} 
          onChange={handleChange} 
          required // This field is required
        />
        <StyledButton type="submit" variant="contained" color="primary">
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
