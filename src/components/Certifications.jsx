import { motion } from "framer-motion";
import { Box, Typography, Grid, Paper, Chip, Button, Stack, Container } from "@mui/material";
import { Link } from "react-router-dom";  // ✅ Use Link from react-router-dom

export default function Certifications() {
  const certifications = [
    {
      title: "CodHer Hackathon",
      issuer: "Anna University",
      date: "April 2025",
      link: "https://drive.google.com/file/d/1jN9m7UieNMf9OXGMa2uibu8agx8G-1OR/view?usp=sharing",
      skills: ["Flask", "React", "API"],
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
      date: "April 2025",
      link: "https://drive.google.com/file/d/1gnfJDO3EQwqbFdSbcAc8Wl1BDJw9nmHA/view?usp=sharing",
      skills: ["GenAI"],
    },
    {
      title: "Github Professional",
      issuer: "LinkedIn Learning - Github",
      date: "March 2025",
      link: "https://drive.google.com/file/d/1Sv5OZd8tQJTEORfjKc5vlAsYgDDIJ5KN/view?usp=sharing",
      skills: ["Github"],
    },
  ];

  return (
    <Box id="certifications" sx={{ py: 10, backgroundColor: 'grey.50' }}>
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
              Certifications
            </Box>
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {certifications.map((cert, i) => (
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
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="text.primary">
                        {cert.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cert.issuer}
                      </Typography>
                    </Box>
                    <Chip
                      label={cert.date}
                      size="small"
                      sx={{ bgcolor: 'indigo.100', color: 'indigo.700', fontWeight: 'bold' }}
                    />
                  </Box>

                  <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                    {cert.skills.map((skill, j) => (
                      <Chip
                        key={j}
                        label={skill}
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
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    sx={{
                      color: 'purple.600',
                      fontWeight: 'bold',
                      '&:hover': { color: 'purple.800' },
                      textTransform: 'none',
                    }}
                  >
                    View Credential
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} textAlign="center">
          <Button
            component={Link}  // ✅ Link to navigate to more certifications
            to="/more-certifications"
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
