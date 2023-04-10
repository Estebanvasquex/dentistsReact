import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoupeIcon from "@mui/icons-material/Loupe";
import { Link } from "react-router-dom";

const Dentists = (props) => {
  const 
  { 
    dentists,
    darkMode,
    dispatch,
    favs
  } = props;

  console.log(favs);

  return (
    <Grid container spacing={2} sx={{backgroundColor: darkMode ? "#0e1c2b": "#d1cfcf"}}>
      {dentists.map((item) => {
        return (

          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            key={item.id}
            sx={{ marginTop: "10px" }}
          >
            <Card sx={{backgroundColor:darkMode ?"#123a61":"#fefefeb8" }}>
              <CardMedia
                component="img"
                height="194"
                image={`https://res.cloudinary.com/dmzibpgwk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1680906579/finalFrontEnd3/${item.id}.jpg`}
                alt={item.name}
                src=""
              />
              <CardContent >
                <Typography variant="body2" color="text.secondary">
                  {item.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.username}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Link to={`/dentist/${item.id}`}>
                  <IconButton aria-label="add to favorites">
                    <LoupeIcon />
                  </IconButton>  
                </Link>
                <IconButton aria-label="add to favorites" onClick={()=>dispatch({type: "HANDLE_FAVORITE", payload: item}) }>
                    <FavoriteIcon color ={favs.some((fav)=>fav.id === item.id)? 'success': 'disable'}/>
                  </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Dentists;
