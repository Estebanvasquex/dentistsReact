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

const DentistDetail = (props) => {
  const {
     dentist,
     darkMode,
     favs
     } = props;


  

  return (
    <div>
      
      <Grid container spacing={2} sx={{backgroundColor: darkMode ? "#0e1c2b": "#d1cfcf"}}>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          key={dentist.id}
          sx={{ marginTop: "10px" }}
        >
          <Card sx={{backgroundColor: darkMode ? "#123a61":"#fefefeb8"}}>
            <CardMedia
              component="img"
              height="194"
              image={`https://res.cloudinary.com/dmzibpgwk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1680906579/finalFrontEnd3/${dentist.id}.jpg`}
              alt={dentist.name}
              src=""
            />
            <CardContent >
              <Typography variant="body2" color="text.secondary">
                {dentist.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {dentist.username}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Link to={`/dentist/${dentist.id}`}>
                <IconButton aria-label="add to favorites">
                  <LoupeIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon color ={favs.some((fav)=>fav.id === dentist.id)? 'success': 'disable'} />
                </IconButton>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default DentistDetail;
