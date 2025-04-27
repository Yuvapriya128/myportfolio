import React from "react";
import { Routes, Route } from "react-router-dom";  // No HashRouter here
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import MoreCertifications from "./components/MoreCertifications";
import Contacts from "./components/Contacts";
import MoreProjects from "./components/MoreProjects";
import BlogPreview from "./components/BlogPreview";
import BlogPage from "./components/BlogPage";

// Create a custom MUI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6366F1' },
    secondary: { main: '#A855F7' },
    background: { default: '#F9FAFB' },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ fontFamily: 'Poppins, sans-serif', scrollBehavior: 'smooth' }}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Certifications />
                <BlogPreview />
                <Contacts />
              </>
            }
          />
          <Route path="/more-certifications" element={<MoreCertifications />} />
          <Route path="/more-projects" element={<MoreProjects />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
