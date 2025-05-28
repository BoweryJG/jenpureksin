import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Grid,
  Chip,
  useTheme,
} from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Jennifer\'s expertise from her years at CoolSculpting really shows. My results exceeded all expectations! The personalized approach and attention to detail made all the difference.',
    treatment: 'CoolSculpting Elite',
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'Dr. Rebecca L.',
    rating: 5,
    text: 'As a physician myself, I appreciate the scientific approach and medical expertise at Pure Skin. The Ultherapy results are remarkable - exactly what Jennifer promised.',
    treatment: 'Ultherapy',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'Michael K.',
    rating: 5,
    text: 'Finally found a medspa that understands men\'s aesthetic needs. The hormone therapy has been life-changing, and the discrete, professional service is exceptional.',
    treatment: 'Hormone Therapy',
    image: '/images/testimonial-3.jpg',
  },
];

const TestimonialSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        textAlign="center"
        gutterBottom
        sx={{ color: theme.palette.secondary.main, mb: 1 }}
      >
        What Our Clients Say
      </Typography>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{
          color: theme.palette.text.secondary,
          maxWidth: 700,
          mx: 'auto',
          mb: 6,
          fontWeight: 300,
        }}
      >
        Real results from real people. See why we're West Palm Beach's highest-rated medical spa.
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                position: 'relative',
                overflow: 'visible',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: 20,
                  width: 60,
                  height: 60,
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: '50%',
                  opacity: 0.1,
                  zIndex: -1,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly size="small" />
                  </Box>
                </Box>
                <FormatQuote
                  sx={{
                    fontSize: 40,
                    color: theme.palette.primary.light,
                    opacity: 0.3,
                    transform: 'rotate(180deg)',
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                    mb: 2,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {testimonial.text}
                </Typography>
                <Chip
                  label={testimonial.treatment}
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    color: 'white',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" sx={{ mt: 6 }}>
        <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 1 }}>
          150+ Five-Star Reviews
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Join thousands of satisfied clients who trust Pure Skin Palm Beach for their aesthetic journey
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialSection;