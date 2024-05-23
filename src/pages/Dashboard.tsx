import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
            <Typography variant="h5">
                Welcome, Arian
            </Typography>
            <DataGrid 
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
                // pageSizeOptions={[5, 10]}
            />
        </Box>
    )
}