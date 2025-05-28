import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Container,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Phone,
  CalendarMonth,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children as React.ReactElement}
    </Slide>
  );
}

const Header: React.FC<Props> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const services = [
    { name: 'All Services', path: '/services' },
    { name: 'Ultherapy', path: '/services/ultherapy' },
    { name: 'CoolSculpting', path: '/services/coolsculpting' },
    { name: 'Botox & Neurotoxins', path: '/services/botox' },
    { name: 'Dermal Fillers', path: '/services/fillers' },
    { name: 'Microneedling', path: '/services/microneedling' },
    { name: 'Hormone Therapy', path: '/services/hormone-therapy' },
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasMenu: true },
    { name: 'About', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontFamily: '"Playfair Display", serif',
          color: theme.palette.primary.main,
        }}
      >
        Pure Skin Palm Beach
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => navigate(item.path)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: 'center',
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
            onClick={() => navigate('/book')}
          >
            <ListItemText primary="Book Now" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                Pure Skin Palm Beach
              </Typography>

              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: theme.palette.primary.main }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  {navItems.map((item) => (
                    <React.Fragment key={item.name}>
                      {item.hasMenu ? (
                        <>
                          <Button
                            color="inherit"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 500,
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                            endIcon={<KeyboardArrowDown />}
                            onClick={handleServicesClick}
                          >
                            {item.name}
                          </Button>
                          <Menu
                            anchorEl={servicesAnchorEl}
                            open={Boolean(servicesAnchorEl)}
                            onClose={handleServicesClose}
                            PaperProps={{
                              sx: {
                                mt: 1,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                              },
                            }}
                          >
                            {services.map((service) => (
                              <MenuItem
                                key={service.name}
                                onClick={() => {
                                  navigate(service.path);
                                  handleServicesClose();
                                }}
                                sx={{
                                  '&:hover': {
                                    backgroundColor: theme.palette.primary.light,
                                    color: 'white',
                                  },
                                }}
                              >
                                {service.name}
                              </MenuItem>
                            ))}
                          </Menu>
                        </>
                      ) : (
                        <Button
                          color="inherit"
                          component={Link}
                          to={item.path}
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                            '&:hover': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {item.name}
                        </Button>
                      )}
                    </React.Fragment>
                  ))}
                  <Button
                    variant="text"
                    color="primary"
                    startIcon={<Phone />}
                    href="tel:561-123-4567"
                    sx={{ ml: 1 }}
                  >
                    (561) 123-4567
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CalendarMonth />}
                    component={Link}
                    to="/book"
                    sx={{ ml: 1 }}
                  >
                    Book Now
                  </Button>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Header;