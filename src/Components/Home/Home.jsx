import React from "react";
import { Typography, Avatar, Box, IconButton } from "@mui/material";
import { ReactTyped } from "react-typed";
import { Element } from "react-scroll";
import About from "../About/About";
import Education from "../Education/Education";
import Techskill from "../Techskill/Techskill";
import Certificates from "../Certificates/Certificates";
import Project from "../Project/Project";
import HireMe from "../Contact/Contact";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  return (
    <>
      <Box
        id="home"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100vw",
          textAlign: "center",
          backgroundImage: `url(${process.env.PUBLIC_URL}/wallpaper.jpg)`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          color: "#8bc34a",
          backgroundColor: "rgba(120, 0, 0, 0.7)", // Adjust opacity here (0.7 for example)
        }}
      >
        <Avatar
          alt="Subhankar Sinha"
          src={`${process.env.PUBLIC_URL}/self.jpeg`}
          style={{ width: 250, height: 250, marginBottom: 20 }}
        />
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          Hi, I'm Subhankar Sinha!
        </Typography>
        <Box sx={{ display: "inline-block", fontWeight: "bold" }}>
          <ReactTyped
            strings={[
              "I am an MCA Student",
              "I am a React Developer",
              "I am Tech Enthusiast",
              "I am a React-Redux Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            <a
              href="https://www.linkedin.com/in/subhankar-sinha-485242219"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                position: "relative",
              }}
            >
              Hire me
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                sx={{
                  position: "absolute",
                  left: "100%",
                  transform: "translateX(5px)",
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </a>
          </Typography>
        </Box>
      </Box>

      <Element name="techskill">
        <Techskill />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="certificates">
        <Certificates />
      </Element>
      <Element name="contact">
        <HireMe />
      </Element>
    </>
  );
};

export default Home;
