import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AuthProvider";
import { Card } from "./Card";

export const Home = () => {
    let { data } = useContext(AppContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (!data.userName) {
            navigate("/login");
        }
    }, [navigate, data.userName]);

    return (
        <>
            <div className="container d-flex flex-row gap-3 mt-1">
                <Card name="card 1" />
                <Card name="card 2" />
                <Card name="card 3" />
                <Card name="card 4" />
            </div>
        </>
    )
}