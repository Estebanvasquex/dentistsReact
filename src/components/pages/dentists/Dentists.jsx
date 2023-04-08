import React from 'react'

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
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoupeIcon from "@mui/icons-material/Loupe";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";



const Dentists = (props) => {
  const
  {
    dentists
  } = props



  return (
    <Grid container spacing={2}>
    {dentists.map((item,index) => {
      return (
        <Grid item xs={12} sm={4} md={3} key={item.id} sx={{marginTop:"10px"}}>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image={`https://res.cloudinary.com/dmzibpgwk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1680906579/finalFrontEnd3/${index}.jpg`}
              alt={item.name}
              src=""
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {item.username}
              </Typography>


            </CardContent>
{/*             <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <DeleteIcon />
              </IconButton>
              <Link to={`/productDetail/${item.id}`}>
                <IconButton aria-label="share">
                  <LoupeIcon />
                </IconButton>
              </Link>
              <IconButton aria-label="add to favorites">
                <ShoppingCartIcon />
              </IconButton>
            </CardActions> */}
          </Card>
        </Grid>
      );
    })}
  </Grid>
  )
}

export default Dentists