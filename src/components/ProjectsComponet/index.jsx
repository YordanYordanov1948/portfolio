import React from 'react';
import { CardContent, Typography, Box, Button } from '@mui/material';
import StyledCard from './StyledProjectsComponents'; 

const ProjectsComponent = () => {
    const project = {
        title: "Doctors Gonovski",
        description: "Doctors Gonovski is a website dedicated to two renowned doctors. This platform serves as a comprehensive repository of their work, articles, and other resources. I collaborated closely with a back-end developer during the development of this website, contributing significantly to both its design and functionality.",
        year: 2023,
        techStack: ["Laravel", "JavaScript", "Jquery", "Bootstrap5", "SASS"],
        link: "https://doctorsgonovski.com", 
      };
      

  return (
    <Box sx={{ flexGrow: 1, padding: '20px', background: '#f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom align="center" data-aos="fade-up">
        My Projects
      </Typography>
      <StyledCard data-aos="fade-up" data-aos-delay="300">
        <CardContent>
          <Typography variant="h5" gutterBottom align="center" color="black">
            {project.title}
          </Typography>
          <Typography variant="body1" align="center">
            {project.description}
          </Typography>
          <Typography variant="subtitle1" align="center">
            Year: {project.year}
          </Typography>
          <Typography variant="subtitle1" align="center">
            Tech Stack: {project.techStack.join(', ')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" href={project.link} target="_blank">
              View Project
            </Button>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default ProjectsComponent;
