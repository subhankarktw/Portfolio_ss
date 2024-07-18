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
          backgroundImage: `url("https://wallpaperaccess.com/full/5277927.jpg")`, // Set background image
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          color: "#8bc34a",
          backgroundColor: "rgba(120, 0, 0, 0.8)", // Adjust opacity here (0.7 for example)
        }}
      >
        <Avatar
          alt="Subhankar Sinha"
          src="https://media.licdn.com/dms/image/D5635AQHTIK-rbiS4PA/profile-framedphoto-shrink_400_400/0/1718156778996?e=1721570400&v=beta&t=oeyVL3RMdYFMPFzk8VL9FpyE8xRJk7_OAbdoFLrRNi4"
          style={{ width: 250, height: 250, marginBottom: 20 }}
        />
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          Hi, I'm Subhankar Sinha!
        </Typography>
        <Typography variant="h5" gutterBottom>
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
            style={{ fontWeight: "bold" }}
          />
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Hire me{" "}
            <IconButton
              color="inherit"
              target="_blank"
              href="https://www.linkedin.com/in/subhankar-sinha-485242219"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
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
