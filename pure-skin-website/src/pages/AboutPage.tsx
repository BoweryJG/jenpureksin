import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Pure Skin Palm Beach | Jennifer Gowdy</title>
        <meta name="description" content="Learn about Pure Skin Palm Beach and founder Jennifer Gowdy's expertise from CoolSculpting and Merz Aesthetics." />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h1" component="h1" gutterBottom>About Us</Typography>
        <Typography variant="body1">About page content coming soon...</Typography>
      </Container>
    </>
  );
};

export default AboutPage;