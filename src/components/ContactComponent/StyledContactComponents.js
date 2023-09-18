import { styled } from '@mui/system';
import { Paper, Button } from '@mui/material';

export const StyledPaper = styled(Paper)`
  margin-top: 100px;
  background-color: #fafafa; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  max-width: 500px;
  margin-top: 20px;
`;

export const StyledButton = styled(Button)`
  align-self: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
`;

export const SocialIcons = styled('div')`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
