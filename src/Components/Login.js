import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Phone } from '@mui/icons-material';



const Singup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handeEmail = (e) => {
        setEmail(e.target.value)
    }
    console.log("email", email);

    const handePassword = (e) => {
        setPassword(e.target.value)
    }
    console.log("password", password);




    return (
        <>
            <Typography variant='h3' style={{ textAlign: "center" }}>Login</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '70ch' }, textAlign: "center"
                }} noValidate autoComplete="off"
            >
                <br />
                <TextField value={email} onChange={handeEmail} id="standard-basic" label="Email" variant="standard" />
                <br />
                <TextField value={password} onChange={handePassword} id="standard-basic" label="Password" variant="standard" />
                <br />
                <Button variant="contained">Submit</Button>

            </Box>
        </>
    )
}
export default Singup;






































































