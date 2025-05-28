import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Ultherapy',
    description: 'FDA-approved non-surgical lifting and tightening treatment using focused ultrasound technology.',
    features: ['Non-invasive', 'No downtime', 'Long-lasting results'],
    price: 'From $2,200',
    link: '/services/ultherapy',
    popular: true,
  },
  {
    title: 'CoolSculpting Elite',
    description: 'Revolutionary body contouring that freezes and eliminates stubborn fat cells permanently.',
    features: ['FDA-cleared', 'Non-surgical', '35% more coverage'],
    price: 'From $600/area',
    link: '/services/coolsculpting',
    popular: true,
  },
  {
    title: 'Botox & Neurotoxins',
    description: 'Smooth wrinkles and prevent new lines with expertly administered neurotoxin treatments.',
    features: ['Quick treatment', 'Natural results', 'Expert technique'],
    price: '$13/unit',
    link: '/services/botox',
  },
  {
    title: 'Dermal Fillers',
    description: 'Restore volume, enhance contours, and rejuvenate your appearance with premium fillers.',
    features: ['Immediate results', 'Natural enhancement', 'Expert artistry'],
    price: 'From $650',
    link: '/services/fillers',
  },
  {
    title: 'Microneedling with PRP',
    description: 'Stimulate collagen production and rejuvenate skin with advanced microneedling technology.',
    features: ['Skin rejuvenation', 'Minimal downtime', 'Natural healing'],
    price: 'From $450',
    link: '/services/microneedling',
  },
  {
    title: 'Hormone Therapy',
    description: 'Restore balance and vitality with personalized bioidentical hormone replacement therapy.',
    features: ['Customized treatment', 'Improved wellness', 'Expert monitoring'],
    price: 'Consultation required',
    link: '/services/hormone-therapy',
  },
];

const ServiceCards: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
              },
            }}
          >
            {service.popular && (
              <Chip
                label="Popular"
                color="primary"
                size="small"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  fontWeight: 600,
                }}
              />
            )}
            <CardContent sx={{ flexGrow: 1, pb: 0 }}>
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                paragraph
                sx={{ mb: 3 }}
              >
                {service.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                {service.features.map((feature, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 0.5,
                      '&::before': {
                        content: '"✓"',
                        color: 'primary.main',
                        fontWeight: 'bold',
                        marginRight: 1,
                      },
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
              <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: 600, mt: 'auto' }}
              >
                {service.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button
                component={Link}
                to={service.link}
                fullWidth
                variant="outlined"
                color="primary"
                endIcon={<ArrowForward />}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceCards;