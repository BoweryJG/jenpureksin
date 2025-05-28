import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const BotoxPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Botox West Palm Beach | Expert Injections | Pure Skin Palm Beach</title>
        <meta name="description" content="Expert Botox and neurotoxin treatments in West Palm Beach. Natural results with precise injection techniques at Pure Skin." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>Botox & Neurotoxins</Typography>
        <Typography variant="body1">Botox page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default BotoxPage;