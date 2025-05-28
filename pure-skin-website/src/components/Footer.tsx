import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Button,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  YouTube,
  LocationOn,
  Phone,
  Email,
  AccessTime,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2C3E50',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontFamily: '"Playfair Display", serif',
                color: '#D4A574',
                mb: 3,
              }}
            >
              Pure Skin Palm Beach
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              Where science meets artistry. Led by expert practitioners with decades
              of experience in medical aesthetics, we deliver transformative results
              with the most advanced technologies available.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton
                href="https://facebook.com/pureskinpalmbeach"
                target="_blank"
                sx={{ color: 'white', '&:hover': { color: '#D4A574' } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://instagram.com/pureskinpalmbeach"
                target="_blank"
                sx={{ color: 'white', '&:hover': { color: '#D4A574' } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://youtube.com"
                target="_blank"
                sx={{ color: 'white', '&:hover': { color: '#D4A574' } }}
              >
                <YouTube />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: '#D4A574', fontWeight: 600 }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['About Us', 'Services', 'Our Team', 'Testimonials', 'Blog', 'Contact'].map(
                (item) => (
                  <Link
                    key={item}
                    component={RouterLink}
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': { color: '#D4A574' },
                      fontSize: '0.9rem',
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: '#D4A574', fontWeight: 600 }}
            >
              Popular Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                'Ultherapy',
                'CoolSculpting',
                'Botox & Dysport',
                'Dermal Fillers',
                'Microneedling',
                'Hormone Therapy',
              ].map((service) => (
                <Link
                  key={service}
                  component={RouterLink}
                  to={`/services/${service.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { color: '#D4A574' },
                    fontSize: '0.9rem',
                  }}
                >
                  {service}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: '#D4A574', fontWeight: 600 }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                <LocationOn sx={{ fontSize: 20, color: '#D4A574', mt: 0.5 }} />
                <Typography variant="body2">
                  2810 S Dixie Hwy
                  <br />
                  West Palm Beach, FL 33405
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 20, color: '#D4A574' }} />
                <Link
                  href="tel:561-123-4567"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { color: '#D4A574' },
                  }}
                >
                  (561) 123-4567
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 20, color: '#D4A574' }} />
                <Link
                  href="mailto:info@pureskinpalmbeach.com"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { color: '#D4A574' },
                  }}
                >
                  info@pureskinpalmbeach.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                <AccessTime sx={{ fontSize: 20, color: '#D4A574', mt: 0.5 }} />
                <Typography variant="body2">
                  Mon-Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat: 10:00 AM - 4:00 PM
                  <br />
                  Sun: Closed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {currentYear} Pure Skin Palm Beach. All rights reserved.{' '}
            <Link
              component={RouterLink}
              to="/strategic"
              sx={{
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                '&:hover': { color: 'rgba(255,255,255,0.5)' },
                fontSize: '0.75rem',
                ml: 1,
              }}
              title="Executive Portal"
            >
              •
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              component={RouterLink}
              to="/privacy"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                '&:hover': { color: 'white' },
                fontSize: '0.875rem',
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/terms"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                '&:hover': { color: 'white' },
                fontSize: '0.875rem',
              }}
            >
              Terms of Service
            </Link>
            <Link
              component={RouterLink}
              to="/sitemap"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                '&:hover': { color: 'white' },
                fontSize: '0.875rem',
              }}
            >
              Sitemap
            </Link>
          </Box>
        </Box>

        {/* Newsletter Section */}
        <Box
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: 'rgba(212, 165, 116, 0.1)',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ color: '#D4A574', mb: 1 }}>
            Stay Updated with Beauty Tips & Exclusive Offers
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              maxWidth: 400,
              mx: 'auto',
              mt: 2,
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: '30px',
                border: 'none',
                outline: 'none',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '30px' }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;