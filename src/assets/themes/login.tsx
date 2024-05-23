import { makeStyles } from "@mui/material";

const loginStyles = makeStyles((theme: any) => ({
    formContainer: {
        display: "flex",
        maxWidth: 300,
        background: "red"
    },
    formContent: {
        gap: theme.spacing(2)
    }
}))

export default loginStyles