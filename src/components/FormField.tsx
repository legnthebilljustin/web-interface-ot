import { TextField } from "@mui/material";
import { ChangeEventHandler } from "react";
type FormFieldProps = {
    label: string
    type: string
    name: string
    value: any
    handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default function FormField({
    label, type, name, value, handleInputChange, ...rest
}: FormFieldProps) {
    return (
        <TextField required fullWidth focused
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            size="small"
            sx={{ marginBottom: "0.8rem" }}
            {...rest}
        />
    )
}