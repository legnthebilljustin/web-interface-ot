import React, { ChangeEvent, useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { RegistrationFormData } from "../../types/auth";

export default function Register() {
    const [formData, setFormData] = useState<RegistrationFormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleInputChange =  (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <Box style={{ maxWidth: 300, margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{
                display: "flex", flexDirection: "column", gap: "1rem"
            }}>
                <Typography variant="h5">Employee Registration.</Typography>
                <TextField label="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    size="small"
                />
                <TextField label="Email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    size="small"
                />
                <TextField label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    size="small"
                />
                <TextField label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required size="small"
                />

                <Button type="submit" variant="contained" size="small">Log In</Button>
                <Typography variant="subtitle2">No account yet? Register here.</Typography>
            </form>
        </Box>
    );
}