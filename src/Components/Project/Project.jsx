import React from 'react';
import { Box, Card, CardMedia, CardContent, Button, Typography, Grid } from '@mui/material';

const projects = [
  {
    title: 'KnowledgeNest (Online College Library)',
    thumbnail: `${process.env.PUBLIC_URL}/thumbnail/thumbnail1.png`,
    gitLink: 'https://github.com/subhankarktw/knowledge_nest.git'
  },
  {
    title: 'Project 2',
    thumbnail: `${process.env.PUBLIC_URL}/path/to/thumbnail2.jpg`,
    gitLink: 'https://github.com/your-repo2'
  }
];

const Project = () => {
  return (
    <Box sx={{ padding: 4, bgcolor: 'black' }}>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345, bgcolor: 'black', color: 'lightgreen' }}>
              <CardMedia
                component="img"
                height="140"
                image={project.thumbnail}
                alt={`${project.title} Thumbnail`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'lightgreen' }}>
                  {project.title}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href={project.gitLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ bgcolor: 'lightgreen', color: 'black' }}
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
