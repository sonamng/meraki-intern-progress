
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';



function Contect() {
  return (
    <>
      <Typography variant='h4' style={{ textAlign: "center" }}>Contect Me</Typography>

      <Box sx={{ width: '100%' }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"        >
            <FormControl>
              <FormLabel>Enter Name</FormLabel>
              <TextField></TextField>

              <FormLabel>Enter Last Name</FormLabel>
              <TextField></TextField>

              <FormLabel>Enter Phone</FormLabel>
              <TextField></TextField>


              <FormLabel>Enter Email</FormLabel>
              <TextField></TextField>
              <Button>Submit</Button>
            </FormControl>

        


        </Grid>

      </Box>
    </>
  );
}

export default Contect;
