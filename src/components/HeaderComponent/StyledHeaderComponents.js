import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background-color: #000000;
  box-shadow: none;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled(Typography)`
  font-weight: bold;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.3rem;
`;

export const NavLinks = styled(Grid)`
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
