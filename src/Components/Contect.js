
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
              <TextField placeholder='enter name'></TextField>

              <TextField placeholder='enter last name'></TextField>

              <TextField placeholder='enter email'></TextField>

              <TextField placeholder='enter phone'></TextField>

              <Button>Submit</Button>
            </FormControl>

        


        </Grid>

      </Box>
    </>
  );
}

export default Contect;
