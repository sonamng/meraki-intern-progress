import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';



const Singup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handeName = (e) => {
        setName(e.target.value)
    }
    console.log("name",name);

    const handeEmail = (e) => {
        setEmail(e.target.value)
    }
    console.log("email",email);

    const handePassword = (e) => {
        setPassword(e.target.value)
    }
    console.log("password",password);

    const handePhone = (e) => {
        setPhone(e.target.value)
    }
    console.log("phone",phone);


    return (
        <>
            <Typography variant='h3' style={{ textAlign: "center" }}>Singup</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '70ch' },textAlign: "center"}}noValidate autoComplete="off"
            >

                <TextField value={name} onChange={handeName} id="standard-basic" label="Name" variant="standard" />
                <br />
                <TextField value={email} onChange={handeEmail} id="standard-basic" label="Email" variant="standard" />
                <br />
                <TextField value={password} onChange={handePassword} id="standard-basic" label="Password" variant="standard" />
                <br />
                <TextField value={phone} onChange={handePhone} id="standard-basic" label="Phone" variant="standard" />
                <br />


                <FormControl>
                    <Typography variant='h5'>Gender</Typography>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />

                    </RadioGroup>
                </FormControl>
                <br />
                <Button variant="contained">Submit</Button>

            </Box>
        </>
    )
}
export default Singup;






































































