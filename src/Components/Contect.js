
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
import SvgIcon from '@mui/material/SvgIcon';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';






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
        <ListItem divider>
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

      <Stack direction="row" spacing={1}>
        <Chip label="Clickable" />
        <Chip label="Clickable" variant="outlined" />
      </Stack>
      <SvgIcon>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>

      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
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
