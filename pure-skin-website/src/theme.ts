import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4A574', // Elegant gold/champagne
      light: '#E5C9A6',
      dark: '#B08968',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2C3E50', // Deep sophisticated blue
      light: '#34495E',
      dark: '#1A252F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#5D6D7E',
    },
    error: {
      main: '#E74C3C',
    },
    success: {
      main: '#27AE60',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.8,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 32px',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #D4A574 30%, #E5C9A6 90%)',
          boxShadow: '0 3px 5px 2px rgba(212, 165, 116, .3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
  },
});

export default theme;