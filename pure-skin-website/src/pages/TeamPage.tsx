import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Pure Skin Palm Beach Medical Spa</title>
        <meta name="description" content="Meet the expert team at Pure Skin Palm Beach, led by Jennifer Gowdy with decades of experience in medical aesthetics." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>Our Team</Typography>
        <Typography variant="body1">Team page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default TeamPage;