import { Box, Button, Card, CardContent, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getAllTasksAsAdmin } from "../api/tasks";
import { Caption } from "../components";

export default function TaskDetails() {
    const { id } = useParams()
    const { data: tasks, isLoading, isError } = useQuery({
        queryKey: ["tasks"],
        queryFn: () => getAllTasksAsAdmin()
    })

    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={9} display="flex" flexDirection="column">
                    <Typography variant="h6">Task 1 - Create another button</Typography>
                    <Divider sx={{ marginBottom: 2 }} />
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis aspernatur iste nam, maxime ratione explicabo, harum vitae consequatur eum sed. Sed consequatur veniam pariatur tempore quibusdam adipisci, distinctio aut corporis, alias iusto velit doloribus impedit delectus eveniet labore magni consequuntur quisquam voluptates vel quae tempora illo voluptatum maiores. Soluta dignissimos quas perferendis voluptatem illum? Veritatis ex aliquid quis quibusdam facere minus esse suscipit rerum ducimus aliquam nesciunt maxime labore voluptatem temporibus ipsum qui, error quos possimus cum dolores exercitationem! Quia quae aperiam omnis enim earum obcaecati corrupti a voluptatem. Facere eaque harum dolorem. Distinctio fugit itaque expedita tempore quia.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Caption label="Status" />
                            <Typography variant="body2">In Progress</Typography>

                            <Caption label="Assigned to" />
                            <Typography variant="body2">Bill Justin</Typography>

                            <Caption label="Deadline" />
                            <Typography variant="body2">2024/01/02</Typography>

                            <Caption label="Created at" />
                            <Typography variant="body2">2023/12/25</Typography>

                            {/* only show this if admin  */}
                            <Button variant="outlined" disableElevation 
                                size="small" fullWidth
                                sx={{ margin: "2rem 0 0 0"}}
                            >
                                Update Task
                            </Button>

                            <Button variant="contained" disableElevation 
                                size="small" fullWidth
                                sx={{ margin: "2rem 0 0.2rem 0"}}
                            >
                                Move to In Progress
                            </Button>
                            <Button variant="contained" color="error"
                                disableElevation
                                size="small"fullWidth
                                sx={{ margin: "0.2rem 0"}}
                            >
                                Cancel Task
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </Container>
    )
}