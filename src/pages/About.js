import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": 
          {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": 
          {
            textAlign: "justify",
          },
          "@media (max-width:600px)":
          {
              mt: 0,
              "& h4 ": 
              {
                fontSize: "1.5rem",
              },
          },
        }}
      >
          <Typography variant='h4'>
            Welcome To Teech Bee IQ
          </Typography>
          <p>
          Teech Bee IQ is "India's 1st digital Library" dedicated to making education affordable & accessible. 
          We have the largest collection of eBooks & branded digital content in Higher Education, School (K12), 
          Professional & Competitive Exams. We have a strong foundation of leading publishers & tutorials as content 
          partners. We want to bridge the gap between content providers & students using our technology platform.
          </p>
          <br />
          <p>
          Launched by like-minded professional who shares same alma mater from high school. Having worked in 
          different fortune 500 corporations at senior levels, we wanted to do something, to make an impact 
          while adding value and meaning to people's life.
          </p>
        </Box>
        
    </Layout>
  );
};

export default About;