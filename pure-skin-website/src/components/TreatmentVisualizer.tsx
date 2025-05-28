import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Slider,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  useTheme,
  LinearProgress,
} from '@mui/material';
import {
  Face,
  AutoAwesome,
  Psychology,
} from '@mui/icons-material';

interface TreatmentResult {
  id: string;
  name: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  progress: number;
  cost: number;
  duration: string;
  benefits: string[];
}

interface TreatmentVisualizerProps {
  treatments?: TreatmentResult[];
}

const treatmentData: TreatmentResult[] = [
  {
    id: 'ultherapy',
    name: 'Ultherapy',
    description: 'Non-invasive ultrasound skin lifting and tightening',
    beforeImage: '/images/before-ultherapy.jpg',
    afterImage: '/images/after-ultherapy.jpg',
    progress: 85,
    cost: 2800,
    duration: '90 minutes',
    benefits: ['Lifts sagging skin', 'Reduces wrinkles', 'Tightens jawline', 'No downtime'],
  },
  {
    id: 'coolsculpting',
    name: 'CoolSculpting Elite',
    description: 'Advanced fat freezing technology for body contouring',
    beforeImage: '/images/before-coolsculpting.jpg',
    afterImage: '/images/after-coolsculpting.jpg',
    progress: 92,
    cost: 1200,
    duration: '35 minutes',
    benefits: ['Permanent fat reduction', '35% more coverage', 'FDA-cleared', 'Comfortable treatment'],
  },
  {
    id: 'botox',
    name: 'Botox & Neurotoxins',
    description: 'Precision wrinkle reduction with natural results',
    beforeImage: '/images/before-botox.jpg',
    afterImage: '/images/after-botox.jpg',
    progress: 78,
    cost: 450,
    duration: '15 minutes',
    benefits: ['Smooths wrinkles', 'Prevents new lines', 'Quick treatment', 'Natural look'],
  },
];

const TreatmentCard: React.FC<{ treatment: TreatmentResult; intensity: number }> = ({
  treatment,
  intensity,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = useTheme();
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          },
          transition: 'all 0.3s ease',
        }}
        onClick={() => setShowAfter(!showAfter)}
      >
        <Box sx={{ position: 'relative', height: 300, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={showAfter ? 'after' : 'before'}
              src={showAfter ? treatment.afterImage : treatment.beforeImage}
              alt={`${treatment.name} ${showAfter ? 'after' : 'before'}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: `brightness(${0.7 + (intensity * 0.3)}) contrast(${1 + (intensity * 0.2)})`,
              }}
            />
          </AnimatePresence>

          {/* Overlay with treatment info */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: showAfter 
                ? 'linear-gradient(to top, rgba(212, 165, 116, 0.8), transparent)'
                : 'linear-gradient(to top, rgba(44, 62, 80, 0.8), transparent)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              p: 3,
            }}
          >
            <Chip
              label={showAfter ? 'After Treatment' : 'Before Treatment'}
              size="small"
              sx={{
                backgroundColor: showAfter ? 'success.main' : 'warning.main',
                color: 'white',
                mb: 2,
                alignSelf: 'flex-start',
              }}
            />
            <Typography variant="h5" color="white" sx={{ fontWeight: 600, mb: 1 }}>
              {treatment.name}
            </Typography>
            <Typography variant="body2" color="white" sx={{ opacity: 0.9 }}>
              {treatment.description}
            </Typography>
          </Box>

          {/* Progress indicator */}
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              width: 60,
              height: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
              {Math.round(treatment.progress * intensity)}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Effective
            </Typography>
          </Box>
        </Box>

        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Treatment Details
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Investment:
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                ${Math.round(treatment.cost * (0.8 + intensity * 0.4)).toLocaleString()}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Duration:
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {treatment.duration}
              </Typography>
            </Box>
          </Box>

          <Typography variant="subtitle2" gutterBottom>
            Key Benefits:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {treatment.benefits.slice(0, 3).map((benefit, index) => (
              <Chip
                key={index}
                label={benefit}
                size="small"
                variant="outlined"
                color="primary"
              />
            ))}
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<AutoAwesome />}
            sx={{ mt: 2 }}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TreatmentVisualizer: React.FC<TreatmentVisualizerProps> = ({ treatments = treatmentData }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState(0);
  const [intensity, setIntensity] = useState(0.7);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>(['ultherapy']);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const totalCost = treatments
    .filter(t => selectedTreatments.includes(t.id))
    .reduce((sum, t) => sum + Math.round(t.cost * (0.8 + intensity * 0.4)), 0);

  return (
    <Box sx={{ py: 10, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              Interactive Treatment Visualizer
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 700,
                mx: 'auto',
                fontWeight: 300,
                mb: 4,
              }}
            >
              Experience the power of AI-assisted treatment planning.
              Adjust intensity levels and see real transformation results.
            </Typography>
            
            <Chip
              icon={<Psychology />}
              label="Powered by Jennifer's Clinical Experience"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
          </Box>
        </motion.div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card sx={{ mb: 6, overflow: 'visible' }}>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Treatment Intensity
                  </Typography>
                  <Box sx={{ px: 2 }}>
                    <Slider
                      value={intensity}
                      onChange={(_, value) => setIntensity(value as number)}
                      min={0.3}
                      max={1.0}
                      step={0.1}
                      marks={[
                        { value: 0.3, label: 'Subtle' },
                        { value: 0.7, label: 'Optimal' },
                        { value: 1.0, label: 'Maximum' },
                      ]}
                      sx={{
                        '& .MuiSlider-thumb': {
                          backgroundColor: theme.palette.primary.main,
                          '&:hover': {
                            boxShadow: '0 0 0 8px rgba(212, 165, 116, 0.16)',
                          },
                        },
                        '& .MuiSlider-track': {
                          background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      backgroundColor: 'primary.light',
                      color: 'white',
                      p: 3,
                      borderRadius: 2,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                      ${totalCost.toLocaleString()}
                    </Typography>
                    <Typography variant="body2">
                      Total Investment • {selectedTreatments.length} Treatment{selectedTreatments.length > 1 ? 's' : ''}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={intensity * 100}
                      sx={{
                        mt: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'white',
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </motion.div>

        {/* Treatment Grid */}
        <Grid container spacing={4}>
          {treatments.map((treatment, index) => (
            <Grid item xs={12} md={4} key={treatment.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TreatmentCard treatment={treatment} intensity={intensity} />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 6,
              background: 'linear-gradient(135deg, #2C3E50, #34495E)',
              borderRadius: 3,
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography variant="h3" gutterBottom>
              Ready to Begin Your Transformation?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Schedule a complimentary consultation with Jennifer to create your personalized treatment plan
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Face />}
              sx={{
                background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  background: 'linear-gradient(45deg, #B08968, #D4A574)',
                },
              }}
            >
              Book Free Consultation
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TreatmentVisualizer;