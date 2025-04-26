import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Blog post data
const blogPosts = [
  {
    title: 'My First Hackathon',
    date: 'March 2025',
    desc: 'CodHer\'25 - AI tool that simplifies complex topics into easy, child-friendly explanations.',
    image: 'https://drive.google.com/uc?export=view&id=1jN9m7UieNMf9OXGMa2uibu8agx8G-1OR',
  },
  {
    title: 'Second Hackathon',
    date: 'April 2025',
    desc: 'Selected for the Finals of Hacksagon at ABV-IIITM , Gwalior',
    image: '/Images/2nd_hackathon.png',
  },
  {
    title: 'Event Organising',
    date: 'April 2025',
    desc: 'Gained an insightful and beautiful experience while organising "Code Jenga" at Praytna\'25',
    image: 'https://source.unsplash.com/featured/?certificate',
  },
];

export default function BlogPage() {
  return (
    <Box sx={{ py: 10, px: 2, background: 'linear-gradient(to right, #e0eafc, #cfdef3)', minHeight: '100vh' }}>
      {/* Heading */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Typography variant="h3" align="center" fontWeight="bold" mb={8} sx={{ fontSize: '3rem', color: '#333' }}>
          My Blog
        </Typography>
      </motion.div>

      {/* Blog Cards */}
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {blogPosts.map((post, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
                  <CardContent sx={{ backgroundColor: 'white' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#2C3E50' }}>
                      {post.title}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                      {post.date}
                    </Typography>
                    <Typography variant="body2" color="text.primary" paragraph>
                      {post.desc}
                    </Typography>
                    {/* View Image Button */}
                    <Box textAlign="center" mt={2}>
                      <Button
                        component="a"
                        href={post.image}
                        target="_blank"
                        variant="outlined"
                        color="primary"
                        sx={{
                          textTransform: 'none',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 'bold',
                          fontSize: '1rem',
                          borderColor: '#6C63FF',
                          '&:hover': {
                            backgroundColor: '#6C63FF',
                            color: '#fff',
                            borderColor: '#6C63FF',
                          },
                        }}
                      >
                        View Image
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Back to Home Button */}
        <Box textAlign="center" mt={8}>
          <Button
            component={RouterLink}
            to="/"
            variant="outlined"
            color="primary"
            sx={{
              textTransform: 'none',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'bold',
              fontSize: '1rem',
              borderColor: '#6C63FF',
              '&:hover': {
                backgroundColor: '#6C63FF',
                color: '#fff',
                borderColor: '#6C63FF',
              },
            }}
          >
            ← Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
