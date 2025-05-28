import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Chip,
  Avatar,
  useTheme,
  LinearProgress,
  Alert,
  Divider,
} from '@mui/material';
import {
  CloudUpload,
  Psychology,
  AutoAwesome,
  TrendingUp,
  LocalHospital,
  Schedule,
  AttachMoney,
  CheckCircle,
  Warning,
} from '@mui/icons-material';

interface SkinAnalysisResult {
  overall_score: number;
  wrinkles: {
    score: number;
    severity: 'low' | 'medium' | 'high';
    areas: string[];
  };
  pigmentation: {
    score: number;
    type: string;
    affected_areas: string[];
  };
  texture: {
    score: number;
    concerns: string[];
  };
  hydration: {
    score: number;
    level: 'poor' | 'fair' | 'good' | 'excellent';
  };
  recommended_treatments: RecommendedTreatment[];
  skin_age: number;
  actual_age: number;
}

interface RecommendedTreatment {
  name: string;
  priority: 'high' | 'medium' | 'low';
  effectiveness: number;
  cost_range: string;
  duration: string;
  expected_results: string;
  why_recommended: string;
}

const AISkincareAnalyzer: React.FC = () => {
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<SkinAnalysisResult | null>(null);
  const [analysisStep, setAnalysisStep] = useState(0);

  // Mock analysis data - in real implementation, this would come from AI API
  const mockAnalysisResult: SkinAnalysisResult = {
    overall_score: 78,
    wrinkles: {
      score: 72,
      severity: 'medium',
      areas: ['crow\'s feet', 'forehead lines', 'nasolabial folds'],
    },
    pigmentation: {
      score: 85,
      type: 'sun damage',
      affected_areas: ['cheeks', 'forehead'],
    },
    texture: {
      score: 68,
      concerns: ['enlarged pores', 'uneven texture'],
    },
    hydration: {
      score: 82,
      level: 'good',
    },
    recommended_treatments: [
      {
        name: 'Ultherapy',
        priority: 'high',
        effectiveness: 92,
        cost_range: '$2,500 - $3,500',
        duration: '90 minutes',
        expected_results: 'Significant lifting and tightening',
        why_recommended: 'Addresses sagging skin and stimulates deep collagen production',
      },
      {
        name: 'Microneedling with PRP',
        priority: 'medium',
        effectiveness: 78,
        cost_range: '$450 - $650',
        duration: '60 minutes',
        expected_results: 'Improved texture and tone',
        why_recommended: 'Perfect for addressing pore size and skin texture concerns',
      },
      {
        name: 'IPL Photofacial',
        priority: 'medium',
        effectiveness: 85,
        cost_range: '$300 - $500',
        duration: '30 minutes',
        expected_results: 'Reduced pigmentation',
        why_recommended: 'Targets sun damage and uneven pigmentation effectively',
      },
    ],
    skin_age: 35,
    actual_age: 42,
  };

  const analysisSteps = [
    'Analyzing facial structure...',
    'Detecting skin concerns...',
    'Mapping treatment areas...',
    'Generating recommendations...',
    'Finalizing analysis...',
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisStep(0);

    // Simulate AI analysis with step progression
    for (let i = 0; i < analysisSteps.length; i++) {
      setAnalysisStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    setAnalysisResult(mockAnalysisResult);
    setIsAnalyzing(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
      default: return 'primary';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <Warning color="error" />;
      case 'medium': return <Schedule color="warning" />;
      case 'low': return <CheckCircle color="success" />;
      default: return <AutoAwesome />;
    }
  };

  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={6}>
            <Chip
              icon={<Psychology />}
              label="Powered by Advanced AI + Jennifer's Expertise"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ color: theme.palette.secondary.main }}
            >
              AI Skin Analysis
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
              Get personalized treatment recommendations based on advanced AI analysis
              combined with Jennifer's decades of clinical expertise.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Upload Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Upload Your Photo
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Upload a clear, front-facing photo in good lighting for the most accurate analysis.
                  </Typography>

                  {!uploadedImage ? (
                    <Box
                      sx={{
                        border: '2px dashed',
                        borderColor: 'primary.light',
                        borderRadius: 2,
                        p: 6,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          backgroundColor: 'primary.light',
                          opacity: 0.1,
                        },
                      }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                      <Typography variant="h6" color="primary">
                        Click to Upload Photo
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Supports JPG, PNG (Max 5MB)
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ position: 'relative' }}>
                      <img
                        src={uploadedImage}
                        alt="Uploaded for analysis"
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setUploadedImage(null)}
                        sx={{ mt: 2 }}
                      >
                        Upload Different Photo
                      </Button>
                    </Box>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />

                  {uploadedImage && !isAnalyzing && !analysisResult && (
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={runAnalysis}
                      startIcon={<AutoAwesome />}
                      sx={{
                        mt: 3,
                        background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #B08968, #D4A574)',
                        },
                      }}
                    >
                      Start AI Analysis
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Analysis Results */}
          <Grid item xs={12} md={6}>
            <AnimatePresence mode="wait">
              {isAnalyzing && (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <CircularProgress
                        size={80}
                        sx={{ color: 'primary.main', mb: 3 }}
                      />
                      <Typography variant="h6" gutterBottom>
                        Analyzing Your Skin...
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {analysisSteps[analysisStep]}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={(analysisStep / (analysisSteps.length - 1)) * 100}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'grey.200',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
                          },
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {analysisResult && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            backgroundColor: 'success.main',
                            mr: 2,
                          }}
                        >
                          <CheckCircle />
                        </Avatar>
                        <Box>
                          <Typography variant="h6">
                            Analysis Complete
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Overall Skin Health Score: {analysisResult.overall_score}/100
                          </Typography>
                        </Box>
                      </Box>

                      <Alert severity="info" sx={{ mb: 3 }}>
                        Your skin age is {analysisResult.skin_age} years
                        {analysisResult.skin_age < analysisResult.actual_age 
                          ? ` - ${analysisResult.actual_age - analysisResult.skin_age} years younger than your actual age!`
                          : ` - we can help reverse the aging process.`
                        }
                      </Alert>

                      {/* Skin Metrics */}
                      <Typography variant="h6" gutterBottom>
                        Skin Analysis Breakdown
                      </Typography>
                      <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={6}>
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              Wrinkles
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={analysisResult.wrinkles.score}
                              color={getSeverityColor(analysisResult.wrinkles.severity) as any}
                              sx={{ height: 8, borderRadius: 4 }}
                            />
                            <Typography variant="caption">
                              {analysisResult.wrinkles.score}/100
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              Pigmentation
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={analysisResult.pigmentation.score}
                              color="success"
                              sx={{ height: 8, borderRadius: 4 }}
                            />
                            <Typography variant="caption">
                              {analysisResult.pigmentation.score}/100
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              Texture
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={analysisResult.texture.score}
                              color="warning"
                              sx={{ height: 8, borderRadius: 4 }}
                            />
                            <Typography variant="caption">
                              {analysisResult.texture.score}/100
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              Hydration
                            </Typography>
                            <LinearProgress
                              variant="determinate"
                              value={analysisResult.hydration.score}
                              color="success"
                              sx={{ height: 8, borderRadius: 4 }}
                            />
                            <Typography variant="caption">
                              {analysisResult.hydration.score}/100
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<LocalHospital />}
                        sx={{
                          background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #B08968, #D4A574)',
                          },
                        }}
                      >
                        View Detailed Recommendations
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {!uploadedImage && !isAnalyzing && !analysisResult && (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
                      <Typography variant="h6" gutterBottom>
                        AI-Powered Analysis Ready
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Upload your photo to receive personalized treatment recommendations
                        based on Jennifer's clinical expertise and advanced AI analysis.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </Grid>
        </Grid>

        {/* Treatment Recommendations */}
        {analysisResult && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" gutterBottom textAlign="center">
                Personalized Treatment Plan
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Based on your analysis, here are Jennifer's recommended treatments:
              </Typography>

              <Grid container spacing={3}>
                {analysisResult.recommended_treatments.map((treatment, index) => (
                  <Grid item xs={12} md={4} key={treatment.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          border: treatment.priority === 'high' ? 2 : 0,
                          borderColor: 'primary.main',
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            {getPriorityIcon(treatment.priority)}
                            <Typography variant="h6" sx={{ ml: 1 }}>
                              {treatment.name}
                            </Typography>
                            <Chip
                              label={treatment.priority}
                              size="small"
                              color={treatment.priority === 'high' ? 'error' : treatment.priority === 'medium' ? 'warning' : 'success'}
                              sx={{ ml: 'auto' }}
                            />
                          </Box>

                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {treatment.why_recommended}
                          </Typography>

                          <Divider sx={{ my: 2 }} />

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2">Effectiveness:</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {treatment.effectiveness}%
                            </Typography>
                          </Box>

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2">Investment:</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {treatment.cost_range}
                            </Typography>
                          </Box>

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography variant="body2">Duration:</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {treatment.duration}
                            </Typography>
                          </Box>

                          <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 2 }}>
                            Expected: {treatment.expected_results}
                          </Typography>

                          <Button
                            fullWidth
                            variant={treatment.priority === 'high' ? 'contained' : 'outlined'}
                            color="primary"
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default AISkincareAnalyzer;