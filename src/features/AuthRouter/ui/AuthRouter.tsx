import React, { useEffect } from 'react';
import { UseAuth } from "../../../app/providers/AuthProvider/config/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthPageProps } from "../../../app/providers/AuthProvider";

const AuthRouter: React.FC<AuthPageProps> = ({ children }) => {
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();

    console.log(user)

    useEffect(() => {
        if (user) {
            navigate("/auth", { state: { from: location } });
        }
    }, [user, navigate, location]);

    return (
        <>
            {children}
        </>
    );
};

export default AuthRouter;