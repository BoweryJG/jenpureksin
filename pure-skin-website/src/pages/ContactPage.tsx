import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  alpha,
  Stack
} from '@mui/material';
import { 
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
  DirectionsCar as ParkingIcon,
  Send as SendIcon,
  AccessTime as ClockIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon
} from '@mui/icons-material';

interface OpenHours {
  day: string;
  hours: string;
}

const businessHours: OpenHours[] = [
  { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
];

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Contact Pure Skin Palm Beach | West Palm Beach Medical Spa</title>
        <meta name="description" content="Contact Pure Skin Palm Beach for consultations and appointments. Located at 2810 S Dixie Hwy, West Palm Beach, FL. Call (561) 899-7878." />
      </Helmet>
      
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700 }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}
          >
            We're here to help you achieve your aesthetic goals. 
            Schedule a consultation today!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Get in Touch
              </Typography>
              
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  backgroundColor: alpha(theme.palette.primary.main, 0.02),
                  borderRadius: 3,
                  mb: 3
                }}
              >
                <List>
                  <ListItem sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <LocationIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                          Location
                        </Typography>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body1">
                            2810 S Dixie Highway, Suite 101
                          </Typography>
                          <Typography variant="body1">
                            West Palm Beach, FL 33405
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>

                  <Divider sx={{ my: 2 }} />

                  <ListItem sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <PhoneIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                          Phone
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body1">
                          (561) 899-7878
                        </Typography>
                      }
                    />
                  </ListItem>

                  <Divider sx={{ my: 2 }} />

                  <ListItem sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <EmailIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                          Email
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body1">
                          info@pureskinpalmbeach.com
                        </Typography>
                      }
                    />
                  </ListItem>

                  <Divider sx={{ my: 2 }} />

                  <ListItem>
                    <ListItemIcon>
                      <ParkingIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                          Parking
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body1">
                          Free parking available in our private lot
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>

              {/* Business Hours */}
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  backgroundColor: alpha(theme.palette.primary.main, 0.02),
                  borderRadius: 3
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <ScheduleIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Business Hours
                  </Typography>
                </Box>
                
                {businessHours.map((schedule, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      py: 1.5,
                      borderBottom: index < businessHours.length - 1 ? `1px solid ${alpha(theme.palette.divider, 0.1)}` : 'none'
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {schedule.day}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color={schedule.hours === 'Closed' ? 'text.secondary' : 'text.primary'}
                    >
                      {schedule.hours}
                    </Typography>
                  </Box>
                ))}
                
                <Box sx={{ mt: 3, p: 2, backgroundColor: alpha(theme.palette.info.main, 0.1), borderRadius: 2 }}>
                  <Typography variant="body2" color="info.main" sx={{ fontWeight: 500 }}>
                    <ClockIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                    After-hours appointments available by request
                  </Typography>
                </Box>
              </Paper>

              {/* Social Media */}
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button 
                    variant="outlined" 
                    startIcon={<InstagramIcon />}
                    href="https://instagram.com/pureskinpalmbeach"
                    target="_blank"
                  >
                    Instagram
                  </Button>
                  <Button 
                    variant="outlined" 
                    startIcon={<FacebookIcon />}
                    href="https://facebook.com/pureskinpalmbeach"
                    target="_blank"
                  >
                    Facebook
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Schedule a Consultation
            </Typography>
            
            <Paper 
              elevation={0}
              sx={{ 
                p: 4, 
                backgroundColor: alpha(theme.palette.primary.main, 0.02),
                borderRadius: 3
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Service of Interest"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      variant="outlined"
                      select
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="ultherapy">Ultherapy</option>
                      <option value="coolsculpting">CoolSculpting</option>
                      <option value="botox">Botox & Fillers</option>
                      <option value="laser">Laser Treatments</option>
                      <option value="facial">Facials</option>
                      <option value="consultation">General Consultation</option>
                    </TextField>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Tell us about your aesthetic goals..."
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{ py: 1.5 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
              
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  We'll respond within 24 hours to schedule your consultation
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}>
            Find Us
          </Typography>
          <Paper 
            elevation={0}
            sx={{ 
              borderRadius: 3,
              overflow: 'hidden',
              height: 400
            }}
          >
            <iframe
              title="Pure Skin Palm Beach Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.8981629370596!2d-80.06146668495711!3d26.68418828321629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d71d1e7f1f5f%3A0x1234567890abcdef!2s2810%20S%20Dixie%20Hwy%2C%20West%20Palm%20Beach%2C%20FL%2033405!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Paper>
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button 
              variant="outlined" 
              startIcon={<LocationIcon />}
              href="https://maps.google.com/?q=2810+S+Dixie+Highway+West+Palm+Beach+FL+33405"
              target="_blank"
              size="large"
            >
              Get Directions
            </Button>
          </Box>
        </Box>

        {/* Additional Info */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: alpha(theme.palette.primary.main, 0.02),
                  borderRadius: 3,
                  height: '100%'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Consultation Policy
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  All new clients receive a complimentary 30-minute consultation to discuss 
                  treatment options and create a personalized plan.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: alpha(theme.palette.primary.main, 0.02),
                  borderRadius: 3,
                  height: '100%'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Cancellation Policy
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We require 24 hours notice for cancellations. Late cancellations 
                  may be subject to a fee.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: alpha(theme.palette.primary.main, 0.02),
                  borderRadius: 3,
                  height: '100%'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Payment Options
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We accept all major credit cards, HSA/FSA, and offer financing 
                  through CareCredit and Cherry.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ContactPage;