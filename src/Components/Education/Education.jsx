import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";

const Education = () => {
  const educationDetails = [
    {
      title: "Madhyamik",
      institution: "Baharan Joy Durga High School",
      year: "2012-2013",
      board: "West Bengal Board of Secondary Education",
      description: "Percentage - 81%",
    },
    {
      title: "Higher Secondary",
      institution: "Katwa Bharati Bhaban",
      year: "2014-2015",
      board: "West Bengal Council of Higher Secondary Education",
      description: "Percentage - 64%",
    },
    {
      title: "Bachelor of Computer Application",
      institution: "Techno India Hooghly",
      year: "2019-2022",
      board: "Maulana Abul Kalam Azad University of Technology",
      description: "CGPA - 9.63",
    },
    {
      title: "Master of Computer Applications (MCA)",
      institution: "Techno College Hooghly",
      year: "2022-2024",
      board: "Maulana Abul Kalam Azad University of Technology",
      description: "CGPA - 8.76",
    },
  ];

  return (
    <Box bgcolor="#000" color="#8bc34a" p={4} id="education-journey">
      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 10, mb: 5 }}>
        Education Journey
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {educationDetails.map((detail, index) => (
          <Grid item xs={12} sm={6} lg={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                minHeight: 200,
                width: "100%", // Adjust width to be responsive
                maxWidth: 400, // Max width to prevent it from stretching too much
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#000", // Black background
                color: "#8bc34a", // Light green text color
                boxShadow: "0 8px 40px rgba(139, 195, 74, 0.5)", // Increased box shadow
                "&:hover": {
                  boxShadow: "0 12px 60px rgba(139, 195, 74, 0.7)", // Darker shadow on hover
                  transform: "scale(1.02)",
                  transition: "0.3s ease-in-out",
                },
              }}
            >
              <Typography variant="h6" mt={1} mb={1} color="#8bc34a">
                {detail.year}
              </Typography>
              <Typography variant="h6" mt={1} mb={1} color="#8bc34a">
                {detail.title}
              </Typography>
              <Typography variant="subtitle1" color="#8bc34a">
                {detail.institution}
              </Typography>
              <Typography variant="body2" color="#8bc34a">
                <b>{detail.board}</b>
              </Typography>
              <Typography variant="body2" color="#8bc34a">
                {detail.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
