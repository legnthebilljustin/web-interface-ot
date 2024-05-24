import React, { ChangeEvent, useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { RegistrationFormData } from "../../types/auth";

export default function Register() {
    const [formData, setFormData] = useState<RegistrationFormData>({
        firstName: "",
        lastName: "",
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
        <Box margin="0 auto"
            display="flex" justifyContent="center" height="100vh"
            maxWidth={300}
        >
            <form onSubmit={handleSubmit} style={{ marginTop: "5rem",
                display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center"
            }}>
                <Typography variant="h6" marginBottom={3}>Employee Registration</Typography>
                <TextField label="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    size="small"
                />
                <TextField label="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
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

                <Button type="submit" variant="contained" size="small" sx={{ marginTop: "1rem" }}>Register</Button>
                <Typography variant="subtitle2">Have an existing account?<br /> Login here.</Typography>
            </form>
        </Box>
    );
}