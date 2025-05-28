import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const CoolSculptingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CoolSculpting West Palm Beach | Body Contouring Expert | Pure Skin</title>
        <meta name="description" content="CoolSculpting Elite treatments by former CoolSculpting specialist Jennifer Gowdy. Non-surgical fat reduction in West Palm Beach." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>CoolSculpting Elite</Typography>
        <Typography variant="body1">CoolSculpting page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default CoolSculptingPage;