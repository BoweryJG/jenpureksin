import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  Avatar,
  Button,
  Tab,
  Tabs,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  CalendarToday,
  TrendingUp,
  PhotoCamera,
  Star,
  Schedule,
  Notifications,
  Download,
  Share,
  Timeline,
  Assessment,
  Face,
  Spa
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';

interface TreatmentProgress {
  id: string;
  name: string;
  date: string;
  progress: number;
  nextSession: string;
  beforePhoto: string;
  afterPhoto: string;
  provider: string;
  notes: string[];
}

interface ClientData {
  name: string;
  memberSince: string;
  totalTreatments: number;
  upcomingAppointments: number;
  loyaltyPoints: number;
  currentPrograms: TreatmentProgress[];
}

const mockClientData: ClientData = {
  name: "Sarah Mitchell",
  memberSince: "2023-06-15",
  totalTreatments: 12,
  upcomingAppointments: 2,
  loyaltyPoints: 2450,
  currentPrograms: [
    {
      id: "1",
      name: "CoolSculpting Elite Package",
      date: "2024-01-15",
      progress: 75,
      nextSession: "2024-02-20",
      beforePhoto: "/api/placeholder/300/400",
      afterPhoto: "/api/placeholder/300/400",
      provider: "Jen Waits",
      notes: [
        "Excellent response to treatment",
        "2cm reduction achieved",
        "Continue current protocol"
      ]
    },
    {
      id: "2", 
      name: "Ulthera Lift & Tighten",
      date: "2024-02-01",
      progress: 60,
      nextSession: "2024-03-01",
      beforePhoto: "/api/placeholder/300/400",
      afterPhoto: "/api/placeholder/300/400",
      provider: "Jen Waits",
      notes: [
        "Collagen production progressing well",
        "Visible lift in brow area",
        "Patient very satisfied"
      ]
    }
  ]
};

const ProgressVisualization3D: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <Canvas style={{ height: 200 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Center>
        <mesh>
          <cylinderGeometry args={[1, 1, 0.2]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.9, 0.9, 0.25]} />
          <meshStandardMaterial color="#D4A574" />
        </mesh>
        <Text3D 
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.3}
          height={0.1}
          position={[-0.5, 0, 0.2]}
        >
          {`${progress}%`}
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </Center>
    </Canvas>
  );
};

const TreatmentCard: React.FC<{ treatment: TreatmentProgress }> = ({ treatment }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [photoView, setPhotoView] = useState<'before' | 'after'>('before');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ mb: 3, overflow: 'visible' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'relative' }}>
                <img
                  src={photoView === 'before' ? treatment.beforePhoto : treatment.afterPhoto}
                  alt={`${photoView} treatment`}
                  style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 8,
                    cursor: 'pointer'
                  }}
                  onClick={() => setPhotoView(photoView === 'before' ? 'after' : 'before')}
                />
                <Chip
                  label={photoView === 'before' ? 'Before' : 'After'}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    bgcolor: 'rgba(0,0,0,0.7)',
                    color: 'white'
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: 'rgba(255,255,255,0.9)'
                  }}
                  size="small"
                >
                  <PhotoCamera />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h6" gutterBottom>
                {treatment.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Provider: {treatment.provider}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Started: {new Date(treatment.date).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Next Session: {new Date(treatment.nextSession).toLocaleDateString()}
              </Typography>
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" gutterBottom>
                  Progress: {treatment.progress}%
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={treatment.progress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'grey.200',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#D4A574'
                    }
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <ProgressVisualization3D progress={treatment.progress} />
              <Button
                variant="outlined"
                size="small"
                onClick={() => setShowDetails(true)}
                sx={{ mt: 1, width: '100%' }}
              >
                View Details
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Dialog open={showDetails} onClose={() => setShowDetails(false)} maxWidth="md" fullWidth>
        <DialogTitle>Treatment Progress Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Before & After</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img
                    src={treatment.beforePhoto}
                    alt="Before treatment"
                    style={{ width: '100%', borderRadius: 8 }}
                  />
                  <Typography variant="caption" display="block" textAlign="center" mt={1}>
                    Before
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <img
                    src={treatment.afterPhoto}
                    alt="After treatment"
                    style={{ width: '100%', borderRadius: 8 }}
                  />
                  <Typography variant="caption" display="block" textAlign="center" mt={1}>
                    Current Progress
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Provider Notes</Typography>
              <List>
                {treatment.notes.map((note, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Star color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={note} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

const ClientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [clientData] = useState<ClientData>(mockClientData);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: '#D4A574',
                  fontSize: '2rem'
                }}
              >
                {clientData.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                Welcome back, {clientData.name.split(' ')[0]}!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Member since {new Date(clientData.memberSince).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<CalendarToday />}
                sx={{ 
                  bgcolor: '#D4A574',
                  '&:hover': { bgcolor: '#C19660' }
                }}
              >
                Book Treatment
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            { label: 'Total Treatments', value: clientData.totalTreatments, icon: <Spa /> },
            { label: 'Upcoming Appointments', value: clientData.upcomingAppointments, icon: <Schedule /> },
            { label: 'Loyalty Points', value: clientData.loyaltyPoints, icon: <Star /> },
            { label: 'Active Programs', value: clientData.currentPrograms.length, icon: <TrendingUp /> }
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: '#D4A574', mb: 1 }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h4" component="div" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Active Treatments" icon={<Timeline />} />
            <Tab label="Progress Reports" icon={<Assessment />} />
            <Tab label="Appointments" icon={<CalendarToday />} />
            <Tab label="Profile" icon={<Face />} />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="treatments"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="h5" gutterBottom>
                Your Active Treatment Programs
              </Typography>
              {clientData.currentPrograms.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="reports"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="h5" gutterBottom>
                Progress Reports & Analytics
              </Typography>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Treatment Effectiveness Over Time
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography color="text.secondary">
                      Interactive progress charts would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="appointments"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="h5" gutterBottom>
                Upcoming Appointments
              </Typography>
              <Card>
                <CardContent>
                  <Typography variant="body1">
                    Your next appointments and scheduling interface would be displayed here.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === 3 && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="h5" gutterBottom>
                Your Profile & Preferences
              </Typography>
              <Card>
                <CardContent>
                  <Typography variant="body1">
                    Profile management and treatment preferences would be displayed here.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default ClientDashboard;