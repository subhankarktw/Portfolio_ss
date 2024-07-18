import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Img from "../../code.png";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <img 
            src={Img} 
            alt="Logo" 
            style={{ 
              marginRight: '8px', 
              height: '40px', 
              filter: 'brightness(0) saturate(100%) invert(49%) sepia(20%) saturate(7480%) hue-rotate(56deg) brightness(101%) contrast(99%)' 
            }} 
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#8bc34a" }}
          >
            Subhankar Sinha
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#8bc34a" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component="a" href="#home">Home</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="#about">About</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="#education-journey">Education Journey</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="#projects">Projects</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="#certificates">Certificates</MenuItem>
              <MenuItem onClick={handleClose} component="a" href="#contact">Hire me</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
