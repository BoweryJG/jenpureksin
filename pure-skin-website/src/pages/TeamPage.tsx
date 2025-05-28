import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Container, 
  Typography, 
  Grid, 
  CardMedia, 
  Box, 
  Chip,
  Stack,
  Paper,
  Divider,
  useTheme,
  alpha
} from '@mui/material';
import { 
  School as SchoolIcon,
  WorkHistory as ExperienceIcon,
  Star as StarIcon,
  EmojiEvents as AwardIcon
} from '@mui/icons-material';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  education: string[];
  certifications: string[];
  specialties: string[];
  yearsExperience: number;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jennifer Gowdy",
    title: "Founder & Medical Aesthetics Director",
    bio: "With over 20 years of experience in medical aesthetics, Jennifer Gowdy has established herself as a leader in innovative, results-driven treatments. Her passion for helping clients achieve their aesthetic goals through the latest technologies and techniques has made Pure Skin Palm Beach a premier destination for medical spa services.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    education: [
      "Bachelor of Science in Nursing - University of Miami",
      "Advanced Aesthetics Certification - American Academy of Aesthetic Medicine"
    ],
    certifications: [
      "Certified Aesthetic Nurse Specialist (CANS)",
      "Advanced Botox & Dermal Filler Certification",
      "Ultherapy Master Provider",
      "CoolSculpting University Graduate",
      "Laser Safety Officer Certification"
    ],
    specialties: [
      "Non-surgical face lifts",
      "Body contouring",
      "Laser treatments",
      "Injectable aesthetics"
    ],
    yearsExperience: 20
  },
  {
    name: "Dr. Sarah Mitchell",
    title: "Medical Director",
    bio: "Dr. Mitchell brings a wealth of medical expertise and a keen eye for aesthetics to Pure Skin. Board-certified in dermatology, she ensures all treatments meet the highest medical standards while delivering exceptional aesthetic results.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    education: [
      "MD - Johns Hopkins School of Medicine",
      "Dermatology Residency - Mayo Clinic",
      "Fellowship in Cosmetic Dermatology - UCLA"
    ],
    certifications: [
      "Board Certified Dermatologist",
      "American Society for Dermatologic Surgery",
      "American Academy of Dermatology Fellow"
    ],
    specialties: [
      "Medical dermatology",
      "Cosmetic procedures",
      "Skin cancer screening",
      "Anti-aging treatments"
    ],
    yearsExperience: 15
  },
  {
    name: "Maria Rodriguez, RN",
    title: "Lead Aesthetician & Injection Specialist",
    bio: "Maria's artistic approach to facial aesthetics and her gentle technique have made her a client favorite. She specializes in creating natural-looking results through expertly administered injectables and advanced skin treatments.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    education: [
      "BSN - Florida Atlantic University",
      "Advanced Injector Training - Aesthetic Medical Educators Training"
    ],
    certifications: [
      "Registered Nurse (RN)",
      "Certified Injector - Botox & Fillers",
      "Advanced Chemical Peel Certification",
      "Microneedling Specialist"
    ],
    specialties: [
      "Lip augmentation",
      "Facial contouring",
      "Preventative Botox",
      "Chemical peels"
    ],
    yearsExperience: 10
  },
  {
    name: "Emma Chen",
    title: "Laser Specialist & Esthetician",
    bio: "Emma's expertise in laser technology and passion for skincare make her an invaluable member of our team. She customizes each treatment to address individual skin concerns and achieve optimal results.",
    image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    education: [
      "Licensed Esthetician - Palm Beach State College",
      "Laser Technology Certification - National Laser Institute"
    ],
    certifications: [
      "Florida Licensed Esthetician",
      "Certified Laser Technician",
      "HydraFacial Certified Provider",
      "Dermaplaning Specialist"
    ],
    specialties: [
      "Laser hair removal",
      "IPL treatments",
      "Acne treatments",
      "Customized facials"
    ],
    yearsExperience: 7
  }
];

const TeamPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Our Team | Pure Skin Palm Beach Medical Spa</title>
        <meta name="description" content="Meet the expert team at Pure Skin Palm Beach, led by Jennifer Gowdy with decades of experience in medical aesthetics." />
      </Helmet>
      
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700 }}
          >
            Meet Our Expert Team
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: 800, mx: 'auto', mt: 2 }}
          >
            Dedicated professionals committed to helping you achieve your aesthetic goals 
            with the highest standards of care and expertise
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  backgroundColor: alpha(theme.palette.primary.main, 0.02),
                  borderRadius: 3,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={member.name}
                      sx={{ 
                        borderRadius: 2, 
                        height: 400, 
                        objectFit: 'cover',
                        boxShadow: theme.shadows[4]
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Box>
                      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                        {member.name}
                      </Typography>
                      <Typography 
                        variant="h5" 
                        color="primary" 
                        gutterBottom
                        sx={{ fontWeight: 500, mb: 1 }}
                      >
                        {member.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <ExperienceIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body1" color="text.secondary">
                          {member.yearsExperience} Years of Experience
                        </Typography>
                      </Box>
                      <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
                        {member.bio}
                      </Typography>

                      <Divider sx={{ my: 3 }} />

                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Education
                              </Typography>
                            </Box>
                            <Stack spacing={1}>
                              {member.education.map((edu, idx) => (
                                <Typography key={idx} variant="body2" color="text.secondary">
                                  • {edu}
                                </Typography>
                              ))}
                            </Stack>
                          </Box>

                          <Box sx={{ mt: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <StarIcon sx={{ mr: 1, color: 'primary.main' }} />
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Specialties
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {member.specialties.map((specialty, idx) => (
                                <Chip 
                                  key={idx} 
                                  label={specialty} 
                                  size="small"
                                  sx={{ 
                                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                    color: 'primary.main'
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <AwardIcon sx={{ mr: 1, color: 'primary.main' }} />
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Certifications
                              </Typography>
                            </Box>
                            <Stack spacing={1}>
                              {member.certifications.map((cert, idx) => (
                                <Typography key={idx} variant="body2" color="text.secondary">
                                  • {cert}
                                </Typography>
                              ))}
                            </Stack>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Paper
            sx={{
              p: 6,
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
              borderRadius: 3
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Our Commitment to Excellence
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
              At Pure Skin Palm Beach, our team is dedicated to providing the highest quality 
              medical aesthetic treatments in a luxurious, comfortable environment. We continuously 
              invest in advanced training and the latest technologies to ensure our clients receive 
              the best possible results.
            </Typography>
            <Stack direction="row" spacing={4} justifyContent="center" sx={{ mt: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                  50+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Years Combined Experience
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                  15+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Professional Certifications
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                  1000+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Happy Clients
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default TeamPage;