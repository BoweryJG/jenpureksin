import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from '@mui/material';
import { CalendarMonth, Phone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(44, 62, 80, 0.05) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                color: theme.palette.secondary.main,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                fontWeight: 700,
              }}
            >
              Transform Your Skin,
              <br />
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                Elevate Your Confidence
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              West Palm Beach's premier medical spa, where advanced technology meets
              personalized care. Experience transformative results with our expert team.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<CalendarMonth />}
                component={Link}
                to="/book"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                }}
              >
                Book Consultation
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<Phone />}
                href="tel:561-899-7878"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                }}
              >
                Call (561) 899-7878
              </Button>
            </Box>
            <Box sx={{ mt: 4, display: 'flex', gap: 4 }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: theme.palette.primary.main, fontWeight: 700 }}
                >
                  5.0
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Star Rating
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: theme.palette.primary.main, fontWeight: 700 }}
                >
                  150+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Happy Clients
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: theme.palette.primary.main, fontWeight: 700 }}
                >
                  20+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Years Experience
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 300,
                  height: 300,
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: '50%',
                  opacity: 0.1,
                  zIndex: -1,
                },
              }}
            >
              <img
                src="/header.png"
                alt="Pure Skin Palm Beach Medical Spa - Professional facial treatment"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      {/* Simple, elegant decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 200,
          height: 200,
          backgroundColor: theme.palette.primary.main,
          borderRadius: '50%',
          opacity: 0.05,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 100,
          right: -50,
          width: 150,
          height: 150,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '50%',
          opacity: 0.05,
        }}
      />
    </Box>
  );
};

export default HeroSection;