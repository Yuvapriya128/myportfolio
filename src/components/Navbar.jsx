import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

// react-router imports
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
// react-scroll imports
import { Link as ScrollLink, Events as ScrollEvents, scroller } from 'react-scroll';

const navigationItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
];

// styled gradient button
const GradientButton = styled(motion(Box))`
  background: linear-gradient(45deg, #0a192f 30%, #112240 90%);
  border: 1px solid #64ffda;
  position: relative;
  overflow: hidden;
  color: ${({ active }) => (active ? '#64ffda' : '#ccd6f6')};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  text-transform: capitalize;
  border-radius: 8px;
  padding: 4px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
`;

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const location = useLocation();
  const navigate = useNavigate();

  // register scroll events
  useEffect(() => {
    ScrollEvents.scrollEvent.register('end', to => setActiveSection(to));
    return () => ScrollEvents.scrollEvent.remove('end');
  }, []);

  const toggleDrawer = open => () => setDrawerOpen(open);

  const handleNavClick = (to) => {
    // Define route paths for projects, certifications, and blog (on homepage)
    const routePath = 
      to === 'projects' ? '/' : 
      to === 'certifications' ? '/' : 
      to === 'blog' ? '/' : '/';

    // Handle navigation to different sections within homepage or routing to other pages
    if (location.pathname !== routePath) {
      navigate(routePath);
    }

    // Handle scrolling within homepage
    if (location.pathname === '/' && routePath === '/') {
      scroller.scrollTo(to, { smooth: true, offset: -50, duration: 500 });
    }
  };

  // Drawer contents
  const drawerList = (
    <Box
      sx={{
        width: 240,
        bgcolor: '#0a192f',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      role="presentation"
    >
      <IconButton sx={{ color: '#64ffda', m: 1 }} onClick={toggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
      <List>
        {navigationItems.map(item => {
          const routePath =
            item.to === 'projects'
              ? '/'
              : item.to === 'certifications'
              ? '/'
              : item.to === 'blog'
              ? '/'
              : '/';

          return (
            <ListItem key={item.to} disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
              <ListItemButton
                component={RouterLink}
                to={routePath}
                onClick={() => {
                  toggleDrawer(false)();
                  if (routePath === '/') {
                    // For Home section scrolling
                    setTimeout(() => {
                      scroller.scrollTo(item.to, { smooth: true, offset: -50, duration: 500 });
                    }, 100);
                  }
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{ color: '#ccd6f6', textTransform: 'capitalize', textAlign: 'center' }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Box sx={{ p: 2, bgcolor: '#112240', textAlign: 'center', color: '#64ffda' }}>
        <Typography variant="body2">&copy; 2025 Yuvapriya.S</Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: 'linear-gradient(45deg,#0a192f 30%,#112240 90%)', boxShadow: 'none' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: 200
            }}
          >
            YUVAPRIYA S
          </Typography>

          {isMobile ? (
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navigationItems.map(item => {
                const isHome = location.pathname === '/';
                return isHome ? (
                  <GradientButton
                    key={item.to}
                    active={activeSection === item.to}
                    component={ScrollLink}
                    to={item.to}
                    spy
                    smooth
                    duration={500}
                    offset={-50}
                    sx={{ cursor: 'pointer' }}
                  >
                    {item.label}
                  </GradientButton>
                ) : (
                  <GradientButton key={item.to} onClick={() => handleNavClick(item.to)}>
                    {item.label}
                  </GradientButton>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
}
