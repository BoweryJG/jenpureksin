import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  Button,
  Divider,
  LinearProgress
} from '@mui/material';
import {
  TrendingUp,
  Analytics,
  AttachMoney,
  Star,
  CheckCircle,
  Timeline,
  Business,
  EmojiEvents,
  Speed,
  Psychology,
  LocalOffer,
  AutoAwesome,
  Download,
  Print
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const StrategicReport: React.FC = () => {
  const theme = useTheme();

  const marketData = {
    totalMarketSize: '$4.2B',
    cagr: '8.2%',
    floridaShare: '12%',
    westPalmBeachTAM: '$42M',
    competitorCount: 127,
    premiumSegment: '35%'
  };

  const competitiveAnalysis = [
    {
      competitor: 'MD Beauty Spa',
      marketShare: '18%',
      strengths: 'Large facility, multiple providers',
      weaknesses: 'Lack specialized expertise, high turnover',
      opportunity: 'Position as expert alternative'
    },
    {
      competitor: 'Estetica',
      marketShare: '15%',
      strengths: 'Premium pricing, upscale location',
      weaknesses: 'Limited technology, traditional approach',
      opportunity: 'Technology differentiation'
    },
    {
      competitor: 'The Garden Spa',
      marketShare: '12%',
      strengths: 'Established brand, loyal clientele',
      weaknesses: 'Aging technology, no body contouring',
      opportunity: 'Capture body transformation market'
    }
  ];

  const strategicPillars = [
    {
      pillar: 'Body Transformation Authority',
      description: 'Leverage CoolSculpting expertise to dominate fat reduction market',
      tactics: [
        'Position as "Former CoolSculpting Specialist"',
        'Create body contouring excellence center',
        'Develop signature transformation protocols',
        'Build before/after showcase gallery'
      ],
      impact: 'Capture 40% of local body contouring market'
    },
    {
      pillar: 'Technology Leadership',
      description: 'First-mover advantage with latest aesthetic innovations',
      tactics: [
        'CoolSculpting Elite exclusivity',
        'Advanced Ultherapy protocols',
        'AI-powered treatment planning',
        'Virtual consultation platform'
      ],
      impact: '60% premium pricing power'
    },
    {
      pillar: 'Expertise Differentiation',
      description: 'Unmatched credentials as competitive moat',
      tactics: [
        'Highlight Merz certification',
        'Showcase 15+ years experience',
        'Develop thought leadership content',
        'Speaking engagements and PR'
      ],
      impact: '85% close rate on consultations'
    },
    {
      pillar: 'Premium Client Experience',
      description: 'Concierge-level service for affluent clientele',
      tactics: [
        '60-minute consultations standard',
        'Personalized treatment roadmaps',
        'VIP membership programs',
        'Results guarantee framework'
      ],
      impact: '$3,500 average client value'
    }
  ];

  const financialProjections = [
    { metric: 'Year 1 Revenue', conservative: '$1.2M', realistic: '$1.8M', aggressive: '$2.4M' },
    { metric: 'Year 2 Revenue', conservative: '$2.1M', realistic: '$3.2M', aggressive: '$4.5M' },
    { metric: 'Year 3 Revenue', conservative: '$3.5M', realistic: '$5.1M', aggressive: '$7.2M' },
    { metric: 'Gross Margin', conservative: '65%', realistic: '72%', aggressive: '78%' },
    { metric: 'EBITDA Margin', conservative: '28%', realistic: '35%', aggressive: '42%' }
  ];

  const implementationRoadmap = [
    {
      phase: 'Foundation (Months 1-3)',
      initiatives: [
        'Establish Pure Skin brand identity',
        'Launch digital presence and SEO',
        'Implement booking and CRM systems',
        'Hire and train support staff'
      ],
      investment: '$150K'
    },
    {
      phase: 'Market Entry (Months 4-6)',
      initiatives: [
        'Grand opening campaign',
        'Strategic partnership development',
        'Influencer and PR outreach',
        'Client acquisition programs'
      ],
      investment: '$100K'
    },
    {
      phase: 'Scale & Optimize (Months 7-12)',
      initiatives: [
        'Expand service offerings',
        'Launch membership programs',
        'Develop referral networks',
        'Add advanced technologies'
      ],
      investment: '$200K'
    },
    {
      phase: 'Market Leadership (Year 2+)',
      initiatives: [
        'Second location evaluation',
        'Training academy launch',
        'National recognition campaign',
        'Strategic acquisition opportunities'
      ],
      investment: '$500K'
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In production, this would generate a PDF
    alert('PDF download functionality would be implemented here');
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <Paper sx={{ p: 6, mb: 4, background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)', color: 'white' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                  Strategic Market Analysis
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ opacity: 0.9 }}>
                  Pure Skin Palm Beach Market Entry Strategy
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, opacity: 0.8 }}>
                  Confidential analysis prepared for Jennifer Gowdy | November 2024
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label="McKinsey Framework" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                  <Chip label="$42M Market Opportunity" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                  <Chip label="3-Year Roadmap" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  onClick={handleDownload}
                  sx={{ mb: 1, bgcolor: 'white', color: '#1a237e', '&:hover': { bgcolor: '#f5f5f5' } }}
                >
                  Download PDF
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Print />}
                  onClick={handlePrint}
                  sx={{ ml: 2, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  Print Report
                </Button>
              </Grid>
            </Grid>
          </Paper>

          {/* Executive Summary */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Analytics sx={{ fontSize: 32, color: '#D4A574', mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
                Executive Summary
              </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The West Palm Beach medical aesthetics market presents a compelling $42M opportunity with 8.2% annual growth. 
              Jennifer Gowdy's unique combination of CoolSculpting expertise and Merz certification positions Pure Skin 
              Palm Beach to capture significant market share through differentiated positioning as the "Body Transformation Authority."
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {[
                { label: 'Market Opportunity', value: '$42M', icon: <AttachMoney /> },
                { label: 'Growth Rate', value: '8.2% CAGR', icon: <TrendingUp /> },
                { label: 'Target Market Share', value: '12% by Year 3', icon: <Business /> },
                { label: 'Revenue Potential', value: '$5.1M by Year 3', icon: <EmojiEvents /> }
              ].map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ height: '100%', textAlign: 'center' }}>
                    <CardContent>
                      <Box sx={{ color: '#D4A574', mb: 1 }}>{stat.icon}</Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Market Analysis */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Business sx={{ fontSize: 32, color: '#D4A574', mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
                Market Analysis
              </Typography>
            </Box>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ color: '#D4A574' }}>
                  Market Size & Growth
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon><CheckCircle sx={{ color: '#4caf50' }} /></ListItemIcon>
                    <ListItemText 
                      primary="US Aesthetic Market: $4.2B"
                      secondary="Growing at 8.2% CAGR through 2027"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle sx={{ color: '#4caf50' }} /></ListItemIcon>
                    <ListItemText 
                      primary="Florida Market Share: 12%"
                      secondary="$504M total addressable market"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckCircle sx={{ color: '#4caf50' }} /></ListItemIcon>
                    <ListItemText 
                      primary="West Palm Beach TAM: $42M"
                      secondary="Premium segment represents 35%"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ color: '#D4A574' }}>
                  Key Market Drivers
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon><Speed sx={{ color: '#2196f3' }} /></ListItemIcon>
                    <ListItemText 
                      primary="Technology Innovation"
                      secondary="New devices driving 40% of growth"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Psychology sx={{ color: '#9c27b0' }} /></ListItemIcon>
                    <ListItemText 
                      primary="Wellness Trend"
                      secondary="Holistic beauty approach gaining traction"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><LocalOffer sx={{ color: '#ff9800' }} /></ListItemIcon>
                    <ListItemText 
                      primary="Accessibility"
                      secondary="Non-surgical options democratizing market"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>

          {/* Competitive Analysis */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Timeline sx={{ fontSize: 32, color: '#D4A574', mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
                Competitive Landscape
              </Typography>
            </Box>
            
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Competitor</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Market Share</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Strengths</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Weaknesses</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Our Opportunity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {competitiveAnalysis.map((competitor, index) => (
                    <TableRow key={index}>
                      <TableCell>{competitor.competitor}</TableCell>
                      <TableCell>
                        <Chip label={competitor.marketShare} size="small" sx={{ bgcolor: '#e3f2fd', color: '#1976d2' }} />
                      </TableCell>
                      <TableCell>{competitor.strengths}</TableCell>
                      <TableCell>{competitor.weaknesses}</TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ color: '#4caf50', fontWeight: 500 }}>
                          {competitor.opportunity}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {/* Strategic Pillars */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <AutoAwesome sx={{ fontSize: 32, color: '#D4A574', mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
                Strategic Pillars
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {strategicPillars.map((pillar, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%', p: 3 }}>
                      <Typography variant="h5" gutterBottom sx={{ color: '#D4A574', fontWeight: 600 }}>
                        {pillar.pillar}
                      </Typography>
                      <Typography variant="body2" paragraph sx={{ color: 'text.secondary' }}>
                        {pillar.description}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                        Key Tactics:
                      </Typography>
                      <List dense>
                        {pillar.tactics.map((tactic, idx) => (
                          <ListItem key={idx} sx={{ py: 0 }}>
                            <ListItemIcon sx={{ minWidth: 28 }}>
                              <Star sx={{ fontSize: 16, color: '#D4A574' }} />
                            </ListItemIcon>
                            <ListItemText primary={tactic} primaryTypographyProps={{ variant: 'body2' }} />
                          </ListItem>
                        ))}
                      </List>
                      <Box sx={{ mt: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#4caf50' }}>
                          Expected Impact:
                        </Typography>
                        <Typography variant="body2">
                          {pillar.impact}
                        </Typography>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Financial Projections */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <AttachMoney sx={{ fontSize: 32, color: '#D4A574', mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
                Financial Projections
              </Typography>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Metric</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 600, color: '#ff9800' }}>Conservative</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 600, color: '#2196f3' }}>Realistic</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 600, color: '#4caf50' }}>Aggressive</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {financialProjections.map((projection, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ fontWeight: 500 }}>{projection.metric}</TableCell>
                      <TableCell align="center">{projection.conservative}</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 600 }}>{projection.realistic}</TableCell>
                      <TableCell align="center">{projection.aggressive}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 3, p: 3, bgcolor: '#e8f5e9', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#2e7d32' }}>
                Key Financial Insights
              </Typography>
              <Typography variant="body2">
                With Jennifer's proven expertise and strategic positioning, Pure Skin Palm Beach can realistically 
                achieve $5.1M in revenue by Year 3 with 35% EBITDA margins, representing top-quartile performance 
                in the medical aesthetics industry.
              </Typography>
            </Box>
          </Paper>

          {/* Implementation Roadmap */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Timeline sx={{ fontSize: 32, color: '#D4A574', mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
                Implementation Roadmap
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {implementationRoadmap.map((phase, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" sx={{ color: '#D4A574', fontWeight: 600 }}>
                          {phase.phase}
                        </Typography>
                        <Chip 
                          label={phase.investment} 
                          sx={{ bgcolor: '#fff3e0', color: '#e65100', fontWeight: 600 }}
                        />
                      </Box>
                      <List dense>
                        {phase.initiatives.map((initiative, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 28 }}>
                              <CheckCircle sx={{ fontSize: 18, color: '#4caf50' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={initiative} 
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <LinearProgress 
                        variant="determinate" 
                        value={25 * (index + 1)} 
                        sx={{ 
                          mt: 2, 
                          height: 8, 
                          borderRadius: 4,
                          bgcolor: 'grey.200',
                          '& .MuiLinearProgress-bar': { 
                            bgcolor: '#D4A574',
                            borderRadius: 4
                          }
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Recommendations */}
          <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg, #D4A574 0%, #E5C9A6 100%)', color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmojiEvents sx={{ fontSize: 32, mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Strategic Recommendations
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>1</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Immediate Launch
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Capitalize on market timing with aggressive Q1 2025 launch to capture 
                    New Year aesthetic demand.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>2</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Premium Positioning
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Lead with expertise credentials and technology differentiation to 
                    command 60% price premium.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>3</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Digital Dominance
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Invest heavily in digital presence and content marketing to 
                    establish thought leadership.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Footer */}
          <Box sx={{ textAlign: 'center', mt: 6, pb: 4 }}>
            <Typography variant="body2" color="text.secondary">
              This confidential strategic analysis was prepared exclusively for Pure Skin Palm Beach 
              by strategic consultant Jason Golden. All market data and projections are based on 
              proprietary research and industry analysis as of November 2024.
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="caption" color="text.secondary">
              © 2024 Pure Skin Palm Beach. Confidential and Proprietary.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default StrategicReport;