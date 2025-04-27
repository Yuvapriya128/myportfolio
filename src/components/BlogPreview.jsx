import { motion } from 'framer-motion';
import { Box, Container, Typography, Paper, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';  // ✅ for View More (change RouterLink to Link)

const events = [
  { 
    title: 'My First Hackathon', 
    date: 'Mar 2025', 
    desc: 'CodHer - AI tool that simplifies complex topics into easy, child-friendly explanations.',
  },
  { 
    title: 'Second Hackathon', 
    date: 'April 2025', 
    desc: 'Selected for Finals of Hacksagon',
  },
  { 
    title: 'Event Organising', 
    date: 'April 2025', 
    desc: 'Organizing an event named "Code Jenga"',
  },
];

export default function Blog() {
  return (
    <Box id="blog" sx={{ py: 12, px: 2, backgroundColor: 'white', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" align="center" fontWeight="bold" mb={8}>
          Professional Timeline
        </Typography>
      </motion.div>

      <Container maxWidth="md" sx={{ position: 'relative' }}>
        {/* Center Line */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '4px',
            height: '100%',
            bgcolor: 'grey.300',
            transform: 'translateX(-50%)',
          }}
        />

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: '2rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                backgroundColor: 'indigo.50',
                width: 320,
                borderRadius: 2,
                background: '#eef2ff',
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {event.title}
              </Typography>
              <Typography variant="caption" color="textSecondary" display="block">
                {event.date}
              </Typography>
              <Typography variant="body2" color="text.primary" mt={1}>
                {event.desc}
              </Typography>
            </Paper>
          </motion.div>
        ))}

        {/* View More Button */}
        <Box textAlign="center" mt={6}>
          <Stack
            component={motion.div}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 260 }}
          >
            <Button
              variant="contained"
              size="medium"
              color="primary"
              component={Link}  // ✅ Use Link here for React Router v7
              to="/blog"  // ✅ navigate to full blog page
              sx={{ textTransform: 'none', px: 4, py: 1.5 }}
            >
              View More
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
