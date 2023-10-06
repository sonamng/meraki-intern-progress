import Button from '@mui/material/Button';
import { Stack } from '@mui/material';


function Contect() {
  return (
    <>
      <h3>Contect</h3>
      <Stack spacing={1} direction="row">
        <Button variant="contained">Contect-Button</Button>
      </Stack>


      <Stack direction="row" spacing={8}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>

    </>
  );
}

export default Contect;
