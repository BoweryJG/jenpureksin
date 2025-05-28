import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Alert,
  LinearProgress
} from '@mui/material';
import {
  CameraAlt,
  ViewInAr,
  Face,
  ThreeDRotation,
  AutoFixHigh,
  Visibility,
  Compare,
  Download,
  Share,
  Settings,
  PlayArrow,
  Pause,
  RotateLeft,
  RotateRight,
  ZoomIn,
  ZoomOut
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface TreatmentSimulation {
  id: string;
  name: string;
  targetArea: string;
  duration: string;
  expectedResults: string;
  beforeModel: string;
  afterModel: string;
  progressFrames: string[];
}

const treatmentSimulations: TreatmentSimulation[] = [
  {
    id: 'coolsculpting-abdomen',
    name: 'CoolSculpting - Abdomen',
    targetArea: 'Abdomen',
    duration: '35-60 minutes',
    expectedResults: '20-25% fat reduction',
    beforeModel: '/models/before-abdomen.glb',
    afterModel: '/models/after-abdomen.glb',
    progressFrames: ['/models/progress1.glb', '/models/progress2.glb', '/models/progress3.glb']
  },
  {
    id: 'ulthera-face',
    name: 'Ulthera - Face Lift',
    targetArea: 'Face & Neck',
    duration: '60-90 minutes',
    expectedResults: 'Visible lifting & tightening',
    beforeModel: '/models/before-face.glb',
    afterModel: '/models/after-face.glb',
    progressFrames: ['/models/face-progress1.glb', '/models/face-progress2.glb']
  }
];

const FaceModel: React.FC<{ 
  morphTarget: number;
  treatmentArea: string;
  showHeatMap: boolean;
}> = ({ morphTarget, treatmentArea, showHeatMap }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color={showHeatMap ? "#ff6b6b" : "#fdbcb4"}
        wireframe={showHeatMap}
        transparent
        opacity={showHeatMap ? 0.8 : 1}
      />
      
      {/* Treatment area highlight */}
      {treatmentArea === 'jawline' && (
        <mesh position={[0, -0.5, 1.2]}>
          <boxGeometry args={[2, 0.3, 0.2]} />
          <meshStandardMaterial 
            color="#D4A574" 
            transparent 
            opacity={0.6}
          />
        </mesh>
      )}
      
      {treatmentArea === 'cheeks' && (
        <>
          <mesh position={[-0.8, 0.2, 1]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial 
              color="#D4A574" 
              transparent 
              opacity={0.6}
            />
          </mesh>
          <mesh position={[0.8, 0.2, 1]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial 
              color="#D4A574" 
              transparent 
              opacity={0.6}
            />
          </mesh>
        </>
      )}
    </mesh>
  );
};

const BodyModel: React.FC<{ 
  morphTarget: number;
  treatmentArea: string;
  showHeatMap: boolean;
}> = ({ morphTarget, treatmentArea, showHeatMap }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  const getAreaColor = (area: string) => {
    switch (area) {
      case 'abdomen': return "#ff9999";
      case 'flanks': return "#99ff99";
      case 'thighs': return "#9999ff";
      default: return "#fdbcb4";
    }
  };

  return (
    <group>
      {/* Torso */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2 - (morphTarget * 0.3), 1.5 - (morphTarget * 0.2), 3]} />
        <meshStandardMaterial
          color={treatmentArea === 'abdomen' && showHeatMap ? getAreaColor('abdomen') : "#fdbcb4"}
          wireframe={showHeatMap && treatmentArea === 'abdomen'}
          transparent
          opacity={showHeatMap ? 0.8 : 1}
        />
      </mesh>
      
      {/* Treatment area highlights */}
      {treatmentArea === 'abdomen' && (
        <mesh position={[0, 0, 1.3]}>
          <cylinderGeometry args={[0.8, 1.0, 1.5]} />
          <meshStandardMaterial 
            color="#D4A574" 
            transparent 
            opacity={0.4}
          />
        </mesh>
      )}
      
      {treatmentArea === 'flanks' && (
        <>
          <mesh position={[-1.5, 0, 0]}>
            <boxGeometry args={[0.4, 2, 0.8]} />
            <meshStandardMaterial 
              color="#D4A574" 
              transparent 
              opacity={0.4}
            />
          </mesh>
          <mesh position={[1.5, 0, 0]}>
            <boxGeometry args={[0.4, 2, 0.8]} />
            <meshStandardMaterial 
              color="#D4A574" 
              transparent 
              opacity={0.4}
            />
          </mesh>
        </>
      )}
    </group>
  );
};

const ARViewer: React.FC<{
  simulation: TreatmentSimulation;
  progress: number;
  treatmentArea: string;
  showHeatMap: boolean;
}> = ({ simulation, progress, treatmentArea, showHeatMap }) => {
  const isFaceTreatment = simulation.id.includes('face') || simulation.id.includes('ulthera');
  
  return (
    <Canvas style={{ height: 400, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls 
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
      
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <Environment preset="studio" />
      
      {isFaceTreatment ? (
        <FaceModel 
          morphTarget={progress / 100} 
          treatmentArea={treatmentArea}
          showHeatMap={showHeatMap}
        />
      ) : (
        <BodyModel 
          morphTarget={progress / 100}
          treatmentArea={treatmentArea}
          showHeatMap={showHeatMap}
        />
      )}
    </Canvas>
  );
};

const ARConsultation: React.FC = () => {
  const [isAROpen, setIsAROpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentSimulation>(treatmentSimulations[0]);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHeatMap, setShowHeatMap] = useState(false);
  const [treatmentArea, setTreatmentArea] = useState('abdomen');
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'pending'>('pending');
  const [arMode, setArMode] = useState<'simulation' | 'live' | 'comparison'>('simulation');
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setSimulationProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const handleStartAR = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraPermission('granted');
      setIsAROpen(true);
      stream.getTracks().forEach(track => track.stop()); // Stop preview stream
    } catch (error) {
      setCameraPermission('denied');
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setSimulationProgress(0);
  };

  const TreatmentCard: React.FC<{ treatment: TreatmentSimulation }> = ({ treatment }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card 
        sx={{ 
          cursor: 'pointer',
          border: selectedTreatment.id === treatment.id ? 2 : 1,
          borderColor: selectedTreatment.id === treatment.id ? '#D4A574' : 'divider'
        }}
        onClick={() => setSelectedTreatment(treatment)}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {treatment.name}
          </Typography>
          <Chip 
            label={treatment.targetArea} 
            size="small" 
            sx={{ mb: 1, bgcolor: '#D4A574', color: 'white' }}
          />
          <Typography variant="body2" color="text.secondary">
            Duration: {treatment.duration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Expected: {treatment.expectedResults}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            AR Treatment Consultation
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Visualize Your Transformation with Advanced AR Technology
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Experience your potential results before committing to treatment
          </Typography>
        </Box>

        {/* Treatment Selection */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Select Treatment Type
          </Typography>
          <Grid container spacing={3}>
            {treatmentSimulations.map((treatment) => (
              <Grid item xs={12} md={6} key={treatment.id}>
                <TreatmentCard treatment={treatment} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* AR Viewer */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    3D Treatment Simulation
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip 
                      label="Simulation Mode" 
                      color={arMode === 'simulation' ? 'primary' : 'default'}
                      onClick={() => setArMode('simulation')}
                    />
                    <Chip 
                      label="Live AR" 
                      color={arMode === 'live' ? 'primary' : 'default'}
                      onClick={() => setArMode('live')}
                      disabled={cameraPermission !== 'granted'}
                    />
                    <Chip 
                      label="Comparison" 
                      color={arMode === 'comparison' ? 'primary' : 'default'}
                      onClick={() => setArMode('comparison')}
                    />
                  </Box>
                </Box>

                <ARViewer 
                  simulation={selectedTreatment}
                  progress={simulationProgress}
                  treatmentArea={treatmentArea}
                  showHeatMap={showHeatMap}
                />

                {/* Controls */}
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={isPlaying ? <Pause /> : <PlayArrow />}
                    onClick={handlePlayPause}
                    sx={{ bgcolor: '#D4A574', '&:hover': { bgcolor: '#C19660' } }}
                  >
                    {isPlaying ? 'Pause' : 'Play'} Simulation
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<RotateLeft />}
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                  <Box sx={{ flex: 1, mx: 2 }}>
                    <Typography variant="body2" gutterBottom>
                      Treatment Progress: {simulationProgress}%
                    </Typography>
                    <Slider
                      value={simulationProgress}
                      onChange={(_, value) => setSimulationProgress(value as number)}
                      max={100}
                      sx={{
                        color: '#D4A574',
                        '& .MuiSlider-thumb': {
                          bgcolor: '#D4A574'
                        }
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Typography variant="h6" gutterBottom>
                  Simulation Controls
                </Typography>

                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Treatment Area</InputLabel>
                  <Select
                    value={treatmentArea}
                    onChange={(e) => setTreatmentArea(e.target.value)}
                    label="Treatment Area"
                  >
                    <MenuItem value="abdomen">Abdomen</MenuItem>
                    <MenuItem value="flanks">Love Handles</MenuItem>
                    <MenuItem value="thighs">Thighs</MenuItem>
                    <MenuItem value="jawline">Jawline</MenuItem>
                    <MenuItem value="cheeks">Cheeks</MenuItem>
                  </Select>
                </FormControl>

                <FormControlLabel
                  control={
                    <Switch
                      checked={showHeatMap}
                      onChange={(e) => setShowHeatMap(e.target.checked)}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#D4A574',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#D4A574',
                        },
                      }}
                    />
                  }
                  label="Show Treatment Heat Map"
                  sx={{ mb: 2 }}
                />

                <Typography variant="subtitle2" gutterBottom>
                  Current Treatment: {selectedTreatment.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Target Area: {selectedTreatment.targetArea}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Duration: {selectedTreatment.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Expected Results: {selectedTreatment.expectedResults}
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Jen's Expert Analysis:
                  </Typography>
                  <Alert severity="info" sx={{ mb: 2 }}>
                    Based on your selected treatment area and current simulation, you can expect to see initial results within 4-6 weeks, with optimal results at 2-3 months.
                  </Alert>
                </Box>

                {cameraPermission === 'pending' && (
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<CameraAlt />}
                    onClick={handleStartAR}
                    sx={{ 
                      mt: 2,
                      bgcolor: '#D4A574', 
                      '&:hover': { bgcolor: '#C19660' }
                    }}
                  >
                    Enable Live AR View
                  </Button>
                )}

                {cameraPermission === 'denied' && (
                  <Alert severity="warning" sx={{ mt: 2 }}>
                    Camera access required for live AR features. Please enable camera permissions and refresh.
                  </Alert>
                )}

                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Download />}
                    fullWidth
                  >
                    Download Results
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Share />}
                    fullWidth
                  >
                    Share
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Features List */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  AR Consultation Features
                </Typography>
                <List>
                  {[
                    { icon: <ViewInAr />, text: 'Real-time 3D treatment visualization' },
                    { icon: <Face />, text: 'Personalized facial/body mapping' },
                    { icon: <AutoFixHigh />, text: 'Before & after comparison' },
                    { icon: <ThreeDRotation />, text: '360° treatment preview' }
                  ].map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{ color: '#D4A574' }}>
                        {feature.icon}
                      </ListItemIcon>
                      <ListItemText primary={feature.text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Next Steps
                </Typography>
                <List>
                  {[
                    { icon: <CameraAlt />, text: 'Book your in-person consultation' },
                    { icon: <Compare />, text: 'Receive personalized treatment plan' },
                    { icon: <Settings />, text: 'Schedule your first session' },
                    { icon: <Visibility />, text: 'Track your real progress' }
                  ].map((step, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{ color: '#D4A574' }}>
                        {step.icon}
                      </ListItemIcon>
                      <ListItemText primary={step.text} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ 
                    mt: 2,
                    bgcolor: '#D4A574', 
                    '&:hover': { bgcolor: '#C19660' }
                  }}
                >
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ARConsultation;