import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; 

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

function Contact() {
  const getValue = () => {
    console.log("function called");
  }

  return (
    <>
      <Typography variant='h4' align="center">Contact Me</Typography>
      <Box sx={{ width: '100%' }}>
        <Grid container justifyContent="center" alignItems="center">
        </Grid>

        <Stack style={{ display: "flex", justifyContent: "center", padding: "20px" }} direction="row" spacing={2}>
          <Button variant="outlined">Contact</Button>
          <Button variant="outlined">Email</Button>
        </Stack>
      </Box>

      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>

      <Stack direction="row" spacing={1}>
        <Chip label="Clickable" />
        <Chip label="Clickable" variant="outlined" />
      </Stack>
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </Box>

   

      <Switch color='primary' onChange={getValue} />
      <Checkbox />
      <Radio />
      <Slider color='secondary' style={{ width: 300, margin: 40 }} defaultValue={90} />

      <Select>
        <MenuItem value="Node">Node</MenuItem>
        <MenuItem value="React">React</MenuItem>
        <MenuItem value="Node">Javascript</MenuItem>
        <MenuItem value="Node">Python</MenuItem>
      </Select>
    </>
  );
}

export default Contact;
