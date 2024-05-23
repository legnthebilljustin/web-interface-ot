import React from "react";
import { Outlet } from "react-router-dom";

type Props = {}

const Auth: React.FC<Props> = () => {
    return (
        <Outlet />
    )
}

export default Auth