import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, Container, Stack, IconButton, Snackbar, SnackbarContent } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Contacts() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Function to copy email to clipboard
  const handleCopyEmail = () => {
    const email = "yuvapriya128@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
      setOpenSnackbar(true); // Show success message
      setTimeout(() => setOpenSnackbar(false), 2000); // Hide after 2 seconds
    });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            mb={2}
            sx={{
              background: "linear-gradient(90deg, #6366F1, #A855F7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Connect
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            mb={6}
            sx={{ maxWidth: 500, mx: "auto" }}
          >
            Whether you have an idea, or a project my inbox is always open!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 220 }}
        >
          <Stack direction="row" justifyContent="center" spacing={2} mb={4}>
            <Button
              component="a"
              href="mailto:yuvapriya128@gmail.com"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "30px",
                px: 6,
                py: 1.8,
                background: "linear-gradient(135deg, #6366F1, #A855F7)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "0 8px 30px rgba(99,102,241,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                  boxShadow: "0 8px 40px rgba(99,102,241,0.5)",
                },
              }}
            >
              Say Hello 👋
            </Button>
          </Stack>
        </motion.div>

        {/* ——— Social Icons ——— */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Stack direction="row" spacing={3} justifyContent="center">
            <IconButton
              component="a"
              href="https://github.com/Yuvapriya128"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#333",
                "&:hover": { color: "#6366F1" },
                transition: "color 0.3s",
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>

            {/* Email Icon (Now Copies Email to Clipboard) */}
            <IconButton
              onClick={handleCopyEmail}
              sx={{
                color: "#333",
                "&:hover": { color: "#6366F1" },
                transition: "color 0.3s",
              }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>

            <IconButton
              component="a"
              href="https://linkedin.com/in/yuvapriya-s-9bb97b266"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#333",
                "&:hover": { color: "#6366F1" },
                transition: "color 0.3s",
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Stack>
        </motion.div>
      </Container>

      {/* Success message Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
      >
        <SnackbarContent
          message="Email copied to clipboard!"
          sx={{
            backgroundColor: "#4caf50",
            color: "white",
            borderRadius: 1,
            fontWeight: "bold",
            textAlign: "center",
          }}
        />
      </Snackbar>
    </Box>
  );
}
