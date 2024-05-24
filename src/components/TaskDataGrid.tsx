import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Task } from "../types/task";
import { useNavigate } from "react-router-dom";

type TaskDataGridProps = {
    columns: GridColDef[],
    rows: Task[]
}

export default function TaskDataGrid({ columns, rows }: TaskDataGridProps) {
    const navigate = useNavigate()
    
    const testRowClick = (params: any) => {
        const { id } = params.row
        navigate(`/task/${id}`)
    }
    return (
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
            rowSelectionModel={[]}
            onCellClick={(params, event) => {
                event.defaultMuiPrevented = true;
            }}
        />
    );
}