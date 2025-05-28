import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Pure Skin Palm Beach | West Palm Beach Medical Spa</title>
        <meta name="description" content="Contact Pure Skin Palm Beach for consultations and appointments. Located at 2810 S Dixie Hwy, West Palm Beach, FL." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>Contact Us</Typography>
        <Typography variant="body1">Contact page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default ContactPage;