import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery } from "@mui/material";
import { Link, Events } from "react-scroll";
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from "@emotion/styled";

// Define each nav item with label and target id
const sections = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Certifications", to: "certifications" },
    { label: "Blog", to: "blog" },
    { label: "Contact", to: "contact" },
];

// GradientButton styled for nav items
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

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(100, 255, 218, 0.4), transparent);
        transition: 0.6s;
    }

    &:hover::before {
        left: 100%;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 24px rgba(100, 255, 218, 0.3);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        // Handle scroll event
        Events.scrollEvent.register("end", (to) => {
            setActiveSection(to);
        });

        return () => {
            Events.scrollEvent.remove("end");
        };
    }, []);

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    const drawerList = (
        <Box
            sx={{
                width: 240,
                bgcolor: "#0a192f",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <IconButton sx={{ color: "#64ffda", m: 1 }} onClick={toggleDrawer(false)}>
                <CloseIcon />
            </IconButton>
            <List>
                {sections.map((sec) => (
                    <ListItem key={sec.to} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={sec.to}
                            spy
                            smooth
                            duration={500}
                            offset={-50}
                            onSetActive={() => setActiveSection(sec.to)}
                        >
                            <ListItemText
                                primary={sec.label}
                                sx={{ color: "#ccd6f6", textTransform: "capitalize" }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ padding: 2, bgcolor: "#112240", textAlign: "center", color: "#64ffda" }}>
                <Typography variant="body2">&copy; 2025 Yuvapriya.S</Typography>
            </Box>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: "linear-gradient(45deg, #0a192f 30%, #112240 90%)",
                backdropFilter: "blur(12px)",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ minHeight: "48px!important", paddingY: 0, px: { xs: 2, md: 4 } }}> {/* Adjusted horizontal padding for responsiveness */}
                {/* Logo */}
                <Box sx={{ flexGrow: 1 }}> {/* Use flexGrow to push other elements to the right */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                background: "linear-gradient(45deg,rgb(248,24,140) 30%,rgb(233,20,20) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontFamily: "'Space Mono', monospace",
                                fontWeight: 700,
                                letterSpacing: "0.5px",
                                fontSize: "1.1rem",
                            }}
                        >
                            YUVAPRIYA S
                        </Typography>
                    </motion.div>
                </Box>

                {/* Desktop Nav Buttons */}
                {!isMobile && (
                    <Box display="flex" gap={2}> {/* Removed ml: 4 - flexGrow on logo will handle spacing */}
                        {sections.map((sec) => (
                            <GradientButton
                                key={sec.to}
                                active={activeSection === sec.to}
                                component={Link}
                                to={sec.to}
                                spy
                                smooth
                                duration={500}
                                offset={-50}
                                onSetActive={() => setActiveSection(sec.to)}
                            >
                                {sec.label}
                                {activeSection === sec.to && (
                                    <motion.div
                                        layoutId="underline"
                                        style={{
                                            position: "absolute",
                                            bottom: -2,
                                            left: 0,
                                            right: 0,
                                            height: "1.5px",
                                            background: "#64ffda",
                                            borderRadius: "2px",
                                        }}
                                        transition={{ type: "spring", stiffness: 500 }}
                                    />
                                )}
                            </GradientButton>
                        ))}
                    </Box>
                )}

                {/* Mobile Menu Icon */}
                {isMobile && (
                    <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                        <MenuIcon fontSize="small" />
                    </IconButton>
                )}
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;