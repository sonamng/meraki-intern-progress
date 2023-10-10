
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

function Contect() {
  return (
    <>

      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem >
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem  divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem >
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem >
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
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

        <Stack style={{ display: "flex", justifyContent: "center", padding: "20px" }} direction="row" spacing={2}>
          <Button variant="outlined" >Contect</Button>
          <Button variant="outlined" >Email</Button>
        </Stack>
      </Box>

    </>
  );
}

export default Contect;
