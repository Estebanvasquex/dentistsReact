import React from 'react'

import {
  Box,
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../../assets/logoCentroOdontologico.avif"
import Face6Icon from "@mui/icons-material/Face6";
import ValidationOk from '../../common/Validation/ValidationOk';
import ValidationError from '../../common/Validation/ValidationError';

const UserContact = (props) => {
  const 
  {
    handleChange,
    handleSubmit,
    validation 
  } = props;
  return (
    <div>
    <Stack direction="row">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>

          <Typography align="center" variant="h3" color="primary">
            Contacto
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Stack>
            <img 
              src={logo}
              alt=""
            />
          </Stack>
        </Grid>

        <Grid item xs={12} sm={5} md={5}>
          <form action="" onSubmit={handleSubmit}>
            <Stack sx={{gap:"10px", alignContent:"center"}}>
              <TextField
                variant="outlined"
                label="Nombre"
                name="name"
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                label="Email"
                name="email"
                onChange={handleChange}
              />
             
              <Button
                color="primary"
                type="submit"
                variant="contained"
                size="larg"
                startIcon={<Face6Icon />}
              >
                Enviar
              </Button>
              {validation ?<ValidationOk/> :<ValidationError/> }
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Stack>
  </div>
  )
}

export default UserContact