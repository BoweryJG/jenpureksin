import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const BookingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Book Appointment | Pure Skin Palm Beach</title>
        <meta name="description" content="Book your consultation at Pure Skin Palm Beach. Complimentary consultations available for new clients." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>Book Appointment</Typography>
        <Typography variant="body1">Booking page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default BookingPage;