import React from "react";
import { motion } from "framer-motion";
import { Container, Typography, Grid, Box } from "@mui/material";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3 } from "react-icons/si";

const techStack = [
  { name: "C", icon: <Typography variant="body1" color="#a8dadc" fontSize={30}>C</Typography> },
  { name: "C++", icon: <Typography variant="body1" color="#45a247" fontSize={30}>C++</Typography> },
  { name: "Java", icon: <Typography variant="body1" color="#f8f9fa" fontSize={30}>Java</Typography> },
  { name: "HTML", icon: <SiHtml5 color="#e34f26" size={30} /> },
  { name: "CSS", icon: <SiCss3 color="#264de4" size={30} /> },
  { name: "JavaScript", icon: <SiJavascript color="#f0db4f" size={30} /> },
  { name: "React JS", icon: <FaReact color="#61dafb" size={30} /> },
  { name: "Node.js", icon: <FaNodeJs color="#8cc84b" size={30} /> },
  { name: "Express", icon: <SiExpress color="#ffffff" size={30} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" size={30} /> },
  { name: "SQL", icon: <FaDatabase color="#6c757d" size={30} /> },
  { name: "Git", icon: <FaGitAlt color="#f1502f" size={30} /> },
  { name: "Figma", icon: <FaFigma color="#f24e1e" size={30} /> },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        py: 10,
        px: { xs: 2, md: 6 },
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
            <span style={{ color: "#64ffda" }}>Beyond the Code:</span> A Glimpse into My World
          </Typography>
          <Typography variant="h6" color="#a8b2d1" paragraph sx={{ lineHeight: 1.7 }}>
            Driven by a fascination for crafting digital experiences, I navigate the full spectrum of development,
            from laying the foundational logic in languages like C, C++, and Java to orchestrating dynamic
            front-ends with React JS and building scalable back-ends using Node.js and Express. My journey extends
            to the intricacies of database management with MongoDB and Oracle, ensuring robust and efficient
            data solutions.
          </Typography>
          <Typography variant="h6" color="#a8b2d1" paragraph sx={{ lineHeight: 1.7 }}>
            I believe in the power of well-structured and elegant code, complemented by intuitive and visually
            appealing user interfaces, often brought to life through the collaborative design environment of Figma.
            Version control with Git is integral to my workflow, fostering seamless teamwork and project integrity.
          </Typography>
          <Typography variant="subtitle1" color="#ccd6f6" mt={4} sx={{ fontWeight: "bold" }}>
            Tech Toolkit: A Symphony of Skills
          </Typography>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={4} justifyContent="center" alignItems="center" mt={4}>
              {techStack.map((tech, index) => (
                <Grid item xs={4} sm={3} md={2} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      transition: "transform 0.2s",
                    }}
                  >
                    {tech.icon}
                    <Typography variant="caption" color="#8892b0">
                      {tech.name}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </motion.div>
    </Box>
  );
};

export default About;