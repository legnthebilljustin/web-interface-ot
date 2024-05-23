import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import './index.css'
import AuthProvider from './components/AuthProvider.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>,
)
