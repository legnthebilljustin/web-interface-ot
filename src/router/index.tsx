import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PageNotFound from "../pages/errors/PageNotFound";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/dashboard",
                element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])

export default router;