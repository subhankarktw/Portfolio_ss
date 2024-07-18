import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { ReactTyped } from "react-typed";

const About = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace 'resume.pdf' with your actual CV file name
    const downloadUrl = process.env.PUBLIC_URL + "/resume.pdf";
    window.open(downloadUrl);
  };

  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "black",
        color: "#8bc34a",
        padding: 4,
        height:"100vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Hello 👋, I'm Subhankar Sinha
      </Typography>
      <Typography variant="h5" gutterBottom>
        <ReactTyped
          strings={["Master of Computer Application"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          m: 6,
        }}
      >
        Seeking a dynamic role within an organization where I can leverage my
        skills to contribute to growth and profitability. Eager to gain
        exposure, develop expertise, and enhance my abilities for a successful
        and mutually beneficial career. Committed to achieving success through
        hard work, sincerity, and dedication.
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "lightgreen",
          color: "black",
          "&:hover": {
            backgroundColor: "green",
          },
        }}
        onClick={handleDownloadCV}
      >
        Download CV
      </Button>
    </Box>
  );
};

export default About;
