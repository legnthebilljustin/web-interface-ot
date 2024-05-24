import { Box, Card, CardActionArea, CardContent, Chip, Container, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CreateTaskDialog from "../components/CreateTaskDialog";

function createData(
    id: number,
    name: string,
    assignedTo: string,
    status: string,
    dateCreated: string
) {
    return { id, name, assignedTo, status, dateCreated }
}

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70},
    { field: "name", headerName: "Task Name", width: 150 },
    { field: "assignedTo", headerName: "Assigned To", width: 130 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "date", headerName: "Date Created", width: 130 },
]

const rows = [
    createData(1, "Create a button", "mark", "awaiting", "2024-04-21"),
    createData(2, "Create a dropdown", "mark", "in progress", "2024-04-21"),
    createData(3, "Change background color", "mark", "awaiting", "2024-04-21"),
    createData(4, "Create a button", "mark", "awaiting", "2024-04-21"),
]

export default function Dashboard() {
    const testRowClick = (params: any) => {
        const { id } = params.row
    }
    return (
        <Box style={{ textAlign: "left" }}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5">
                    Welcome, Arian
                </Typography>
                <CreateTaskDialog />
            </Box>
            
            {/* <DataGrid 
                rows={rows}
                columns={columns}
                initialState={{
                    density: "compact",
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 }
                    }
                }}
                onRowClick={testRowClick}
                disableColumnSelector
            /> */}
            <Box maxWidth="600px">
                <Typography variant="body1" marginBottom={1}>Active Tasks</Typography>
                <Card>
                    <CardActionArea sx={{ padding: "0.5rem 1rem" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <Typography variant="body2" fontWeight="bold" color="#0AA9E5">Task 12345</Typography>
                                <Typography variant="body2" fontWeight="bold" marginBottom={1}>Lorem, ipsum dolor sit amet consectetur adipisicing elite</Typography>
                                {/* <Typography variant="body2">Assigned to:</Typography> */}
                                <Typography variant="body2">Assigned to: Bill Justin</Typography>
                            </Grid>
                            <Grid item xs={3} textAlign="right">
                                <Chip label="Not started" color="primary" variant="outlined" size="small" />
                            </Grid>
                        </Grid>
                        
                    </CardActionArea>
                </Card>
            </Box>
            
        </Box>
    )
}