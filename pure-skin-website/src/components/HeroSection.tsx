import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  keyframes,
} from '@mui/material';
import { CalendarMonth, Phone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Define rotation animations
const rotateClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateCounterClockwise = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

interface OrbProps {
  size: number;
  color: string;
  opacity: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  children?: React.ReactNode;
  animationDuration?: string;
  floatAnimation?: boolean;
}

const Orb: React.FC<OrbProps> = ({ 
  size, 
  color, 
  opacity, 
  top, 
  left, 
  right, 
  bottom, 
  children,
  animationDuration = '30s',
  floatAnimation = false
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        animation: floatAnimation ? `${float} 6s ease-in-out infinite` : undefined,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: color,
          borderRadius: '50%',
          opacity,
          filter: 'blur(2px)',
        }}
      />
      {children && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            animation: `${rotateClockwise} ${animationDuration} linear infinite`,
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

interface ChildOrbProps {
  distance: number;
  size: number;
  color: string;
  opacity: number;
  delay?: string;
}

const ChildOrb: React.FC<ChildOrbProps> = ({ distance, size, color, opacity, delay = '0s' }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) translateX(${distance}px)`,
        transformOrigin: `${-distance}px center`,
        animation: `${rotateCounterClockwise} 20s linear infinite`,
        animationDelay: delay,
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: '50%',
          opacity,
          filter: 'blur(1px)',
          boxShadow: `0 0 20px ${color}`,
        }}
      />
    </Box>
  );
};

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
                href="tel:561-123-4567"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                }}
              >
                Call (561) 123-4567
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
                src="/images/hero-image.jpg"
                alt="Pure Skin Palm Beach Medical Spa"
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
      
      {/* Animated Orbs with Children */}
      {/* Bottom left orb system */}
      <Orb
        size={250}
        color={theme.palette.primary.main}
        opacity={0.1}
        bottom={-100}
        left={-100}
        animationDuration="40s"
        floatAnimation
      >
        <ChildOrb
          distance={150}
          size={40}
          color={theme.palette.primary.light}
          opacity={0.3}
          delay="0s"
        />
        <ChildOrb
          distance={180}
          size={30}
          color={theme.palette.secondary.main}
          opacity={0.2}
          delay="2s"
        />
        <ChildOrb
          distance={120}
          size={25}
          color={theme.palette.primary.dark}
          opacity={0.25}
          delay="4s"
        />
      </Orb>

      {/* Top right orb system */}
      <Orb
        size={200}
        color={theme.palette.secondary.main}
        opacity={0.08}
        top={50}
        right={-80}
        animationDuration="35s"
      >
        <ChildOrb
          distance={120}
          size={35}
          color={theme.palette.secondary.light}
          opacity={0.25}
          delay="1s"
        />
        <ChildOrb
          distance={100}
          size={20}
          color={theme.palette.primary.main}
          opacity={0.2}
          delay="3s"
        />
      </Orb>

      {/* Middle left orb system */}
      <Orb
        size={150}
        color={theme.palette.primary.light}
        opacity={0.06}
        top="40%"
        left={-50}
        animationDuration="45s"
        floatAnimation
      >
        <ChildOrb
          distance={90}
          size={25}
          color={theme.palette.primary.main}
          opacity={0.3}
          delay="0.5s"
        />
        <ChildOrb
          distance={110}
          size={20}
          color={theme.palette.secondary.light}
          opacity={0.25}
          delay="2.5s"
        />
      </Orb>

      {/* Top left small orb */}
      <Orb
        size={100}
        color={theme.palette.secondary.light}
        opacity={0.05}
        top={120}
        left={100}
        animationDuration="30s"
      >
        <ChildOrb
          distance={70}
          size={15}
          color={theme.palette.primary.main}
          opacity={0.35}
          delay="0s"
        />
      </Orb>

      {/* Bottom right orb system */}
      <Orb
        size={180}
        color={theme.palette.primary.dark}
        opacity={0.07}
        bottom={50}
        right={-60}
        animationDuration="50s"
      >
        <ChildOrb
          distance={100}
          size={30}
          color={theme.palette.secondary.main}
          opacity={0.2}
          delay="1.5s"
        />
        <ChildOrb
          distance={130}
          size={25}
          color={theme.palette.primary.light}
          opacity={0.25}
          delay="3.5s"
        />
        <ChildOrb
          distance={80}
          size={20}
          color={theme.palette.secondary.dark}
          opacity={0.3}
          delay="5s"
        />
      </Orb>
    </Box>
  );
};

export default HeroSection;