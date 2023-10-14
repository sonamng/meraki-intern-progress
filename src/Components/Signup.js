import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';


const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: ""
    });
    const [submittedData, setSubmittedData] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleSubmit = () => {
        setSubmittedData(formData);
        console.log("formData", formData);
    };


    return (
        <>
            <Typography variant='h3' style={{ textAlign: "center" }}>Signup</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '70ch' }, textAlign: "center"
                }}
                noValidate autoComplete="off"
            >
                <TextField name="name" value={formData.name} onChange={handleChange} id="standard-basic" label="Name" variant="standard" />
                <br />
                <TextField name="email" value={formData.email} onChange={handleChange} id="standard-basic" label="Email" variant="standard" />
                <br />
                <TextField name="password" value={formData.password} onChange={handleChange} id="standard-basic" label="Password" variant="standard" />
                <br />
                <TextField name="phone" value={formData.phone} onChange={handleChange} id="standard-basic" label="Phone" variant="standard" />
                <br />
                <FormControl>
                    <Typography variant='h5'>Gender</Typography>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </Box>
            {submittedData && (
                <div className='container' style={{textAlign:"center"}}>
                    <Typography variant='h4' >Submitted Data</Typography>
                    <Stack>
                        <Typography>Name: {submittedData.name}</Typography>
                        <Typography>Email: {submittedData.email}</Typography>
                        <Typography>Password: {submittedData.password}</Typography>
                        <Typography>Phone: {submittedData.phone}</Typography>
                        <Typography>Gender: {submittedData.gender}</Typography>
                    </Stack>
                </div>
            )}
        </>
    );
};


export default Signup;
