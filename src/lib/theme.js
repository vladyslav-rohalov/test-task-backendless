import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#213555',
      light: '#4F709C',
      subsidiary: '#0a9396',
      info: '#E5D283',
      accent: '#ee9b00',
      hot: '#F46145',
      dim: '#f5f6fa',
      text: '#221f1f',
      neutral: '#F0F0F0',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.dim,
            color: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.iconbtn,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.primary.accent,
          },
        }),
      },
    },
  },
});
