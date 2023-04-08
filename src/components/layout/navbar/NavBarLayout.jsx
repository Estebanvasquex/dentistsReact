import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import './navBarLayout.css'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


const NavBarLayout = (props) => {
  
  const
  {
    nav
  }=props


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          
          <Typography onClick={()=>nav("/dentists")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dentis
          </Typography>
          
          
          <NavLink to="/" className= {({isActive})=> isActive ? "activeNavBar": "navBar"} style={{textDecoration: "none"}}>
            <Button color="inherit">Home</Button>
          </NavLink>

          <NavLink to="/contact" className= {({isActive})=> isActive ? "activeNavBar" : "navBar"} style={{textDecoration: "none"}}>
            <Button color="inherit">contact</Button>
          </NavLink>

          <NavLink to="/favorite" className= {({isActive})=> isActive ? "activeNavBar" : "navBar"} style={{textDecoration: "none"}}>
            <Button color="inherit">Favorite</Button>
          </NavLink>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarLayout;
