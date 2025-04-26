import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";             // renamed import
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import MoreCertifications from "./components/MoreCertifications";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";     
import MoreProjects from "./components/MoreProjects";  
import BlogPreview from "./components/BlogPreview";    // for home page (preview)
import BlogPage from "./components/BlogPage";           // for full blog page
 // ✅ Add this import
   // fixed path

// Create a custom MUI theme (optional)
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
      <Router>
        {/* Use Box instead of div for MUI styling */}
        <Box sx={{ fontFamily: 'Poppins, sans-serif', scrollBehavior: 'smooth' }}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />            {/* now correctly references Home */}
                  <About />
                  <Projects />
                  <Certifications />
                  <BlogPreview />
                  <Contacts />
                </>
              }
            />
            <Route path="/more-certifications" element={<MoreCertifications />} />
            <Route path="/more-projects" element={<MoreProjects />} />   // ✅ Add this route
            <Route path="/blog" element={<BlogPage />} /> 
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
