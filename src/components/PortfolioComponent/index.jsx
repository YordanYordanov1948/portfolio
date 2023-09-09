import React from 'react';
import { Grid, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faCss3, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

const CenteredContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #121212;
  padding: 20px;
`;

const SkillsContainer = styled(Grid)`
  margin-top: 20px;
  width: 100%;
  @media (min-width: 600px) {
    width: 50%;
  }
`;

const SkillItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const SkillAvatar = styled(Avatar)`
  background-color: #f0f0f0;
  color: #000;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 50px; /* Adjusted the width */
  height: 50px; /* Adjusted the height */
`;

const SkillName = styled(Typography)`
  margin-top: 5px;
  color: #fff; 
`;

const PortfolioComponent = () => {
  const skills = [
    { name: "Laravel", icon: faLaravel },
    { name: "CSS", icon: faCss3 },
    { name: "HTML", icon: faHtml5 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "SASS", icon: faSass },
    { name: "PHP", icon: faServer },
    { name: "MySQL", icon: faDatabase },
  ];

  return (
    <CenteredContainer>
      <Typography variant="h4" component="div" gutterBottom style={{ color: '#fff', fontSize: '3rem', marginBottom: '20px' }}>
        Skills
      </Typography>
      <SkillsContainer container spacing={2} justifyContent="center">
        {skills.slice(0, 4).map((skill, index) => (
          <SkillItem item xs={3} key={index}>
            <SkillAvatar>
              <FontAwesomeIcon icon={skill.icon} size="2x" />
            </SkillAvatar>
            <SkillName variant="body2">{skill.name}</SkillName>
          </SkillItem>
        ))}
      </SkillsContainer>
      <SkillsContainer container spacing={2} justifyContent="center">
        {skills.slice(4, 8).map((skill, index) => (
          <SkillItem item xs={3} key={index}>
            <SkillAvatar>
              <FontAwesomeIcon icon={skill.icon} size="2x" />
            </SkillAvatar>
            <SkillName variant="body2">{skill.name}</SkillName>
          </SkillItem>
        ))}
      </SkillsContainer>
    </CenteredContainer>
  );
};

export default PortfolioComponent;
