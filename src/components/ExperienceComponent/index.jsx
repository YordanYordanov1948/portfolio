import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BuildIcon from '@mui/icons-material/Build';

function Experience() {
  const experience = {
    company: 'NextLogistic Ltd.',
    role: 'FrontEnd Developer',
    duration: 'Jan 2023 - Present',
    technologies: 'React.js, Git, PHP, jQuery, Laravel, HTML5, CSS, JavaScript, MUI',
    description: [
      'Responsible for designing and implementing user-centric UI/UX solutions',
      'Develop scalable, high-performance web applications using a stack that includes Laravel, React, and MUI',
      'Leverage jQuery and native JavaScript to create interactive and dynamic user experiences',
      'Work closely with back-end developers to integrate PHP and MYSQL components',
      'Development of internal systems and websites',
      'Collaborate closely with Web Designer to translate design visions into functional, scalable web interfaces',
    ],
  };

  return (
    <Grid container spacing={2} justifyContent="center" data-aos="fade-up">
      <Grid item xs={12} md={8} lg={6}>
      <Card variant="outlined" sx={{ textAlign: 'center', padding: 2, marginTop: 10 }} data-aos="fade-in">
          <CardContent>
            <Typography variant="h3" component="div" gutterBottom sx={{ fontSize: '3rem' }}>
              Experience
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              {experience.company}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {experience.role}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
              <CalendarTodayIcon color="action" />
              <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
                {experience.duration}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
              <BuildIcon color="action" />
              <Typography variant="body2" sx={{ marginLeft: 1 }}>
                {experience.technologies}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'left', marginLeft: 2, marginRight: 2 }}>
              <ul>
                {experience.description.map((desc, index) => (
                  <li key={index}>
                    <Typography variant="body2">{desc}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Experience;
