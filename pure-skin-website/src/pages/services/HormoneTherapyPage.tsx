import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const HormoneTherapyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Hormone Therapy West Palm Beach | BHRT | Pure Skin Palm Beach</title>
        <meta name="description" content="Bioidentical hormone replacement therapy in West Palm Beach. Restore balance and vitality with personalized hormone treatments." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>Hormone Therapy</Typography>
        <Typography variant="body1">Hormone Therapy page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default HormoneTherapyPage;