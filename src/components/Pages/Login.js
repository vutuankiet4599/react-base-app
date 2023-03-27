import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AuthProvider";

export const Login = () => {
    let { data } = useContext(AppContext);
    let navigate = useNavigate();

    useEffect(() => {
        if(data.userName) {
            navigate("/");
        }
    }, [navigate, data]);

    return (
        <>
            <div className="container">Login Component</div>
        </>
    )
}