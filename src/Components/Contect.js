
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import Stack from '@mui/material/Stack';



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
            <FormLabel>Name</FormLabel>
            <TextField placeholder='Name'></TextField>
            <FormLabel> Last Name</FormLabel>
            <TextField placeholder='Lastname'></TextField>
            <FormLabel>Email</FormLabel>
            <TextField placeholder='Email'></TextField>
            <FormLabel>Phone</FormLabel>
            <TextField placeholder='Phone'></TextField>

            <Button>Submit</Button>
          </FormControl>
        </Grid>

        <Stack style={{ display: "flex", justifyContent: "center" , padding:"20px"}} direction="row" spacing={2}>
          <Button variant="outlined" >Contect</Button>
          <Button variant="outlined" >Email</Button>
        </Stack>
      </Box>
    
    </>
  );
}

export default Contect;
