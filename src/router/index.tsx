import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PageNotFound from "../pages/errors/PageNotFound";
import TaskDetails from "../pages/TaskDetails";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
            },
            {
                path: "/task/:id",
                element: <ProtectedRoute><TaskDetails /></ProtectedRoute>
            }
        ]
    },
    
])

export default router;