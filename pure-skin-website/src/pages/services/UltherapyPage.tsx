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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Chip,
  Paper
} from '@mui/material';
import {
  CheckCircle,
  Schedule,
  Star,
  Face,
  ExpandMore,
  Science,
  TrendingUp,
  Spa,
  AutoFixHigh,
  Phone
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UltherapyPage: React.FC = () => {
  const theme = useTheme();

  const benefits = [
    'FDA-approved non-invasive skin lifting',
    'Stimulates natural collagen production',
    'No downtime or recovery period',
    'Results develop naturally over 2-3 months',
    'Long-lasting effects up to 2 years',
    'Precision targeting with ultrasound visualization',
    'Suitable for face, neck, and décolletage',
    'No injections or surgery required'
  ];

  const treatmentAreas = [
    { area: 'Brow Line', description: 'Lift drooping eyebrows and open eyes', duration: '30-45 min' },
    { area: 'Face & Neck', description: 'Comprehensive lifting and tightening', duration: '60-90 min' },
    { area: 'Décolletage', description: 'Smooth chest wrinkles and crepiness', duration: '30-45 min' },
    { area: 'Double Chin', description: 'Define jawline and reduce submental fat', duration: '45-60 min' }
  ];

  const beforeAfterImages = [
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1594824389347-bbf9bb6d63e7?w=300&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=400&fit=crop',
      description: 'Brow lift and eye area tightening - 3 months post-treatment'
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=400&fit=crop',
      description: 'Full face and neck lift - 4 months post-treatment'
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop',
      description: 'Jawline definition and neck tightening - 3 months post-treatment'
    }
  ];

  const faqs = [
    {
      question: 'How does Ultherapy work?',
      answer: 'Ultherapy uses focused ultrasound energy to heat specific layers of skin and tissue beneath the surface. This thermal effect stimulates the production of fresh, new collagen, which lifts and tightens skin naturally over time.'
    },
    {
      question: 'Is Ultherapy painful?',
      answer: 'Most patients experience some discomfort during treatment as the ultrasound energy is delivered. We provide pain management options and take breaks as needed. The discomfort is temporary and indicates the treatment is working effectively.'
    },
    {
      question: 'When will I see results?',
      answer: 'You may see some initial tightening immediately, but the real results develop over 2-3 months as new collagen forms. Some patients continue to see improvements for up to 6 months after treatment.'
    },
    {
      question: 'How long do results last?',
      answer: 'Ultherapy results typically last 1-2 years. The natural aging process continues, but many patients choose to have touch-up treatments to maintain their results.'
    },
    {
      question: 'Am I a good candidate for Ultherapy?',
      answer: 'Ideal candidates have mild to moderate skin laxity and want to avoid surgery. During your consultation, I\'ll assess your skin condition and discuss whether Ultherapy or another treatment would be best for your goals.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ultherapy Face & Neck Lift | Pure Skin Palm Beach | Jennifer Gowdy</title>
        <meta 
          name="description" 
          content="FDA-approved Ultherapy treatments by certified expert Jennifer Gowdy. Non-invasive skin lifting and tightening for face, neck, and décolletage. West Palm Beach's premier Ultherapy provider." 
        />
        <meta name="keywords" content="Ultherapy, skin tightening, face lift, neck lift, non-invasive, West Palm Beach, Jennifer Gowdy" />
        <link rel="canonical" href="https://pureskinpalmbeach.com/services/ultherapy" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip 
                  label="FDA-Approved • Merz Certified Provider" 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    mb: 2,
                    fontWeight: 600
                  }} 
                />
                <Typography variant="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  Ultherapy
                </Typography>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, opacity: 0.9 }}>
                  Non-Invasive Skin Lifting & Tightening
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6 }}>
                  The only FDA-approved non-invasive treatment to lift skin on the neck, 
                  chin, and brow. Delivered by Jennifer Gowdy, certified Merz expert with 
                  15+ years of experience.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Phone />}
                    component={Link}
                    to="/book"
                    sx={{
                      bgcolor: '#D4A574',
                      '&:hover': { bgcolor: '#C19660' },
                      px: 4,
                      py: 1.5
                    }}
                  >
                    Book Consultation
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': { borderColor: '#D4A574', bgcolor: 'rgba(212,165,116,0.1)' }
                    }}
                  >
                    View Results Gallery
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop"
                  alt="Ultherapy treatment at Pure Skin Palm Beach"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Benefits */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Why Choose Ultherapy?
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
            The gold standard in non-invasive skin lifting, backed by science and delivered by West Palm Beach's most experienced provider
          </Typography>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                    <CheckCircle sx={{ fontSize: 48, color: '#D4A574', mb: 2 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {benefit}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Treatment Areas */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Treatment Areas
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
            Customized treatment plans for optimal results in every area
          </Typography>

          <Grid container spacing={4}>
            {treatmentAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ height: '100%', p: 3 }}>
                    <Face sx={{ fontSize: 48, color: '#D4A574', mb: 2 }} />
                    <Typography variant="h5" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                      {area.area}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                      {area.description}
                    </Typography>
                    <Chip 
                      label={area.duration} 
                      size="small" 
                      sx={{ bgcolor: '#D4A574', color: 'white' }}
                    />
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Before & After Gallery */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Real Results from Real Patients
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
          See the transformative results achieved with Jennifer's expert Ultherapy treatments
        </Typography>

        <Grid container spacing={4}>
          {beforeAfterImages.map((result, index) => (
            <Grid item xs={12} md={4} key={result.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box
                        component="img"
                        src={result.before}
                        alt="Before Ultherapy treatment"
                        sx={{ width: '100%', height: 250, objectFit: 'cover' }}
                      />
                      <Box sx={{ p: 1, bgcolor: '#f5f5f5', textAlign: 'center' }}>
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          BEFORE
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        component="img"
                        src={result.after}
                        alt="After Ultherapy treatment"
                        sx={{ width: '100%', height: 250, objectFit: 'cover' }}
                      />
                      <Box sx={{ p: 1, bgcolor: '#D4A574', textAlign: 'center' }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'white' }}>
                          AFTER
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {result.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Jennifer's Expertise */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=600&fit=crop"
                alt="Jennifer Gowdy, Ultherapy expert"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                Certified Merz Expert
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#D4A574', fontWeight: 500 }}>
                15+ Years of Ultherapy Excellence
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                As a certified Merz Aesthetics provider with over 15 years of experience, 
                Jennifer Gowdy has performed thousands of Ultherapy treatments with 
                consistently exceptional results.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                Her deep understanding of facial anatomy and precision technique ensures 
                optimal energy delivery for maximum lifting and tightening while 
                maintaining complete safety and comfort.
              </Typography>
              <List>
                {[
                  'Merz Certified Ultherapy Provider',
                  '15+ Years Aesthetic Medicine Experience',
                  'Thousands of Successful Treatments',
                  'Personalized Treatment Protocols',
                  'Advanced Pain Management Techniques'
                ].map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Star sx={{ color: '#D4A574', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Treatment Process */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Your Ultherapy Journey
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
          From consultation to results - what to expect every step of the way
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              step: '1',
              title: 'Comprehensive Consultation',
              description: 'Detailed skin assessment and personalized treatment planning',
              icon: <Face />,
              duration: '45-60 minutes'
            },
            {
              step: '2',
              title: 'Treatment Day',
              description: 'Precise ultrasound delivery with real-time imaging guidance',
              icon: <Science />,
              duration: '30-90 minutes'
            },
            {
              step: '3',
              title: 'Recovery & Results',
              description: 'Immediate return to activities with gradual improvement',
              icon: <TrendingUp />,
              duration: '2-6 months'
            },
            {
              step: '4',
              title: 'Follow-Up Care',
              description: 'Progress monitoring and optimization recommendations',
              icon: <Spa />,
              duration: 'Ongoing'
            }
          ].map((process, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: '#D4A574',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    {process.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                    Step {process.step}: {process.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {process.description}
                  </Typography>
                  <Chip 
                    label={process.duration} 
                    size="small" 
                    variant="outlined"
                    sx={{ borderColor: '#D4A574', color: '#D4A574' }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
            Get answers to common questions about Ultherapy treatments
          </Typography>

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion sx={{ mb: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            sx={{
              background: 'linear-gradient(135deg, #D4A574 0%, #E5C9A6 100%)',
              color: 'white',
              p: 8,
              textAlign: 'center',
              borderRadius: 3
            }}
          >
            <AutoFixHigh sx={{ fontSize: 64, mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Turn Back Time?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Schedule your complimentary Ultherapy consultation with Jennifer Gowdy, 
              West Palm Beach's most experienced provider.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Phone />}
                component={Link}
                to="/book"
                sx={{
                  bgcolor: 'white',
                  color: '#D4A574',
                  '&:hover': { bgcolor: '#f5f5f5' },
                  px: 4,
                  py: 1.5,
                  fontWeight: 600
                }}
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Schedule />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                  px: 4,
                  py: 1.5
                }}
              >
                Call (561) 123-4567
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </>
  );
};

export default UltherapyPage;