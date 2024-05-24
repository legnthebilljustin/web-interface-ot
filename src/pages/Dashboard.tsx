import { Box, Card, CardActionArea, CardContent, Chip, Container, Grid, Typography } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import CreateTaskDialog from "../components/CreateTaskDialog";
import TaskDataGrid from "../components/TaskDataGrid";

function createData(
    id: number,
    name: string,
    assignedTo: string,
    status: number,
    deadline: string,
    createdAt: string,
    description: string | null
) {
    return { id, name, assignedTo, status, deadline, description, createdAt }
}

const columns: GridColDef[] = [
    { field: "id",  headerName: "ID", width: 70},
    { 
        field: "name", 
        headerName: "Task Name", 
        width: 300,
        cellClassName: "link-color"
    },
    { field: "assignedTo", headerName: "Assigned To", width: 130 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "deadline", headerName: "Deadline", width: 130 },
    { field: "created at", headerName: "Date Created", width: 130 },
]

const rows = [
    createData(1, "Create a button", "mark", 1, "2024-04-21", "2024-04-21", ""),
    createData(2, "Create a dropdown", "mark", 2, "2024-04-21", "2024-04-21", ""),
    createData(3, "Change background color", "eric", 3, "2024-04-21", "2024-04-21", ""),
    createData(4, "Create a button", "mark", 4, "2024-04-21", "2024-04-21", ""),
]

export default function Dashboard() {
    
    return (
        <Container maxWidth="md" sx={{ padding: "1rem 0"}}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5">
                    Welcome, Arian
                </Typography>
                
                <CreateTaskDialog />
            </Box>
            <Typography variant="body2" margin="2rem 0 1rem 0">
                All Availabe Tasks:
            </Typography>
            <TaskDataGrid rows={rows} columns={columns} />
        </Container>

    )
}