import { Outlet } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material"

const darkTheme = createTheme({
	palette: {
		mode: "dark"
	}
})

function App() {
	return (
		// <ThemeProvider theme={darkTheme}>
			<Outlet />
		// </ThemeProvider>
		
	)
}

export default App
