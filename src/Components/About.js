import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

function About() {
  return (
    <>

      <Typography variant='h3' style={{ textAlign: "center" }}>About Us</Typography>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Avatar alt="Sonam" src="/static/images/avatar/1.jpg" />
      </Stack>

      
    </>
  );
}

export default About;
