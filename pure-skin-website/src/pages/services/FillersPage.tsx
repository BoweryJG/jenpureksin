import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const FillersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dermal Fillers West Palm Beach | Expert Injections | Pure Skin</title>
        <meta name="description" content="Premium dermal filler treatments in West Palm Beach. Natural facial rejuvenation and volume restoration at Pure Skin Palm Beach." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>Dermal Fillers</Typography>
        <Typography variant="body1">Fillers page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default FillersPage;