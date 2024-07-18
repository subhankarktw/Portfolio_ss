import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Typography } from "@mui/material";

const certificates = [
  "c1.jpg",
  "c2.jpg",
  "c3.jpg",
  "c4.jpg",
  "c5.jpg",
  "c6.jpg",
  "c7.jpg",
  "c8.jpg",
  "c9.jpg",
  "c10.jpg",
  "c11.jpg",
  "c12.jpg",
  "c13.jpg",
];

function Item(props) {
  return (
    <Paper>
      <img
        src={`${process.env.PUBLIC_URL}/certificates/${props.item}`}
        alt={props.item}
        style={{ width: "100%", height: "auto" }}
      />
    </Paper>
  );
}

export default function Certificates() {
  return (
    <Box
      id="certificates"
      sx={{
        textAlign: "center",
        bgcolor: "black",
        color: "#8bc34a",
        p: 2, // Reduce padding here
      }}
    >
      <Typography variant="h4" gutterBottom>
        Certificates
      </Typography>
      <Carousel
        interval={4000}
        sx={{
          "& .CarouselItem": {
            height: "300px", // Adjust height of each item
            width: "auto", // Adjust width of each item
          },
          p: 5,
        }}
      >
        {certificates.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}
