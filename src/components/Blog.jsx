import { motion } from 'framer-motion';
import { Box, Container, Typography, Paper, Button, Stack } from '@mui/material';

const events = [
  { title: 'Started React Portfolio', date: 'Mar 2023', desc: 'Built a modern React portfolio with animations.' },
  { title: 'Joined React Community', date: 'Jan 2023', desc: 'Active member of global React dev group.' },
  { title: 'Front-End Certification', date: 'Jun 2022', desc: 'Completed FreeCodeCamp front-end certification.' },
];

export default function Blog() {
  return (
    <Box id="blog" sx={{ py: 12, px: 2, backgroundColor: 'white' }}>
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

        {/* ——— View More Button ——— */}
        <Box textAlign="center" mt={4}>
          <Stack
            component={motion.div}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 260 }}
          >
            <Button
              variant="contained"
              size="medium"
              color="primary"
              href="/blog"            // or use component={RouterLink} to="/blog"
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
