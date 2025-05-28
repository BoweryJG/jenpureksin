import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Face Rejuvenation',
    description: 'Advanced treatments to lift, tighten, and rejuvenate facial skin',
    services: [
      { name: 'Ultherapy', link: '/services/ultherapy' },
      { name: 'Botox & Neurotoxins', link: '/services/botox' },
      { name: 'Dermal Fillers', link: '/services/fillers' },
      { name: 'Microneedling with PRP', link: '/services/microneedling' },
    ],
  },
  {
    title: 'Body Contouring',
    description: 'Non-invasive solutions for fat reduction and body sculpting',
    services: [
      { name: 'CoolSculpting Elite', link: '/services/coolsculpting' },
      { name: 'Body Tightening', link: '/services/body-tightening' },
      { name: 'Cellulite Reduction', link: '/services/cellulite' },
    ],
  },
  {
    title: 'Wellness & Health',
    description: 'Comprehensive wellness solutions for optimal health and vitality',
    services: [
      { name: 'Hormone Therapy', link: '/services/hormone-therapy' },
      { name: 'IV Therapy', link: '/services/iv-therapy' },
      { name: 'Sexual Wellness', link: '/services/sexual-wellness' },
    ],
  },
];

const ServicesPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Medical Spa Services West Palm Beach | Pure Skin Palm Beach</title>
        <meta name="description" content="Explore our comprehensive range of medical aesthetic services including Ultherapy, CoolSculpting, Botox, fillers, and hormone therapy in West Palm Beach." />
        <meta name="keywords" content="medical spa services, ultherapy, coolsculpting, botox, fillers, hormone therapy, west palm beach" />
        <link rel="canonical" href="https://www.pureskinpalmbeach.com/services" />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ color: theme.palette.secondary.main }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: 'auto',
              fontWeight: 300,
            }}
          >
            Discover our comprehensive range of medical aesthetic and wellness treatments,
            each designed to help you look and feel your absolute best.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {categories.map((category, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  p: 4,
                  backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{ color: theme.palette.primary.main }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 4, color: theme.palette.text.secondary }}
                  >
                    {category.description}
                  </Typography>
                  <Grid container spacing={3}>
                    {category.services.map((service, idx) => (
                      <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Button
                          component={Link}
                          to={service.link}
                          fullWidth
                          variant="outlined"
                          size="large"
                          endIcon={<ArrowForward />}
                          sx={{
                            justifyContent: 'space-between',
                            py: 2,
                            borderRadius: 2,
                          }}
                        >
                          {service.name}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 6,
            backgroundColor: theme.palette.primary.light,
            borderRadius: 2,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h3" gutterBottom>
            Not Sure Which Treatment is Right for You?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Book a complimentary consultation with our experts to create your personalized treatment plan
          </Typography>
          <Button
            variant="contained"
            size="large"
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
            Schedule Free Consultation
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ServicesPage;