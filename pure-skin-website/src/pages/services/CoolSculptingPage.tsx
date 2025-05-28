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
  Paper,
  LinearProgress
} from '@mui/material';
import {
  CheckCircle,
  Schedule,
  Star,
  FitnessCenter,
  ExpandMore,
  Science,
  TrendingUp,
  AccessTime,
  AutoFixHigh,
  Phone,
  AcUnit,
  Timeline
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CoolSculptingPage: React.FC = () => {
  const theme = useTheme();

  const benefits = [
    'FDA-cleared permanent fat reduction',
    '35% larger treatment area with Elite',
    'No downtime or recovery needed',
    'Comfortable treatment experience',
    'Natural elimination of fat cells',
    'Visible results in 1-3 months',
    'Long-lasting body contouring',
    'Non-surgical alternative to liposuction'
  ];

  const treatmentAreas = [
    { 
      area: 'Abdomen', 
      description: 'Reduce stubborn belly fat and love handles',
      sessions: '1-2 treatments',
      reduction: '20-25%'
    },
    { 
      area: 'Flanks (Love Handles)', 
      description: 'Contour your waistline and sides',
      sessions: '1-2 treatments',
      reduction: '20-25%'
    },
    { 
      area: 'Thighs', 
      description: 'Inner and outer thigh fat reduction',
      sessions: '2-3 treatments',
      reduction: '20-25%'
    },
    { 
      area: 'Arms', 
      description: 'Upper arm and bra line contouring',
      sessions: '2-3 treatments',
      reduction: '20-25%'
    },
    { 
      area: 'Double Chin', 
      description: 'Submental fat reduction for jawline definition',
      sessions: '1-2 treatments',
      reduction: '20-25%'
    },
    { 
      area: 'Back Fat', 
      description: 'Upper and lower back bulge reduction',
      sessions: '2-3 treatments',
      reduction: '20-25%'
    }
  ];

  const beforeAfterResults = [
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop',
      area: 'Abdomen',
      sessions: '2 treatments',
      timeframe: '3 months post-treatment'
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
      area: 'Flanks',
      sessions: '1 treatment',
      timeframe: '2 months post-treatment'
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
      area: 'Double Chin',
      sessions: '2 treatments',
      timeframe: '4 months post-treatment'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Consultation & Assessment',
      description: 'Comprehensive body analysis and customized treatment planning',
      duration: '45-60 minutes',
      icon: <Science />
    },
    {
      step: 2,
      title: 'Treatment Application',
      description: 'Comfortable gel pad placement and controlled cooling',
      duration: '35-60 minutes',
      icon: <AcUnit />
    },
    {
      step: 3,
      title: 'Massage & Recovery',
      description: 'Post-treatment massage to enhance fat elimination',
      duration: '2-5 minutes',
      icon: <FitnessCenter />
    },
    {
      step: 4,
      title: 'Results Development',
      description: 'Natural fat cell elimination and body contouring',
      duration: '1-3 months',
      icon: <Timeline />
    }
  ];

  const faqs = [
    {
      question: 'How does CoolSculpting work?',
      answer: 'CoolSculpting uses controlled cooling (cryolipolysis) to freeze and eliminate fat cells. The treated fat cells crystallize, die, and are naturally eliminated by your body over the following weeks and months, resulting in permanent fat reduction.'
    },
    {
      question: 'Is CoolSculpting painful?',
      answer: 'Most patients experience initial cold and tugging sensations that subside as the area becomes numb. The treatment is generally comfortable, and many patients read, work on their phones, or even nap during sessions.'
    },
    {
      question: 'How many treatments will I need?',
      answer: 'Most patients see significant results with 1-2 treatments per area. During your consultation, I\'ll assess your goals and recommend the optimal treatment plan based on the amount of fat and your desired outcome.'
    },
    {
      question: 'When will I see results?',
      answer: 'Some patients notice changes as early as 3 weeks post-treatment. The most dramatic results are typically seen at 1-3 months after treatment as your body continues to flush out the eliminated fat cells.'
    },
    {
      question: 'Are the results permanent?',
      answer: 'Yes! CoolSculpting permanently eliminates fat cells from treated areas. However, maintaining results requires a healthy lifestyle, as remaining fat cells can still expand with weight gain.'
    },
    {
      question: 'Am I a good candidate for CoolSculpting?',
      answer: 'Ideal candidates are close to their ideal weight with pinchable areas of stubborn fat that resist diet and exercise. CoolSculpting is not a weight-loss solution but rather a body contouring treatment.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>CoolSculpting Elite West Palm Beach | Jennifer Gowdy | Pure Skin</title>
        <meta 
          name="description" 
          content="Expert CoolSculpting Elite treatments by Jennifer Gowdy, former CoolSculpting specialist. Permanent fat reduction with advanced technology in West Palm Beach. Free consultations." 
        />
        <meta name="keywords" content="CoolSculpting, CoolSculpting Elite, fat reduction, body contouring, West Palm Beach, Jennifer Gowdy" />
        <link rel="canonical" href="https://pureskinpalmbeach.com/services/coolsculpting" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
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
                  label="FDA-Cleared • Former CoolSculpting Specialist" 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    mb: 2,
                    fontWeight: 600
                  }} 
                />
                <Typography variant="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  CoolSculpting Elite
                </Typography>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, opacity: 0.9 }}>
                  Advanced Fat Freezing Technology
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6 }}>
                  Permanent fat reduction with 35% larger treatment coverage. 
                  Delivered by Jennifer Gowdy, former CoolSculpting specialist 
                  with thousands of successful treatments.
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
                    Free Consultation
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
                    View Before & After
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
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                  alt="CoolSculpting Elite treatment at Pure Skin Palm Beach"
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

      {/* Jennifer's CoolSculpting Expertise */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                Former CoolSculpting Specialist
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#D4A574', fontWeight: 500 }}>
                Unmatched Expertise • Thousands of Treatments
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                Jennifer Gowdy brings unparalleled CoolSculpting expertise as a former company 
                specialist with extensive training in advanced techniques and protocols. Her 
                deep understanding of the technology ensures optimal results and patient safety.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                Having performed thousands of CoolSculpting treatments, Jennifer has mastered 
                the art of body contouring, delivering consistent, natural-looking results 
                that exceed patient expectations.
              </Typography>
              <List>
                {[
                  'Former CoolSculpting Company Specialist',
                  'Advanced CoolSculpting Elite Certification',
                  'Thousands of Successful Treatments',
                  'Expert in All 9 FDA-Cleared Treatment Areas',
                  'Customized Treatment Protocols'
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
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=600&fit=crop"
                alt="Jennifer Gowdy CoolSculpting expert"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              />
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Key Benefits */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Why Choose CoolSculpting Elite?
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
            The most advanced fat reduction technology with proven results and expert delivery
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
                    <CheckCircle sx={{ fontSize: 48, color: '#4a90e2', mb: 2 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {benefit}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Treatment Areas */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          FDA-Cleared Treatment Areas
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
          Comprehensive body contouring for all your problem areas
        </Typography>

        <Grid container spacing={4}>
          {treatmentAreas.map((area, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FitnessCenter sx={{ fontSize: 40, color: '#4a90e2', mr: 2 }} />
                    <Box>
                      <Typography variant="h5" sx={{ color: theme.palette.secondary.main }}>
                        {area.area}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {area.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Chip 
                        label={area.sessions} 
                        size="small" 
                        sx={{ bgcolor: '#e3f2fd', color: '#1976d2' }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Chip 
                        label={`${area.reduction} reduction`} 
                        size="small" 
                        sx={{ bgcolor: '#D4A574', color: 'white' }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Before & After Results */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Real Patient Results
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
            See the dramatic transformations achieved with Jennifer's expert CoolSculpting treatments
          </Typography>

          <Grid container spacing={4}>
            {beforeAfterResults.map((result, index) => (
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
                          alt="Before CoolSculpting treatment"
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
                          alt="After CoolSculpting treatment"
                          sx={{ width: '100%', height: 250, objectFit: 'cover' }}
                        />
                        <Box sx={{ p: 1, bgcolor: '#4a90e2', textAlign: 'center' }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, color: 'white' }}>
                            AFTER
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                        {result.area}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        {result.sessions} • {result.timeframe}
                      </Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={75} 
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          bgcolor: 'grey.200',
                          '& .MuiLinearProgress-bar': { bgcolor: '#4a90e2' }
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Treatment Process */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Your CoolSculpting Journey
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
          From consultation to transformation - a comfortable, proven process
        </Typography>

        <Grid container spacing={4}>
          {processSteps.map((process, index) => (
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
                      bgcolor: '#4a90e2',
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
                    sx={{ borderColor: '#4a90e2', color: '#4a90e2' }}
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
            Get expert answers to common CoolSculpting questions
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
              background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
              color: 'white',
              p: 8,
              textAlign: 'center',
              borderRadius: 3
            }}
          >
            <AcUnit sx={{ fontSize: 64, mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Freeze Away Fat?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Schedule your complimentary CoolSculpting consultation with Jennifer Gowdy, 
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
                  color: '#4a90e2',
                  '&:hover': { bgcolor: '#f5f5f5' },
                  px: 4,
                  py: 1.5,
                  fontWeight: 600
                }}
              >
                Free Consultation
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

export default CoolSculptingPage;