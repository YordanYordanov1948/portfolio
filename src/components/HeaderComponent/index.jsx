import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, IconButton, Drawer, List, ListItem } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)`
  background-color: #000000;
  box-shadow: none;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled(Typography)`
  font-weight: bold;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.5rem;
`;

const NavLinks = styled(Grid)`
  .MuiButton-root {
    text-transform: none;
    color: #ffffff;
    font-weight: 600;
    border-radius: 8px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

function HeaderComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {['Home', 'About', 'Skills', 'Experience', 'Contact'].map((text) => (
          <ListItem 
            button 
            key={text} 
            component="a" 
            href={`#${text.toLowerCase()}`}
            onClick={handleDrawerToggle}  // Added this line
          >
            <Typography color="inherit" variant="button" style={{ fontWeight: 600 }}>{text}</Typography>
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
            <Logo variant="h6">Yordan Yordanov</Logo>
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
          {['Home', 'About', 'Skills', 'Experience', 'Contact'].map((text, index) => (
            <Grid item key={index}>
              <Button color="inherit">
                <a href={`#${text.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none' }}>{text}</a>
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
