import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { PropsWithChildren, useEffect } from "react";

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const user = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user === null) {
            // `replace` will remove the entire history preventing the user from going "back"
            navigate("/login", { replace: true })
        }
    }, [navigate, user])

    return children;
}