import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {LoggedInContext} from "../App";

// import {JWT} from "../../utils/JWT";

export interface PrivateRouteProps {
    path: string;
    element: React.ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({element, path}) => {
    const {loggedIn, setLoggedIn} = useContext(LoggedInContext);
// console.log(isLoggedIn);
    const navigate = useNavigate();
    useEffect(() => {
        if (!loggedIn) {
            navigate("/login");
        }
    }, [])

    return <> {loggedIn ? element : null}</>;
};

