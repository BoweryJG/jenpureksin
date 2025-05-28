import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from '@mui/material';
import { CalendarMonth, CardGiftcard } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Ready to Start Your Transformation?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 300 }}>
              Book your complimentary consultation today and discover how our expert
              treatments can help you achieve your aesthetic goals.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<CalendarMonth />}
                component={Link}
                to="/book"
                sx={{
                  backgroundColor: 'white',
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                  },
                }}
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<CardGiftcard />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Gift Cards Available
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                $100 OFF
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Your First Treatment
              </Typography>
              <Typography variant="body2">
                New clients only. Cannot be combined with other offers.
                Mention code: PURE100
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CTASection;