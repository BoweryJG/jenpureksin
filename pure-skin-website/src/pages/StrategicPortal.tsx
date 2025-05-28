import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  InputAdornment,
  IconButton,
  Chip,
  useTheme
} from '@mui/material';
import {
  Lock,
  Visibility,
  VisibilityOff,
  Business,
  Analytics,
  TrendingUp
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import StrategicReport from '../components/StrategicReport';

const StrategicPortal: React.FC = () => {
  const theme = useTheme();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  
  // Password is "golden" (Jason's last name)
  const correctPassword = 'golden';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Hint: It\'s Jason\'s last name.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <StrategicReport />;
  }

  return (
    <>
      <Helmet>
        <title>Strategic Portal | Pure Skin Palm Beach | Executive Access</title>
        <meta 
          name="description" 
          content="Executive strategic portal for Pure Skin Palm Beach leadership. Secure access to proprietary market analysis and strategic insights." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4
        }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              sx={{
                p: 6,
                borderRadius: 3,
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                background: 'white'
              }}
            >
              {/* Header */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: '#D4A574',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <Business sx={{ fontSize: 40 }} />
                </Box>
                
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>
                  Executive Strategic Portal
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  Welcome, Jennifer. Access your confidential strategic analysis.
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Chip 
                    icon={<Analytics />}
                    label="McKinsey-Style Analysis" 
                    size="small" 
                    sx={{ bgcolor: '#e3f2fd', color: '#1976d2' }}
                  />
                  <Chip 
                    icon={<TrendingUp />}
                    label="Market Intelligence" 
                    size="small" 
                    sx={{ bgcolor: '#fce4ec', color: '#c2185b' }}
                  />
                </Box>
              </Box>

              {/* Login Form */}
              <form onSubmit={handleLogin}>
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  label="Access Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  variant="outlined"
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <Alert severity="info" sx={{ mb: 3 }}>
                        {error}
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    bgcolor: '#D4A574',
                    '&:hover': { bgcolor: '#C19660' },
                    fontWeight: 600
                  }}
                >
                  Access Strategic Report
                </Button>

                <Typography 
                  variant="caption" 
                  display="block" 
                  textAlign="center" 
                  sx={{ mt: 3, color: 'text.secondary' }}
                >
                  This portal contains proprietary strategic intelligence 
                  prepared exclusively for Pure Skin Palm Beach leadership.
                </Typography>
              </form>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default StrategicPortal;