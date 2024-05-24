
import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography, makeStyles } from '@mui/material';

export default function Login() 
{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword]  = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("form submitted")
    }
    return (
        <Box margin="0 auto"
            display="flex" justifyContent="center" height="100vh"
            maxWidth={300}
        >
            <form onSubmit={handleSubmit} style={{ marginTop: "5rem",
                display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center"
            }}>
                <Typography variant="h6" marginBottom={3}>Sign In</Typography>
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