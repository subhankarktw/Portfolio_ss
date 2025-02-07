import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const projects = [
  {
    title: "KnowledgeNest (Online College Library)",
    thumbnail: `${process.env.PUBLIC_URL}/thumbnail/thumbnail1.png`,
    gitLink: "https://github.com/subhankarktw/knowledge_nest.git",
  },
  {
    title: "Portfolio",
    thumbnail: `${process.env.PUBLIC_URL}/thumbnail/th2.jpeg`,
    gitLink: "https://github.com/subhankarktw/Portfolio_ss.git",
  },
  {
    title: "Happy Moments",
    thumbnail: "thumbnail/home01.jpg",
    gitLink: "https://github.com/subhankarktw/HappyMoment",
  },
];

const Project = () => {
  return (
    <Box
      id="projects"
      sx={{
        padding: 4,
        backgroundImage: `url(${process.env.PUBLIC_URL}/wallpaper.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        color: "#8bc34a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#8bc34a", mb: 10 }}
      >
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                width: "100%",
                height: 380,
                bgcolor: "black",
                color: "#8bc34a",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  boxShadow: "0 12px 60px rgba(139, 195, 74, 0.7)", // Darker shadow on hover
                  transform: "scale(1.02)",
                  transition: "0.3s ease-in-out",
                },
              }}
            >
              <CardMedia
                component="img"
                height="175"
                width="175"
                image={project.thumbnail}
                alt={`${project.title} Thumbnail`}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                  sx={{ color: "#8bc34a" }}
                >
                  {project.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 2, bgcolor: "#8bc34a", color: "black" }}
                >
                  View Code
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;
