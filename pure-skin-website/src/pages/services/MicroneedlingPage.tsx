import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const MicroneedlingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Microneedling with PRP West Palm Beach | Pure Skin Palm Beach</title>
        <meta name="description" content="Advanced microneedling with PRP treatments in West Palm Beach. Stimulate collagen and rejuvenate your skin at Pure Skin." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>Microneedling with PRP</Typography>
        <Typography variant="body1">Microneedling page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default MicroneedlingPage;