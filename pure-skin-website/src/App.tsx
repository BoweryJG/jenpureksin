import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

// Service detail pages
import UltherapyPage from './pages/services/UltherapyPage';
import CoolSculptingPage from './pages/services/CoolSculptingPage';
import BotoxPage from './pages/services/BotoxPage';
import FillersPage from './pages/services/FillersPage';
import MicroneedlingPage from './pages/services/MicroneedlingPage';
import HormoneTherapyPage from './pages/services/HormoneTherapyPage';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/ultherapy" element={<UltherapyPage />} />
              <Route path="/services/coolsculpting" element={<CoolSculptingPage />} />
              <Route path="/services/botox" element={<BotoxPage />} />
              <Route path="/services/fillers" element={<FillersPage />} />
              <Route path="/services/microneedling" element={<MicroneedlingPage />} />
              <Route path="/services/hormone-therapy" element={<HormoneTherapyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book" element={<BookingPage />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
