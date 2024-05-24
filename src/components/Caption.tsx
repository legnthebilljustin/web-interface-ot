import { Typography } from "@mui/material";
type Props = {
    label: string
}
function Caption({ label }: Props) {
    return <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>{ label }</Typography>
}

export default Caption