import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const UltherapyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ultherapy West Palm Beach | Non-Surgical Lifting | Pure Skin</title>
        <meta name="description" content="FDA-approved Ultherapy treatments in West Palm Beach. Non-surgical skin lifting and tightening by experts trained at Merz Aesthetics." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>Ultherapy</Typography>
        <Typography variant="body1">Ultherapy page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default UltherapyPage;