import { createTheme } from "@mui/material";
import Lora from "../fonts/Lora-Regular.ttf"

export const theme = createTheme({
	typography: {
	    fontFamily: 'Raleway, Arial',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			@font-face {
				font-family: 'Raleway';
			font-style: normal;
			font-display: swap;
				font-weight: 400;
				src: local('Roboto'), local('Raleway-Regular'), url(${Lora}) format('woff2');
				unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
			}
			`,
		},
	   	MuiDataGrid: {
			styleOverrides: {
				root: {
					border: 'none',
					borderRadius: '12px',
					boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
				},
				row: {
					cursor: 'pointer',
					'&:hover': {
						backgroundColor: '#f5f5f5',
					},
				}
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
			},
		},
	},
});