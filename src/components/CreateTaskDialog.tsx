import { Button, Dialog, Box, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { TaskFormData } from "../types/task";
import FormField from "./FormField";


export default function CreateTaskDialog() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [formData, setFormData] = useState<TaskFormData>({
        name: "",
        description: "",
        assignedTo: null,
        deadline: null,
        status: ""
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        console.log("form submitted", event)
    }

    return (
        <>
            <Button variant="contained" size="small" onClick={handleOpen}>Create New Task</Button>
            <Dialog open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box p={1}>
                    <form onSubmit={handleFormSubmit}>
                        <DialogTitle id="alert-dialog-title" style={{ padding: "1rem" }}>
                            Create a new task.
                        </DialogTitle>
                        <DialogContent style={{ padding: "1rem" }}>
                            <FormField label="Task Name"
                                type="text"
                                name="name"
                                value={formData.name}
                                handleInputChange={handleInputChange}
                                
                            />
                            <TextField fullWidth size="small" focused
                                sx={{ marginBottom: "0.8rem" }}
                                label="Task Description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                multiline
                                rows={4}
                            />
                            <FormField label="Assigned To"
                                type="text"
                                name="assignedTo"
                                value={formData.assignedTo}
                                handleInputChange={handleInputChange}
                            />
                            <FormField label="Deadline"
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                handleInputChange={handleInputChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" variant="contained" size="small">Create</Button>
                            <Button variant="outlined" size="small" onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </form>
                </Box>
            </Dialog>
        </>
    )
}
