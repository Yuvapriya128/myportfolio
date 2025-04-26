import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "transparent",
        background: "linear-gradient(to bottom, #121212, #1e3a8a)",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 8 },
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* LEFT SIDE - TEXT */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              pr: { md: 4 },
              paddingBottom: { xs: 4, md: 0 },
            }}
          >
            <Stack spacing={3} sx={{ mx: { xs: "auto", md: 0 } }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight="bold"
                  color="text.primary"
                  sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, lineHeight: 1.2, color: '#ffffff' }}
                >
                  Aspiring Fresher
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" }, maxWidth: "450px", lineHeight: 1.5, color: '#e2e8f0' }}
                >
                  Transforming complex problems into{" "}
                  <Box component="span" sx={{ color: "#f43f5e", fontWeight: "bold" }}>
                    elegant, intuitive solutions
                  </Box>{" "}
                  through modern web technologies and creative design.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Link to="about" smooth={true} duration={500} offset={-64}>
                    <Button variant="contained" color="error" size="medium">
                      View Work
                    </Button>
                  </Link>

                  <Link to="contact" smooth={true} duration={500} offset={-64}>
                    <Button variant="outlined" color="error" size="medium">
                      Get in Touch
                    </Button>
                  </Link>
                </Stack>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

