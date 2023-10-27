import { styled } from '@mui/material/styles';
import { Box, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Container = styled(Box)(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.main,
  width: '400px',
  height: '100%',
  padding: '16px 0 16px 16px',
}));

export const TabStyled = styled(Tab)(({ theme }) => ({
  width: '100%',
  alignItems: 'baseline',
  color: theme.palette.primary.dim,
  borderRadius: 4,
  padding: 0,
}));

export const LinkStyled = styled(NavLink)({
  display: 'block',
  width: '100%',
  height: '100%',
  lineHeight: '48px',
  textAlign: 'center',
});
