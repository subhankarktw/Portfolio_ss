import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { ReactTyped } from "react-typed";
import About from "../About/About";
import Education from "../Education/Education";
import Teechskill from "../Techskill/Techskill";
import Certificates from "../Certificates/Certificates";
import Project from "../Project/Project";
import HireMe from "../Contact/Contact";

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
          backgroundSize: "fixed",
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
        <Typography variant="h5" gutterBottom>
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
          />
        </Typography>
      </Box>
      <Teechskill />
      <About />
      <Education />
      <Project />
      <Certificates />
      <HireMe/>
    </>
  );
};

export default Home;
