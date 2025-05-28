import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  EmojiEvents,
  Science,
  Favorite,
  Star,
} from '@mui/icons-material';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import ServiceCards from '../components/ServiceCards';
import TestimonialSection from '../components/TestimonialSection';
import TreatmentVisualizer from '../components/TreatmentVisualizer';
import AISkincareAnalyzer from '../components/AISkincareAnalyzer';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <Science sx={{ fontSize: 48 }} />,
      title: 'Advanced Technology',
      description: 'FDA-approved treatments including Ultherapy, CoolSculpting Elite, and the latest in aesthetic medicine.',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 48 }} />,
      title: 'Expert Practitioners',
      description: 'Led by Jennifer Gowdy with decades of experience at CoolSculpting and Merz Aesthetics.',
    },
    {
      icon: <Favorite sx={{ fontSize: 48 }} />,
      title: 'Personalized Care',
      description: '45-60 minute consultations to create customized treatment plans for your unique goals.',
    },
    {
      icon: <Star sx={{ fontSize: 48 }} />,
      title: '5-Star Results',
      description: 'Consistently rated 5 stars by our clients for exceptional results and service.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pure Skin Palm Beach | Premier Medical Spa in West Palm Beach, FL</title>
        <meta name="description" content="Pure Skin Palm Beach offers advanced aesthetic treatments including Ultherapy, CoolSculpting, Botox, and hormone therapy. Led by expert Jennifer Gowdy. Book your consultation today!" />
        <meta name="keywords" content="medical spa west palm beach, medspa palm beach, ultherapy west palm beach, coolsculpting palm beach, botox west palm beach, jennifer gowdy, pure skin palm beach" />
        <meta property="og:title" content="Pure Skin Palm Beach | Premier Medical Spa in West Palm Beach" />
        <meta property="og:description" content="Transform your skin with advanced treatments at Pure Skin Palm Beach. Expert care, proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pureskinpalmbeach.com" />
        <link rel="canonical" href="https://www.pureskinpalmbeach.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Pure Skin Palm Beach",
            "description": "Premier medical spa offering advanced aesthetic treatments",
            "url": "https://www.pureskinpalmbeach.com",
            "telephone": "+1-561-123-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2810 S Dixie Hwy",
              "addressLocality": "West Palm Beach",
              "addressRegion": "FL",
              "postalCode": "33405",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.6906,
              "longitude": -80.0497
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
              }
            ],
            "priceRange": "$$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "150"
            }
          })}
        </script>
      </Helmet>

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ color: theme.palette.secondary.main }}
          >
            Why Choose Pure Skin Palm Beach
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 300,
            }}
          >
            Experience the difference of expert care combined with the most advanced
            aesthetic technologies available
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    '& .icon': {
                      color: theme.palette.primary.main,
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <CardContent>
                  <Box
                    className="icon"
                    sx={{
                      color: theme.palette.primary.light,
                      mb: 2,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Interactive Treatment Visualizer */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 10 }}>
        <TreatmentVisualizer />
      </Box>

      {/* Services Section */}
      <Box sx={{ backgroundColor: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              Our Signature Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 700,
                mx: 'auto',
                fontWeight: 300,
              }}
            >
              Discover our comprehensive range of medical aesthetic treatments
              designed to help you look and feel your best
            </Typography>
          </Box>
          <ServiceCards />
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/services"
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* AI Skincare Analyzer */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 10 }}>
        <AISkincareAnalyzer />
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              Meet Jennifer Gowdy
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
            >
              Your Expert in Advanced Aesthetics
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              With decades of experience at industry leaders CoolSculpting and Merz
              Aesthetics (Ultherapy), Jennifer brings unparalleled expertise to every
              treatment. Her deep understanding of aesthetic technology and commitment
              to natural-looking results has made her West Palm Beach's trusted expert
              for transformative treatments.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Jennifer's approach combines scientific precision with artistic vision,
              ensuring each client receives personalized care that enhances their
              natural beauty while maintaining authenticity.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              to="/about"
              sx={{ mt: 2 }}
            >
              Learn More About Our Approach
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '50%',
                  opacity: 0.1,
                },
              }}
            >
              <img
                src="/images/jennifer-gowdy.jpg"
                alt="Jennifer Gowdy - Pure Skin Palm Beach Founder"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <TestimonialSection />
        </Container>
      </Box>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default HomePage;