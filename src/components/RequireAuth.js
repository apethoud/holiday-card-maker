import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({children}) {
    let { loggedInUser } = useContext(UserContext);
    let location = useLocation();

    if (!loggedInUser.id) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}