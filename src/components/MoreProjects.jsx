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
import { Link as RouterLink } from "react-router-dom";

export default function MoreProjects() {
  const projects = [
    {
      title: "Kindergarden Project",
      description: "Learning for kids using small quizzes ",
      tech: ["Html", "Css", "Javascript"],
      link: "#"
    },
    {
      title: "HeartAttack Detection",
      description: "MultiLabel classification of 12 lead ECG images",
      tech: ["Python", "Flask", "React.js"],
      link: "#"
    },
    {
      title: "Mobile Chat App",
      description: "Cross-platform chat with end-to-end encryption",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#"
    },
    // You can add more projects here
  ];

  return (
    <Box component="section" sx={{ py: 10, backgroundColor: 'grey.50' }}>
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
            <span>More </span>
            <Box component="span" color="purple.600">
              Projects
            </Box>
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((p, i) => (
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
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {p.description}
                    </Typography>
                  </Box>

                  <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                    {p.tech.map((t, idx) => (
                      <Chip
                        key={idx}
                        label={t}
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
                    href={p.link}
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

        <Box textAlign="center" mt={6}>
          <Button
            component={RouterLink}
            to="/"
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
            Back Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}