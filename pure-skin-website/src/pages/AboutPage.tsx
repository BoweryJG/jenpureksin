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
  useTheme,
  Chip,
  Paper,
  Avatar,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import {
  Star,
  School,
  WorkspacePremium,
  Science,
  EmojiEvents,
  Favorite,
  Phone,
  Schedule,
  AutoFixHigh,
  Psychology,
  Groups,
  TrendingUp
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const theme = useTheme();

  const achievements = [
    {
      icon: <WorkspacePremium />,
      title: 'Former CoolSculpting Specialist',
      description: 'Company-level expertise with advanced training protocols'
    },
    {
      icon: <Science />,
      title: 'Merz Certified Provider',
      description: 'Advanced certification in Ultherapy and aesthetic technologies'
    },
    {
      icon: <EmojiEvents />,
      title: '15+ Years Experience',
      description: 'Dedicated career in aesthetic medicine and body contouring'
    },
    {
      icon: <Groups />,
      title: 'Thousands of Patients',
      description: 'Consistently exceptional results and patient satisfaction'
    }
  ];

  const certifications = [
    'Former CoolSculpting Company Specialist',
    'Merz Aesthetics Certified Provider',
    'Advanced Ultherapy Certification',
    'Medical Aesthetic Technology Expert',
    'Body Contouring Specialist',
    'Patient Safety & Protocol Expert'
  ];

  const philosophy = [
    {
      principle: 'Personalized Care',
      description: 'Every treatment plan is customized to your unique goals and anatomy.',
      icon: <Psychology />
    },
    {
      principle: 'Natural Results',
      description: 'Enhancing your natural beauty with subtle, authentic improvements.',
      icon: <AutoFixHigh />
    },
    {
      principle: 'Evidence-Based',
      description: 'Using only FDA-approved technologies with proven safety and efficacy.',
      icon: <Science />
    },
    {
      principle: 'Patient Education',
      description: 'Empowering you with knowledge to make informed aesthetic decisions.',
      icon: <School />
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Career Beginnings',
      description: 'Started journey in aesthetic medicine with focus on non-invasive treatments'
    },
    {
      year: '2012',
      title: 'CoolSculpting Expertise',
      description: 'Became company specialist, mastering advanced fat reduction techniques'
    },
    {
      year: '2015',
      title: 'Merz Certification',
      description: 'Advanced training and certification in Ultherapy skin tightening'
    },
    {
      year: '2018',
      title: 'Technology Pioneer',
      description: 'Early adopter of CoolSculpting Elite and latest aesthetic innovations'
    },
    {
      year: '2023',
      title: 'Pure Skin Founded',
      description: 'Established Pure Skin Palm Beach to provide unmatched aesthetic care'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Jennifer Gowdy | Pure Skin Palm Beach | Expert Aesthetic Medicine</title>
        <meta 
          name="description" 
          content="Meet Jennifer Gowdy, former CoolSculpting specialist and Merz-certified expert. 15+ years of aesthetic medicine experience serving West Palm Beach with cutting-edge treatments." 
        />
        <meta name="keywords" content="Jennifer Gowdy, aesthetic medicine, CoolSculpting expert, Merz certified, Pure Skin Palm Beach, medical spa" />
        <link rel="canonical" href="https://pureskinpalmbeach.com/about" />
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
                  label="Founder & Medical Aesthetic Expert" 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    mb: 2,
                    fontWeight: 600
                  }} 
                />
                <Typography variant="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  Jennifer Gowdy
                </Typography>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, opacity: 0.9 }}>
                  Transforming Lives Through Expert Aesthetic Care
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6 }}>
                  With over 15 years of experience as a former CoolSculpting specialist 
                  and Merz-certified provider, Jennifer brings unparalleled expertise 
                  to aesthetic medicine in West Palm Beach.
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
                    Meet Jennifer
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Schedule />}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': { borderColor: '#D4A574', bgcolor: 'rgba(212,165,116,0.1)' }
                    }}
                  >
                    View Credentials
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
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop"
                  alt="Jennifer Gowdy, founder of Pure Skin Palm Beach"
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

      {/* Jennifer's Story */}
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
                A Passion for Transformation
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#D4A574', fontWeight: 500 }}>
                From Industry Expert to Trusted Provider
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                Jennifer's journey in aesthetic medicine began over 15 years ago with a simple 
                belief: everyone deserves to feel confident in their own skin. This philosophy 
                led her to specialize in non-invasive treatments that deliver natural-looking 
                results without surgery or extensive downtime.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                As a former CoolSculpting company specialist, Jennifer gained invaluable insight 
                into advanced body contouring techniques. Her expertise was further enhanced 
                through her work with Merz Aesthetics, where she mastered Ultherapy technology 
                for non-surgical skin lifting and tightening.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                Today, Jennifer brings this wealth of experience to Pure Skin Palm Beach, 
                where she combines cutting-edge technology with personalized care to help 
                clients achieve their aesthetic goals safely and effectively.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                }}
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 3,
                    bgcolor: '#D4A574'
                  }}
                >
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    JG
                  </Typography>
                </Avatar>
                <Typography variant="h5" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                  "My mission is to help every client discover their most confident self through 
                  safe, effective aesthetic treatments."
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                  - Jennifer Gowdy, Founder
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Achievements */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Professional Achievements
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
            Recognition and expertise built through years of dedication to aesthetic excellence
          </Typography>

          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
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
                      {achievement.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {achievement.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Professional Timeline */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Professional Journey
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
          A timeline of expertise, innovation, and dedication to aesthetic medicine
        </Typography>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Timeline position="alternate">
            {timeline.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <TimelineDot
                      sx={{
                        bgcolor: '#D4A574',
                        p: 2
                      }}
                    >
                      <TrendingUp />
                    </TimelineDot>
                  </motion.div>
                  {index < timeline.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Paper sx={{ p: 3, mb: 2 }}>
                      <Typography variant="h6" sx={{ color: '#D4A574', fontWeight: 600 }}>
                        {item.year}
                      </Typography>
                      <Typography variant="h6" gutterBottom sx={{ color: theme.palette.secondary.main }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>

      {/* Treatment Philosophy */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: theme.palette.secondary.main }}>
            Treatment Philosophy
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: 'text.secondary' }}>
            Core principles that guide every treatment and patient interaction
          </Typography>

          <Grid container spacing={4}>
            {philosophy.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ height: '100%', p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          bgcolor: '#D4A574',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography variant="h5" sx={{ color: theme.palette.secondary.main }}>
                        {item.principle}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Certifications & Training */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ color: theme.palette.secondary.main }}>
              Certifications & Training
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#D4A574', fontWeight: 500 }}>
              Continuous Education • Expert Credentials
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Jennifer maintains the highest standards of care through continuous education 
              and advanced training in the latest aesthetic technologies and techniques.
            </Typography>
            <List>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Star sx={{ color: '#D4A574', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={cert} />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=600&fit=crop"
              alt="Jennifer Gowdy certifications and training"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Pure Skin Mission */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=600&fit=crop"
                  alt="Pure Skin Palm Beach mission"
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
                  The Pure Skin Mission
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: '#D4A574', fontWeight: 500 }}>
                  Redefining Aesthetic Excellence in West Palm Beach
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Pure Skin Palm Beach was founded on the principle that exceptional aesthetic 
                  care should be accessible, personalized, and delivered with the highest level 
                  of expertise. We believe in empowering our clients through education, 
                  supporting them with compassionate care, and delivering results that exceed expectations.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Our commitment extends beyond individual treatments to creating lasting 
                  relationships built on trust, expertise, and genuine care for each client's 
                  unique journey toward confidence and self-enhancement.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <Chip 
                    label="Personalized Care" 
                    sx={{ bgcolor: '#D4A574', color: 'white' }}
                  />
                  <Chip 
                    label="Expert Results" 
                    sx={{ bgcolor: '#D4A574', color: 'white' }}
                  />
                  <Chip 
                    label="Trusted Service" 
                    sx={{ bgcolor: '#D4A574', color: 'white' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </motion.div>
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
            <Favorite sx={{ fontSize: 64, mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Experience the Pure Skin Difference
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Schedule your complimentary consultation with Jennifer and discover 
              how expert aesthetic care can transform your confidence.
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
                Schedule Consultation
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

export default AboutPage;