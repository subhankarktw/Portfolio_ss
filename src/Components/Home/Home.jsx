import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { ReactTyped } from "react-typed";
import About from "../About/About";
import Education from "../Education/Education";
import Teechskill from "../Techskill/Techskill";
import Certificates from "../Certificates/Certificates";
import Project from "../Project/Project";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100vw",
          textAlign: "center",
          // backgroundImage: `url("https://wallpapercave.com/wp/wp8046982.jpg")`, // Set background image
          bgcolor: "black",
          backgroundSize: "cover",
          color: "#8bc34a",
        }}
      >
        <Avatar
          alt="Subhankar Sinha"
          src="https://media.licdn.com/dms/image/D5635AQHTIK-rbiS4PA/profile-framedphoto-shrink_400_400/0/1718156778996?e=1721570400&v=beta&t=oeyVL3RMdYFMPFzk8VL9FpyE8xRJk7_OAbdoFLrRNi4"
          style={{ width: 250, height: 250, marginBottom: 20 }}
        />
        <Typography variant="h4" gutterBottom>
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
      <Project/>
      <Certificates/>
    </>
  );
};

export default Home;
