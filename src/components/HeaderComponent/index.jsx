import React, { useState } from 'react';
import { Typography, Button, Grid, IconButton, Drawer, List, ListItem } from '@mui/material';
import { StyledAppBar, StyledToolbar, Logo, NavLinks } from './StyledHeaderComponents';
import MenuIcon from '@mui/icons-material/Menu';

function HeaderComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((text, index) => (
          <ListItem 
            button 
            key={text} 
            onClick={handleDrawerToggle}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <Typography color="inherit" variant="button" style={{ fontWeight: 600 }}>
              <a href={`#${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {text}
              </a>
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Grid container alignItems="center">
          <Grid item xs={10} sm={6} md={4} lg={2}>
            <Logo variant="h6" data-aos="fade-up">Yordan Yordanov</Logo>
          </Grid>
          <Grid item xs={2} sm={6} md={8} lg={10} display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={10} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
            <NavLinks container spacing={2} justifyContent="flex-end">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((text, index) => (
                <Grid item key={index} data-aos="fade-in" data-aos-delay={`${index * 100}`}>
                  <Button color="inherit">
                    <a href={`#${text.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {text}
                    </a>
                  </Button>
                </Grid>
              ))}
            </NavLinks>
          </Grid>
        </Grid>
      </StyledToolbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
}

export default HeaderComponent;
