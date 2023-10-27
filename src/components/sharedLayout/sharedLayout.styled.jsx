import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  bgcolor: 'aliceblue',
  height: '100vh',
});

export const Main = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100% - 400px)',
  padding: '16px 32px',
  marginLeft: 400,
});
