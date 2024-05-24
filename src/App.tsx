import { Outlet } from "react-router-dom"
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import './assets/css/app.css'
import { theme } from "./assets/themes/app"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ fontFamily: "Lora" }}>
				<Outlet />
			</Box>
		</ThemeProvider>
		
	)
}

export default App
