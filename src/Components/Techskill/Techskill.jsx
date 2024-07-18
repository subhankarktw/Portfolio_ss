import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import HtmlLogo from "../../image/html-5.png";
import CssLogo from "../../image/css-3.png";
import Bootstrap from "../../image/bootstrap.png";
import MUI from "../../image/mui.png";
import JavascriptLogo from "../../image/js.png";
import ReactLogo from "../../image/react.png";
import Redux from "../../image/redux.png";
import NextLogo from "../../image/next.png";
import GitLogo from "../../image/github.png";

const skills = [
  { name: "HTML", icon: HtmlLogo },
  { name: "CSS", icon: CssLogo },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "MUI", icon: MUI },
  { name: "JavaScript", icon: JavascriptLogo },
  { name: "React", icon: ReactLogo },
  { name: "Redux", icon: Redux },
  { name: "Next.js", icon: NextLogo },
  { name: "Git", icon: GitLogo },
];

const Techskill = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300, // Speed of slide transition in milliseconds
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Interval between slide transitions in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 4 }}>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "200px", // Adjust as needed
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "80px", height: "80px" }}
              />
            </Box>
            <Typography variant="h6" mt={2}>
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Techskill;
