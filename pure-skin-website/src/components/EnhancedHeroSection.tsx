import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Environment } from '@react-three/drei';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  Chip,
} from '@mui/material';
import { CalendarMonth, AutoAwesome, Science } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// 3D Floating Elements Component
const FloatingElements: React.FC = () => {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#D4A574" transparent opacity={0.6} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-2, 1, -1]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#2C3E50" transparent opacity={0.4} />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={2.5}>
        <mesh position={[0, -1, 1]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#E5C9A6" transparent opacity={0.5} />
        </mesh>
      </Float>
    </>
  );
};

// Animated Counter Component
const AnimatedCounter: React.FC<{ value: number; suffix: string; label: string }> = ({
  value,
  suffix,
  label,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
      >
        <Typography
          variant="h3"
          sx={{ 
            color: 'primary.main', 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {value}{suffix}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </motion.div>
    </motion.div>
  );
};

// Particle Animation Component
const ParticleField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = Array.from({ length: 50 }, (_, i) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #D4A574, #E5C9A6);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0;
        animation: float-${i % 3} ${3 + Math.random() * 4}s infinite ease-in-out;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 2}s;
      `;
      return particle;
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-0 {
        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
        50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
      }
      @keyframes float-1 {
        0%, 100% { transform: translateX(0px) scale(1); opacity: 0.2; }
        50% { transform: translateX(15px) scale(1.1); opacity: 0.6; }
      }
      @keyframes float-2 {
        0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.4; }
        50% { transform: translateY(-15px) translateX(-10px) scale(1.3); opacity: 0.9; }
      }
    `;
    document.head.appendChild(style);

    particles.forEach(particle => containerRef.current?.appendChild(particle));

    return () => {
      particles.forEach(particle => particle.remove());
      style.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

const EnhancedHeroSection: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Particle Background */}
      <ParticleField />

      {/* 3D Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          opacity: 0.3,
          zIndex: 1,
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingElements />
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </Box>

      <motion.div style={{ y, opacity }} className="hero-content">
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ mb: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Chip
                      icon={<AutoAwesome />}
                      label="Former CoolSculpting & Merz Expert"
                      sx={{
                        background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
                        color: 'white',
                        fontWeight: 600,
                        mb: 3,
                      }}
                    />
                  </motion.div>
                </Box>

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 3,
                    background: 'linear-gradient(45deg, #2C3E50, #34495E)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    The Future of
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                      background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Beauty Technology
                  </motion.span>
                </Typography>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    Where <strong>advanced AI technology</strong> meets{' '}
                    <strong>decades of industry expertise</strong>. 
                    Experience personalized transformations that go beyond traditional aesthetics.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<CalendarMonth />}
                      component={Link}
                      to="/book"
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                        background: 'linear-gradient(45deg, #D4A574, #E5C9A6)',
                        boxShadow: '0 8px 32px rgba(212, 165, 116, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #B08968, #D4A574)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 40px rgba(212, 165, 116, 0.4)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Start Your Transformation
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Science />}
                      component={Link}
                      to="/technology"
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          background: 'rgba(212, 165, 116, 0.1)',
                          borderColor: 'primary.dark',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Explore Technology
                    </Button>
                  </Box>
                </motion.div>

                {/* Animated Statistics */}
                <Box sx={{ display: 'flex', gap: 6, mt: 4 }}>
                  <AnimatedCounter value={5} suffix=".0" label="Star Rating" />
                  <AnimatedCounter value={500} suffix="+" label="Transformations" />
                  <AnimatedCounter value={15} suffix="+" label="Years Expertise" />
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                style={{ perspective: '1000px' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    transform: 'rotateY(5deg) rotateX(5deg)',
                    transformStyle: 'preserve-3d',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(212, 165, 116, 0.1), rgba(44, 62, 80, 0.1))',
                      zIndex: 1,
                    },
                  }}
                >
                  <img
                    src="/header.png"
                    alt="Advanced Medical Spa Technology"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                  
                  {/* Floating UI Elements */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '15px',
                        p: 2,
                        minWidth: '120px',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6" color="primary">AI Analysis</Typography>
                      <Typography variant="body2">Active</Typography>
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        background: 'rgba(212, 165, 116, 0.9)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '15px',
                        p: 2,
                        color: 'white',
                        minWidth: '140px',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6">Expert Level</Typography>
                      <Typography variant="body2">Certified</Typography>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
};

export default EnhancedHeroSection;