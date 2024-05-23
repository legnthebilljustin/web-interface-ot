
import React, { useState } from "react";
import { Box, Button, TextField, Typography, makeStyles } from '@mui/material';

export default function Login() 
{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword]  = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("form submitted")
    }
    return (
        <Box style={{ maxWidth: 300, margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{
                display: "flex", flexDirection: "column", gap: "1rem"
            }}>
                <Typography variant="h5">Log in to your account.</Typography>
                <TextField label="Email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    size="small"
                />
                <TextField label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    size="small"
                />
                <Button type="submit" variant="contained" size="small">Log In</Button>
                <Typography variant="subtitle2">No account yet? Register here.</Typography>
            </form>
        </Box>
    );
}