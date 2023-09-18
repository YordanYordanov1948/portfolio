import React from 'react';
import { Typography } from '@mui/material';
import { CenteredContainer, SkillsContainer, SkillItem, SkillAvatar, SkillName } from './StyledPortfolioComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faCss3, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';


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
    <CenteredContainer data-aos="fade-up">
      <Typography variant="h4" component="div" gutterBottom style={{ color: '#fff', fontSize: '3rem', marginBottom: '20px' }}>
        Skills
      </Typography>
      <SkillsContainer container spacing={2} justifyContent="center">
        {skills.slice(0, 4).map((skill, index) => (
          <SkillItem item xs={3} key={index} index={index}>
            <SkillAvatar>
              <FontAwesomeIcon icon={skill.icon} size="2x" />
            </SkillAvatar>
            <SkillName variant="body2">{skill.name}</SkillName>
          </SkillItem>
        ))}
      </SkillsContainer>
      <SkillsContainer container spacing={2} justifyContent="center" data-aos="fade-up" data-aos-delay="200">
        {skills.slice(4, 8).map((skill, index) => (
          <SkillItem item xs={3} key={index} index={index}>
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
