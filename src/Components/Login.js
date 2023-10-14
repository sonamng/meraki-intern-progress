






import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        setEmail(email);
        setPassword(password)
    };

    return (
        <>
            <Typography variant="h5" component="h2">Login</Typography>
            <Container maxWidth="xs">

                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                    Login
                </Button>
            </Container>
        </>
    );
};

export default LoginForm;
