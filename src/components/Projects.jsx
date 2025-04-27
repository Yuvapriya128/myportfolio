import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Button,
  Stack
} from "@mui/material";
import { Link } from "react-router-dom"; // Change RouterLink to Link

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Online cosmetics shop with cart, checkout flow, and product detail pages.",
      tech: ["React.js", "Material UI", "LocalStorage", "Framer Motion"],
      link: "#"
    },
    {
      title: "Extension API Summarizer",
      description: "Chrome extension that summarizes web content using Google Gemini API.",
      tech: ["Javascript", "Manifest V3", " @google/generative-ai SDK", "React.js"],
      link: "#"
    },
    {
      title: "Diet Recommendation System",
      description: "ML-powered diet advice based on health profiles.",
      tech: ["Streamlit", "XGBoost", "Python"],
      link: "#"
    },
  ];

  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            mb={6}
            sx={{
              color: 'indigo.700',
              '& span': { color: 'purple.600' }
            }}
          >
            <span>My </span>
            <Box component="span" color="purple.600">
              Projects
            </Box>
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    width: 300,
                    height: 400,
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'transparent',
                    backgroundImage: 'linear-gradient(#ffffff, #ffffff), linear-gradient(to right, #6366F1, #A855F7, #EC4899)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                  </Box>

                  <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                    {project.tech.map((techItem, idx) => (
                      <Chip
                        key={idx}
                        label={techItem}
                        size="small"
                        sx={{
                          bgcolor: 'purple.100',
                          color: 'purple.700',
                          fontWeight: 'bold',
                          borderRadius: '16px',
                        }}
                      />
                    ))}
                  </Stack>

                  <Button
                    href={project.link}
                    target="_blank"
                    variant="text"
                    sx={{
                      color: 'purple.600',
                      fontWeight: 'bold',
                      '&:hover': { color: 'purple.800' },
                      textTransform: 'none',
                    }}
                  >
                    View Case Study →
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} textAlign="center">
          <Button
            component={Link} // Use Link here
            to="/more-projects"
            variant="contained"
            sx={{
              backgroundColor: 'purple.600',
              color: 'white',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': { backgroundColor: 'purple.700' },
            }}
          >
            MORE
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
