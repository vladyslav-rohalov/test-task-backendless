import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

export const CardStyled = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '440px',
  marginBottom: 16,
  padding: 16,
});

export const Column = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 16,
});
